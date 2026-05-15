import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CLIENTS = [
  "MARVEL", "DISNEY+", "NETFLIX", "WARNER BROS", "HBO MAX", "SONY PICTURES", "PARAMOUNT", "UNIVERSAL"
]

export function Clients() {
  const marqueeRef = useRef(null)

  useGSAP(() => {
    const marquee = marqueeRef.current
    const items = marquee.children
    const totalWidth = marquee.scrollWidth / 2

    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      repeat: -1,
      ease: "none"
    })
  }, { scope: marqueeRef })

  return (
    <section className="relative py-24 bg-[#020202] border-y border-white/[0.03] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 mb-12">
         <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 block text-center">Global Partners —</span>
      </div>
      
      <div className="flex relative overflow-hidden">
        <div 
          ref={marqueeRef}
          className="flex gap-24 items-center whitespace-nowrap"
        >
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <span 
              key={i} 
              className="text-4xl md:text-6xl font-black text-white/10 hover:text-white/40 transition-colors cursor-default tracking-tighter uppercase"
            >
              {client}
            </span>
          ))}
        </div>

        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020202] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020202] to-transparent z-10" />
      </div>
    </section>
  )
}
