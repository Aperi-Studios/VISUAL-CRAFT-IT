import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Scan } from 'lucide-react'
import { TextReveal } from './TextReveal'

const BREAKDOWNS = [
  {
    title: "VFX REVEAL: NEON CITY",
    before: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
    layers: ["Plate", "Roto", "CGI", "Grade"]
  }
]

function ComparisonSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)

  const handleMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(x, 0), 100))
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={(e) => handleMove(e.touches[0])}
      className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-900 overflow-hidden cursor-ew-resize rounded-2xl border border-white/5 touch-none"
    >
      {/* After Image */}
      <img src={BREAKDOWNS[0].after} className="absolute inset-0 w-full h-full object-cover" alt="After" />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={BREAKDOWNS[0].before} className="absolute inset-0 w-full h-full object-cover grayscale brightness-50" alt="Before" />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-px bg-white z-20"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
           <Scan size={16} className="text-black md:hidden" />
           <Scan size={20} className="text-black hidden md:block" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-30 bg-black/40 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white">Source Plate</span>
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full">
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black">Final Frame</span>
      </div>
    </div>
  )
}

export function Breakdown() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-24 md:py-48 bg-[#020202] overflow-hidden">
      <motion.div style={{ opacity }} className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-32">
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 md:mb-8"
           >
             <Sparkles size={18} className="text-zinc-500" />
           </motion.div>
           
           <div className="text-white text-[clamp(2.5rem,10vw,7rem)] font-black uppercase tracking-tighter leading-[0.8] mb-8 md:mb-12 flex flex-col items-center">
              <TextReveal>The Magic of</TextReveal>
              <TextReveal delay={0.3} className="text-zinc-800">The Breakdown</TextReveal>
           </div>

           <p className="text-zinc-500 text-base md:text-lg font-medium max-w-xl italic px-4">
             Visual trust is built layer by layer. Explore the technical complexity hidden behind every cinematic masterpiece we deliver.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-9">
            <ComparisonSlider />
          </div>
          <div className="lg:col-span-3 space-y-8 md:space-y-12 lg:pt-8">
            <div className="bg-white/[0.01] border border-white/5 p-6 md:p-10 rounded-2xl">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-6 md:mb-10">Layer Stack —</span>
              <ul className="space-y-4 md:space-y-6">
                {BREAKDOWNS[0].layers.map(layer => (
                  <li key={layer} className="flex items-center justify-between border-b border-white/5 pb-4 group cursor-default">
                    <span className="text-white font-black tracking-widest text-[11px] uppercase group-hover:translate-x-2 transition-transform">{layer}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-white transition-colors shadow-[0_0_8px_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 border-l border-white/10">
              <p className="text-zinc-600 text-xs leading-relaxed uppercase tracking-wider font-bold">
                "Technical mastery is the bridge between a visionary idea and an unforgettable reality."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
