import React from 'react'
import Image from 'next/image'
import eli from '../../public/eli.png'
import Link from 'next/link'

const HomeCards = () => {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl grid grid-cols-1 gap-10 px-6 py-6 sm:grid-cols-3 sm:gap-8 sm:px-6 lg:grid-cols-3 lg:gap-10">
    
        <Link
        
          href={"/"}
          className="group flex flex-col items-center rounded-2xl border border-[#D7DEEA] bg-white px-5 py-7 text-center transition-shadow hover:shadow-md hover:shadow-[#1B2A4A]/5"
        >
          <div className="mb-3 h-40 w-40 overflow-hidden rounded-xl border border-[#D7DEEA] bg-[#E4E9F1]">
          
              <Image
                src={eli}
                alt="image"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
      
          </div>

          <span
            className="font-space-grotesk font-semibold text-[15px] text-[#1B2A4A] transition-colors group-hover:text-[#2E6FF2]"
          >
            PHYSICS
          </span>
        </Link>

         <Link
        
          href={"/"}
          className="group flex flex-col items-center rounded-2xl border border-[#D7DEEA] bg-white px-5 py-7 text-center transition-shadow hover:shadow-md hover:shadow-[#1B2A4A]/5"
        >
          <div className="mb-3 h-40 w-40 overflow-hidden rounded-xl border border-[#D7DEEA] bg-[#E4E9F1]">
          
              <Image
                src={eli}
                alt="image"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
      
          </div>

          <span
            className="font-space-grotesk font-semibold text-[15px] text-[#1B2A4A] transition-colors group-hover:text-[#2E6FF2]"
          >
            MATHEMATICS
          </span>
        </Link>

         <Link
        
          href={"/"}
          className="group flex flex-col items-center rounded-2xl border border-[#D7DEEA] bg-white px-5 py-7 text-center transition-shadow hover:shadow-md hover:shadow-[#1B2A4A]/5"
        >
          <div className="mb-3 h-40 w-40 overflow-hidden rounded-xl border border-[#D7DEEA] bg-[#E4E9F1]">
          
              <Image
                src={eli}
                alt="image"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
      
          </div>

          <span
            className="font-space-grotesk font-semibold text-[15px] text-[#1B2A4A] transition-colors group-hover:text-[#2E6FF2]"
          >
            CHEMISTRY
          </span>
        </Link>
    </section>
    </>
  )
}

export default HomeCards
