import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal, CinematicReveal } from './TextReveal'

export function Philosophy() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} id="philosophy" className="relative py-64 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <CinematicReveal>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-12 block">
                The Artist's Creed —
              </span>
              <div className="text-white text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.75] mb-16">
                 <TextReveal>Vision</TextReveal>
                 <TextReveal delay={0.2}>Beyond</TextReveal>
                 <TextReveal delay={0.4} className="text-zinc-900 font-outline">Sight.</TextReveal>
              </div>
              <div className="w-32 h-0.5 bg-white/20 mb-12" />
            </CinematicReveal>
          </div>
          
          <div className="lg:col-span-6 relative lg:pt-32">
            <CinematicReveal delay={0.3}>
              <p className="text-zinc-400 text-3xl md:text-5xl font-light leading-[1.1] tracking-tight mb-16 italic">
                "We don't just edit video. We <span className="text-white">frame emotions</span>. We color the subtext. We build worlds that didn't exist yesterday so they can live forever tomorrow."
              </p>
              
              <div className="flex items-center gap-8">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/5 shadow-2xl overflow-hidden p-0.5">
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                       <span className="text-zinc-600 font-black text-xs">FC</span>
                    </div>
                 </div>
                 <div className="space-y-1">
                   <p className="text-white font-black uppercase tracking-[0.2em] text-sm">Lead Artist</p>
                   <p className="text-zinc-700 font-bold uppercase tracking-[0.3em] text-[10px]">Founder @ Visual Craft IT</p>
                 </div>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 right-0 w-full h-full pointer-events-none select-none z-0 flex items-center justify-end overflow-hidden"
      >
        <img 
           src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
           alt="Artist Workspace"
           className="absolute inset-0 w-full h-full object-cover opacity-[0.12] grayscale mix-blend-screen"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-transparent" />
        <span className="text-[60vw] font-black text-white/[0.01] leading-none tracking-tighter transform translate-x-1/4 relative z-10">
          AURA
        </span>
      </motion.div>
    </section>
  )
}
