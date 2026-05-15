import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { CinematicReveal } from './TextReveal'

const PROJECTS = [
  {
    title: "NEON DRIFT",
    category: "VFX / Color",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "SILENT ECHO",
    category: "Sound / Edit",
    year: "2023",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "THE APERTURE",
    category: "Cinematography",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "QUANTUM",
    category: "3D Motion",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2071&auto=format&fit=crop",
    size: "large"
  }
]

function ProjectCard({ project, index }) {
  return (
    <CinematicReveal 
      delay={index * 0.1}
      className={`relative group overflow-hidden bg-zinc-900 border border-white/5 ${
        project.size === 'large' ? 'col-span-1 md:col-span-2 aspect-[16/9]' : 'col-span-1 aspect-square md:aspect-[4/5]'
      }`}
    >
      {/* Background Image */}
      <motion.img 
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
        <div className="flex items-end justify-between">
           <div className="space-y-2 md:space-y-4">
             <span className="text-[8px] md:text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase block">{project.category} // {project.year}</span>
             <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.8] group-hover:translate-x-4 transition-transform duration-700">{project.title}</h3>
           </div>
           <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
             <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white text-black">
               <ArrowUpRight size={18} className="md:hidden" />
               <ArrowUpRight size={24} className="hidden md:block" />
             </div>
           </div>
        </div>
      </div>
    </CinematicReveal>
  )
}

export function FeaturedWork({ onProjectClick }) {
  return (
    <section id="work" className="relative py-24 md:py-48 bg-[#020202]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <CinematicReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-6 md:mb-8 block">
              Portfolio —
            </span>
            <h2 className="text-white text-[clamp(3rem,10vw,8rem)] font-black uppercase tracking-tighter leading-[0.75]">
              Selected <br /> <span className="text-zinc-800">Masterpieces</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-0 md:pb-8">
            <p className="text-zinc-500 text-base md:text-lg font-medium leading-relaxed max-w-sm italic">
              A curated collection of visual experiences crafted for clients who demand nothing less than perfection.
            </p>
          </div>
        </CinematicReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {PROJECTS.map((project, i) => (
            <div key={project.title} onClick={() => onProjectClick(project)} className="cursor-pointer">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
        
        <CinematicReveal className="mt-32 flex justify-center">
           <button className="group flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.5em] text-white">
             <div className="w-24 h-px bg-white/10 group-hover:w-32 transition-all duration-700" />
             View All Productions
             <div className="w-24 h-px bg-white/10 group-hover:w-32 transition-all duration-700" />
           </button>
        </CinematicReveal>
      </div>
    </section>
  )
}
