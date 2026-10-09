// components/InitialLoader.tsx
"use client";

import { useEffect, useState } from "react";
import logo from '../../public/logo.png';
import Image from "next/image";

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Speed up towards the end
        const increment = prev < 70 ? Math.random() * 12 + 4 : Math.random() * 6 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Small delay so the user sees 100%
      const timer = setTimeout(() => {
        setIsFading(true);
        // Remove from DOM after fade animation
        setTimeout(() => setIsVisible(false), 1000);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-600 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo / Brand mark */}
      <div className="mb-10 flex flex-col items-center">
        {/* Replace this with your actual logo */}
        <div className="mb-4 flex h-30 w-30 items-center justify-center rounded-2xl bg-[#eff0f4]">
          <Image
          height={100}
          width={100}
          alt="logo"
          src={logo}
          
          />
          
        </div>
        <h2 className="font-space-grotesk text-xl font-bold tracking-tight text-[#1B2A4A]">
          SomaLab
        </h2>
      </div>

      {/* Progress bar */}
      <div className="w-64 max-w-[80vw]">
        <div className="mb-2 flex justify-between text-xs text-[#1B2A4A]/60">
          <span>Loading</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1B2A4A]/10">
          <div
            className="h-full rounded-full bg-[#1B2A4A] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Optional spinning ring around the progress */}
      <div className="absolute bottom-12">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#1B2A4A]/20 border-t-[#1B2A4A]" />
      </div>
    </div>
  );
}