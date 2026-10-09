"use client";

import { useState, FormEvent } from "react";

type Mode = "login" | "register";

interface LoginValues {
    email: string;
    password: string;
}

interface RegisterValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface AuthFormProps {
    defaultMode?: Mode;
    onLogin?: (values: LoginValues) => void | Promise<void>;
    onRegister?: (values: RegisterValues) => void | Promise<void>;
}

const inputClasses =
    "w-full rounded-lg border border-[#D7DEEA] bg-white px-3.5 py-2.5 text-sm text-[#1B2A4A] placeholder:text-[#9AA6BF] outline-none transition-colors focus:border-[#2E6FF2] focus:ring-2 focus:ring-[#2E6FF2]/15";

const labelClasses = `font-ibm-plex-mono font-[500] mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-[#5B6B8C]`;

export default function AuthForm({ defaultMode = "login", onLogin, onRegister }: AuthFormProps) {
    const [mode, setMode] = useState<Mode>(defaultMode);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [loginValues, setLoginValues] = useState<LoginValues>({ email: "", password: "" });
    const [registerValues, setRegisterValues] = useState<RegisterValues>({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);

        if (mode === "register" && registerValues.password !== registerValues.confirmPassword) {
            setError("Passwords don't match.");
            return;
        }

        try {
            setSubmitting(true);
            if (mode === "login") {
                await onLogin?.(loginValues);
            } else {
                await onRegister?.(registerValues);
            }
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="mx-auto w-full max-w-95 rounded-2xl border border-[#D7DEEA] bg-white p-7">
            <div className="mb-6 flex rounded-lg border border-[#D7DEEA] bg-[#F6F8FB] p-1">
                <button
                    type="button"
                    onClick={() => setMode("login")}
                    className={`cursor-pointer flex-1 rounded-md py-2 text-sm font-semibold transition-colors ${mode === "login" ? "bg-white text-[#1B2A4A] shadow-sm" : "text-[#5B6B8C]"
                        }`}
                >
                    Sign in
                </button>
                <button
                    type="button"
                    onClick={() => setMode("register")}
                    className={`cursor-pointer flex-1 rounded-md py-2 text-sm font-semibold transition-colors ${mode === "register" ? "bg-white text-[#1B2A4A] shadow-sm" : "text-[#5B6B8C]"
                        }`}
                >
                    Create account
                </button>
            </div>

            <h2 className="font-space-grotesk font-semibold mb-5 text-lg text-[#1B2A4A]">
                {mode === "login" ? "Welcome back" : "Create your account"}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {mode === "register" && (
                    <div>
                        <label htmlFor="fullName" className={labelClasses}>
                            Full name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Jane Doe"
                            className={inputClasses}
                            value={registerValues.fullName}
                            onChange={(e) => setRegisterValues((v) => ({ ...v, fullName: e.target.value }))}
                        />
                    </div>
                )}

                <div>
                    <label htmlFor="email" className={labelClasses}>
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={inputClasses}
                        value={mode === "login" ? loginValues.email : registerValues.email}
                        onChange={(e) =>
                            mode === "login"
                                ? setLoginValues((v) => ({ ...v, email: e.target.value }))
                                : setRegisterValues((v) => ({ ...v, email: e.target.value }))
                        }
                    />
                </div>

                <div>
                    <label htmlFor="password" className={labelClasses}>
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        required
                        minLength={8}
                        autoComplete={mode === "login" ? "current-password" : "new-password"}
                        placeholder="••••••••"
                        className={inputClasses}
                        value={mode === "login" ? loginValues.password : registerValues.password}
                        onChange={(e) =>
                            mode === "login"
                                ? setLoginValues((v) => ({ ...v, password: e.target.value }))
                                : setRegisterValues((v) => ({ ...v, password: e.target.value }))
                        }
                    />
                </div>

                {mode === "register" && (
                    <div>
                        <label htmlFor="confirmPassword" className={labelClasses}>
                            Confirm password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            minLength={8}
                            autoComplete="new-password"
                            placeholder="••••••••"
                            className={inputClasses}
                            value={registerValues.confirmPassword}
                            onChange={(e) => setRegisterValues((v) => ({ ...v, confirmPassword: e.target.value }))}
                        />
                    </div>
                )}

                {mode === "login" && (
                    <div className="-mt-1 text-right">
                        <a href="/forgot-password" className="text-xs font-medium text-[#2E6FF2] hover:underline">
                            Forgot password?
                        </a>
                    </div>
                )}

                {error && <p className="text-xs font-medium text-[#C0392B]">{error}</p>}

                <button
                    type="submit"
                    disabled={submitting}
                    className="cursor-pointer mt-1 w-full rounded-lg bg-[#2E6FF2] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#255ed9] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {submitting ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
                </button>
            </form>

            <p className="mt-4 text-center text-xs text-[#5B6B8C]">
                {mode === "login" ? (
                    <>
                        New here?{" "}
                        <button type="button" onClick={() => setMode("register")} className="cursor-pointer font-semibold text-[#2E6FF2] hover:underline">
                            Create an account
                        </button>
                    </>
                ) : (
                    <>
                        Already have an account?{" "}
                        <button type="button" onClick={() => setMode("login")} className="cursor-pointer font-semibold text-[#2E6FF2] hover:underline">
                            Sign in
                        </button>
                    </>
                )}
            </p>
        </div>
    );
}
