import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TextReveal } from './TextReveal'

export function FinalCTA() {
  return (
    <section className="relative py-64 bg-[#020202] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-700 mb-16 block">Final Scene —</span>
          
          <div className="text-white text-[clamp(4rem,18vw,15rem)] font-black uppercase tracking-[ -0.06em] leading-[0.7] mb-32 flex flex-col items-center">
             <TextReveal>Let's</TextReveal>
             <TextReveal delay={0.2} className="text-zinc-900 font-outline">Create</TextReveal>
             <TextReveal delay={0.4}>History.</TextReveal>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
             <button className="group relative bg-white text-black px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-sm overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_100px_rgba(255,255,255,0.1)]">
                <span className="relative z-10 flex items-center gap-6">
                  Initiate Project <ArrowRight size={20} />
                </span>
             </button>
             
             <div className="text-left border-l border-white/10 pl-12">
                <p className="text-zinc-600 text-xs font-black uppercase tracking-[0.4em] mb-3">Available for new ventures</p>
                <p className="text-white text-sm font-black uppercase tracking-[0.2em] leading-none">Global Studio // 2024</p>
             </div>
          </div>
        </motion.div>
      </div>

      {/* High-Impact Background Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02]">
         <div className="absolute inset-0 rounded-full border border-white" />
         <div className="absolute inset-[-150px] rounded-full border border-white" />
         <div className="absolute inset-[-300px] rounded-full border border-white" />
      </div>

      {/* Decorative Text Reveal */}
      <div className="absolute bottom-12 left-12 opacity-5">
         <span className="text-sm font-mono text-white tracking-[1em]">TRANSMISSION_COMPLETE</span>
      </div>
    </section>
  )
}
