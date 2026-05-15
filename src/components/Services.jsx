import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Layers, Play, Video, Box } from 'lucide-react'
import { CinematicReveal } from './TextReveal'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const SERVICES = [
  {
    num: '01',
    title: 'Motion & VFX',
    description: 'Bespoke animations and visual effects that push the boundaries of storytelling. From title sequences to invisible compositing.',
    icon: Layers,
    accent: '#9999FF',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4'
  },
  {
    num: '02',
    title: 'Precision Editing',
    description: 'Rhythmic storytelling that captures and holds attention through expert pacing. We shape narrative flow for maximum impact.',
    icon: Play,
    accent: '#EA77FF',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-video-editor-working-on-a-project-in-a-studio-41071-large.mp4'
  },
  {
    num: '03',
    title: 'Color Grading',
    description: 'Transformative color work that defines the emotional landscape of your project. HDR mastering and cinematic look development.',
    icon: Video,
    accent: '#FF7777',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-working-with-colors-on-a-computer-screen-41075-large.mp4'
  },
  {
    num: '04',
    title: '3D Production',
    description: 'Full-spectrum 3D services from initial concept to hyper-realistic rendering. Environments, products, and characters.',
    icon: Box,
    accent: '#FF9A00',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-animator-working-on-a-3d-model-41072-large.mp4'
  }
]

export function Services() {
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
        end: "+=3000",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="services" className="relative h-screen bg-[#020202] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
         <span className="text-[30vw] font-black text-white tracking-tighter uppercase">CAPABILITY</span>
      </div>

      <div className="absolute top-24 left-8 z-10">
         <CinematicReveal>
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 block mb-4">Post-Production Power —</span>
           <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
             Expert <br /> <span className="text-zinc-600">Services.</span>
           </h2>
         </CinematicReveal>
      </div>

      <div className="absolute bottom-12 left-12 z-10 hidden md:flex gap-12 border-l border-white/10 pl-12">
          <CinematicReveal delay={0.5}>
            <div className="flex gap-12">
              <div>
                <span className="block text-white text-3xl font-black">24/7</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Global Studio</span>
              </div>
              <div>
                <span className="block text-white text-3xl font-black">4K</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Standard Delivery</span>
              </div>
            </div>
          </CinematicReveal>
      </div>

      <div className="h-full flex items-center pt-32">
        <div ref={wrapperRef} className="flex gap-8 px-[10vw] md:px-[20vw]">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.num}
              className="flex-shrink-0 w-[85vw] md:w-[60vw] max-w-4xl h-[60vh] min-h-[500px] relative group rounded-3xl overflow-hidden bg-zinc-900 border border-white/10"
            >
              {/* Dynamic Video Background on Hover */}
              <img 
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-start justify-between mb-auto">
                   <span className="text-white font-black text-2xl tracking-tighter bg-black/50 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                     {svc.num}
                   </span>
                   <div className="w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                     <svc.icon size={32} className="text-white group-hover:text-black transition-colors" />
                   </div>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                  {svc.title}
                </h3>
                
                <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  {svc.description}
                </p>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-8">
                   <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-transform shadow-2xl">
                     Explore Capability
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
