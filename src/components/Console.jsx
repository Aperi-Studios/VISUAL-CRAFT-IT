import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, HardDrive, Monitor, Zap } from 'lucide-react'
import { CinematicReveal } from './TextReveal'

const GEAR = [
  { 
    cat: "Workstation", 
    title: "Mac Studio M2 Ultra", 
    spec: "192GB RAM // 76-Core GPU",
    icon: Cpu 
  },
  { 
    cat: "Monitoring", 
    title: "Pro Display XDR", 
    spec: "1600 nits // 6K Retina",
    icon: Monitor 
  },
  { 
    cat: "Storage", 
    title: "Promise Pegasus R12", 
    spec: "160TB RAID-6 // 2800MB/s",
    icon: HardDrive 
  },
  { 
    cat: "Network", 
    title: "10GbE Fiber Link", 
    spec: "Dedicated Global Uplink",
    icon: Zap 
  }
]

export function Console() {
  return (
    <section className="relative py-24 md:py-32 bg-[#020202] border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <CinematicReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 items-end">
           <div className="lg:col-span-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-6 md:mb-8 block">Hardware Stack —</span>
              <h2 className="text-white text-[clamp(2.5rem,10vw,7rem)] md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-6 md:mb-8">
                 The Artist's <br /> <span className="text-zinc-800">Console.</span>
              </h2>
           </div>
           <div className="lg:col-span-4 pb-0 md:pb-6">
              <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-xs italic">
                To create what's never been seen, we use tools that have never been more powerful. A custom-built pipeline designed for zero-latency 8K output.
              </p>
           </div>
        </CinematicReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
           {GEAR.map((item, i) => (
             <CinematicReveal 
               key={item.title}
               delay={i * 0.1}
               className="bg-[#020202] p-8 md:p-12 group hover:bg-white/[0.02] transition-colors"
             >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 md:mb-12 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-zinc-600 group-hover:text-white md:hidden" />
                  <item.icon size={24} className="text-zinc-600 group-hover:text-white hidden md:block" />
                </div>
                <div className="space-y-3 md:space-y-4">
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">{item.cat}</span>
                   <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">{item.title}</h3>
                   <p className="text-zinc-500 font-mono text-[9px] md:text-[10px] tracking-widest uppercase">{item.spec}</p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
                   <span className="text-[8px] font-mono text-zinc-700">STATUS: OPTIMAL</span>
                   <div className="w-24 h-px bg-zinc-800" />
                </div>
             </CinematicReveal>
           ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-900/20 to-transparent pointer-events-none" />
    </section>
  )
}
