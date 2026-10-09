"use client";
import Image from 'next/image'
import React from 'react'
import student from "../../public/student.png"
import { TypeAnimation } from 'react-type-animation'


interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

const Hero = () => {
    return (
       <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16">
      <div>
        <p
          className= "mb-3 text-xs uppercase tracking-[0.15em] text-[#5B6B8C] font-ibm-plex-mono font-medium"
        >
          MATHEMATICS . PHYSICS . CHEMISTRY
        </p>

       <h1
      className="font-space-grotesk font-bold mb-5 whitespace-pre-line text-4xl leading-[1.12] tracking-[-0.02em] text-[#1B2A4A] md:text-5xl"
    >
      <TypeAnimation
        sequence={[
          "Learn.",                    
          800,                         
          "Learn.\nExplore.",         
          800,                         
          "Learn.\nExplore.\nDiscover.",
          2000,                       
          "",                          
          500,                        
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={70}            
        style={{ display: "inline-block", whiteSpace: "pre-line" }}
        repeat={Infinity}              
        cursor={true}
      />
    </h1>

        <p className="mb-8 max-w-md text-base leading-relaxed text-[#5B6B8C]">
          Interactive lessons, virtual laboratories, and guided practice for secondary school science and mathematics.
        </p>

        <button
          
          className="inline-flex items-center gap-2 rounded-lg bg-[#2E6FF2] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#255ed9] cursor-pointer"
        >
          Start Learning
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-white"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="14 6 20 12 14 18" />
          </svg>
        </button>
      </div>


      <Image 
       src={student}
       width={800}
       height={800}
       alt='student image'
      priority
       className='rounded-2xl'
      />
      
    </section>

    )
}

export default Hero