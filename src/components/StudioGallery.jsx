import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CinematicReveal } from './TextReveal'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const IMAGES = [
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop"
]

export function StudioGallery() {
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  useGSAP(() => {
    const totalWidth = wrapperRef.current.scrollWidth - window.innerWidth
    
    gsap.to(wrapperRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative h-screen bg-black overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-12 md:top-24 left-6 md:left-8 z-10">
           <CinematicReveal>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 block mb-3 md:mb-4">Behind the Glass —</span>
             <h2 className="text-white text-[clamp(2.5rem,10vw,8rem)] md:text-8xl font-black uppercase tracking-tighter leading-none">
               The <br /> <span className="text-zinc-600">Altar.</span>
             </h2>
           </CinematicReveal>
        </div>

        <div ref={wrapperRef} className="flex gap-6 md:gap-8 px-[10vw] md:px-[20vw]">
          {IMAGES.map((img, i) => (
            <div 
              key={i} 
              className="relative flex-shrink-0 w-[80vw] md:w-[45vw] aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 group shadow-2xl"
            >
              <img src={img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-100" alt="Studio" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex items-center gap-3 md:gap-4">
                <span className="w-8 md:w-12 h-px bg-white/20" />
                <span className="text-[8px] md:text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">CAM_LOG // 00{i+1}</span>
              </div>
            </div>
          ))}
          
          <div className="flex-shrink-0 w-[80vw] md:w-[35vw] aspect-[16/9] bg-white/[0.01] border border-white/5 rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col justify-center backdrop-blur-3xl">
             <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-6 md:mb-8 block">Hardware Authority —</span>
             <p className="text-white text-xl md:text-4xl font-black uppercase tracking-tighter mb-8 md:mb-12 leading-[0.9]">
               Equipped for <br /> global scale.
             </p>
             <div className="space-y-4 md:space-y-8">
                <div className="flex justify-between border-b border-white/5 pb-2 group cursor-default">
                   <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Render Farm</span>
                   <span className="text-[9px] md:text-[11px] font-bold text-white uppercase">12.4 Petaflops</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2 group cursor-default">
                   <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Pipeline</span>
                   <span className="text-[9px] md:text-[11px] font-bold text-white uppercase">USD-Native</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2 group cursor-default">
                   <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Security</span>
                   <span className="text-[9px] md:text-[11px] font-bold text-white uppercase">TPN Compliant</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
