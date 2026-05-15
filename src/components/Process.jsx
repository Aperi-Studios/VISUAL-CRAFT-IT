import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Edit3, Palette, CheckCircle2 } from 'lucide-react'
import { CinematicReveal } from './TextReveal'

const STEPS = [
  {
    num: '01',
    title: 'Ideation',
    desc: 'Deep collaboration to define the narrative core and visual aesthetic of your production.',
    icon: Sparkles
  },
  {
    num: '02',
    title: 'Execution',
    desc: 'High-fidelity editing and VFX implementation using industry-leading toolsets.',
    icon: Edit3
  },
  {
    num: '03',
    title: 'Refinement',
    desc: 'Cinematic color grading and sound design to elevate the emotional resonance.',
    icon: Palette
  },
  {
    num: '04',
    title: 'Delivery',
    desc: 'Final mastering in 4K/8K formats, optimized for global cinematic and digital platforms.',
    icon: CheckCircle2
  }
]

export function Process() {
  return (
    <section id="process" className="relative py-32 bg-[#020202]">
      <div className="max-w-[1400px] mx-auto px-8">
        <CinematicReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-7">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 block">
              The Blueprint —
            </span>
            <h2 className="text-white text-[ clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              A Disciplined <br /> <span className="text-zinc-600">Workflow</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-6">
            <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-md italic">
              Trust is built on transparency. Our refined pipeline ensures every frame is meticulously crafted to meet global standards.
            </p>
          </div>
        </CinematicReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-white/5 z-0" />
          
          {STEPS.map((step, i) => (
            <CinematicReveal
              key={step.num}
              delay={i * 0.1}
              className="relative z-10 group"
            >
              <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-10 group-hover:bg-white group-hover:border-white transition-all duration-500">
                <step.icon size={32} className="text-white group-hover:text-black transition-colors" />
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 block">{step.num} —</span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed pr-6">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Line */}
              <div className="lg:hidden w-px h-12 bg-white/10 my-8 ml-12" />
            </CinematicReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
