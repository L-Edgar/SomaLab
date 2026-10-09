"use client";
import React from 'react'
import logo from '../../public/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  homeHref?: string;
  loginHref?: string;
  registerHref?: string;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "Subjects", href: "/#subjects" },
  { label: "Virtual Labs", href: "/#virtual-labs" },
  { label: "About", href: "/#about" },
];

const Header = () => {
  
 
 
  const [open, setOpen] = useState(false);
  return (
     <header className="sticky top-0 z-50 border-b border-[#D7DEEA] bg-[#FBFCFE]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-2.5" onClick={() => console.log("hre")}>
          
            <Image
              src={logo}
              alt="logo"
              width={34}
              height={34}
              className="h-8 w-8 rounded-lg object-contain"
              priority
            />
         
          <span className="font-space-grotesk font-bold text-lg tracking-[-0.01em] text-[#1B2A4A]">
            SomaLab
          </span>
        </Link>

        {/* desktop links */}
        <nav className="hidden items-center gap-7 md:flex">
          
            <Link
              
              href={"/"}
              className="text-sm font-medium text-[#5B6B8C] transition-colors hover:text-[#1B2A4A]"
            >
              SomaLab
            </Link>
          
        </nav>

        {/* desktop auth actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={"/"}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-[#1B2A4A] transition-colors hover:bg-[#1B2A4A]/5"
          >
            Login
          </Link>
          <Link
            href={"/learner"}
            className="rounded-lg bg-[#2E6FF2] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#255ed9]"
          >
            Register
          </Link>
        </div>

        {/* mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D7DEEA] text-[#1B2A4A] md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-[#D7DEEA] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            
              <Link
                
                href={"/"}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#1B2A4A] hover:bg-[#1B2A4A]/5"
              >
                Somalab
              </Link>
          
          </nav>

          <div className="mt-3 flex flex-col gap-2 border-t border-[#D7DEEA] pt-3">
            <Link
              href={"/"}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-center text-sm font-semibold text-[#1B2A4A] hover:bg-[#1B2A4A]/5"
            >
              Login
            </Link>
            <Link
              href={"/"}
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#2E6FF2] px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#255ed9]"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>

  )
}

export default Header