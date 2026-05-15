import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IMAGES = [
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop"
]

export function StudioGallery() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Header Text Overlay */}
        <div className="absolute top-24 left-8 z-10">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 block mb-4">Behind the Glass —</span>
           <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
             The <br /> <span className="text-zinc-600">Altar.</span>
           </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-4 px-8">
          {IMAGES.map((img, i) => (
            <div 
              key={i} 
              className="relative flex-shrink-0 w-[70vw] md:w-[45vw] aspect-[16/9] overflow-hidden rounded-2xl border border-white/5"
            >
              <img src={img} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Studio" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] font-mono text-white/40 tracking-widest">CAM_LOG // 00{i+1}</span>
              </div>
            </div>
          ))}
          
          {/* Studio Stats Card */}
          <div className="flex-shrink-0 w-[70vw] md:w-[35vw] aspect-[16/9] bg-white/[0.02] border border-white/10 rounded-2xl p-12 flex flex-col justify-center">
             <p className="text-white text-3xl font-black uppercase tracking-tighter mb-8 leading-tight">
               Equipped for <br /> global output.
             </p>
             <div className="space-y-6">
                <div className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Render Farm</span>
                   <span className="text-[11px] font-bold text-white uppercase">12.4 Petaflops</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Pipeline</span>
                   <span className="text-[11px] font-bold text-white uppercase">USD-Native</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Security</span>
                   <span className="text-[11px] font-bold text-white uppercase">TPN Compliant</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
