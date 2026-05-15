import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Sparkles, ChevronDown, Video, Layers, Scissors, Palette, Film, Share2, Monitor, Wand2, Tv, Presentation } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { TextReveal } from './TextReveal'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const SERVICES = [
  { id: 'narrative', name: 'Narrative Cutting', icon: Scissors, color: '#EA77FF', bg: '#330066', desc: 'Story-first cinematic editing for film & doc' },
  { id: 'motion', name: 'Motion Design', icon: Layers, color: '#9999FF', bg: '#00005C', desc: 'Elite graphics & dynamic visual language' },
  { id: 'grading', name: 'Cinematic Grading', icon: Palette, color: '#FF7777', bg: '#4A1111', desc: 'Atmospheric color science & look dev' },
  { id: 'vfx', name: 'Visual Effects', icon: Wand2, color: '#00E5FF', bg: '#003333', desc: 'Seamless compositing & invisible effects' },
  { id: 'commercial', name: 'Commercial Cut', icon: Tv, color: '#FFFFFF', bg: '#222222', desc: 'High-impact rhythmic editing for brands' },
  { id: 'social', name: 'Social Content', icon: Share2, color: '#FF9A00', bg: '#331F00', desc: 'Dynamic vertical-first narrative editing' },
  { id: 'sound', name: 'Sound Design', icon: Film, color: '#31A8FF', bg: '#001E36', desc: 'Immersive auditory world building' },
  { id: 'mastering', name: 'Mastering', icon: Monitor, color: '#FFFFFF', bg: '#111111', desc: 'Final 8K delivery & technical QC' },
  { id: 'trailers', name: 'Trailers', icon: Play, color: '#f59e0b', bg: '#451a03', desc: 'Epic pacing for high-stakes teasers' },
  { id: 'corporate', name: 'Corporate Film', icon: Presentation, color: '#94a3b8', bg: '#1e293b', desc: 'Professional storytelling for global firms' },
]

const HERO_BGS = [
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
]

export function Hero({ onWatchReel }) {
  const [bgIndex, setBgIndex] = useState(0)
  const [rotationStep, setRotationStep] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const mainWheelRef = useRef(null)
  const itemsRef = useRef([])
  const containerRef = useRef(null)

  const TOTAL_SERVICES = SERVICES.length
  const ANGLE_PER_STEP = 360 / TOTAL_SERVICES
  const RADIUS = 340
  const WHEEL_SIZE = RADIUS * 2

  const handleToolClick = (index) => {
    const activeIndex = ((rotationStep % TOTAL_SERVICES) + TOTAL_SERVICES) % TOTAL_SERVICES
    let diff = index - activeIndex
    if (diff > TOTAL_SERVICES / 2) diff -= TOTAL_SERVICES
    if (diff < -TOTAL_SERVICES / 2) diff += TOTAL_SERVICES
    setRotationStep(prev => prev + diff)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(prev => (prev + 1) % HERO_BGS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => setRotationStep(prev => prev + 1), 2500)
    return () => clearInterval(interval)
  }, [isHovering])

  useGSAP(() => {
    const activeIndex = ((rotationStep % TOTAL_SERVICES) + TOTAL_SERVICES) % TOTAL_SERVICES

    gsap.to(mainWheelRef.current, {
      rotate: rotationStep * -ANGLE_PER_STEP,
      duration: 1.2,
      ease: "expo.out"
    })

    SERVICES.forEach((_, i) => {
      const item = itemsRef.current[i]
      const btn = item.querySelector('button')
      const label = item.querySelector('.service-label')
      const distance = Math.abs(i - activeIndex)
      const displayDist = distance > TOTAL_SERVICES/2 ? TOTAL_SERVICES - distance : distance
      const isActive = displayDist === 0

      gsap.to(item, {
        rotate: rotationStep * ANGLE_PER_STEP,
        duration: 1.2,
        ease: "expo.out"
      })

      let targetScale = 0.95
      let targetOpacity = 0.6
      let targetBlur = 2.5
      let targetZ = 10

      if (isActive) {
        targetScale = 1.45
        targetOpacity = 1
        targetBlur = 0
        targetZ = 50
      } else if (displayDist >= 2) {
        targetScale = 0.75
        targetOpacity = 0.15
        targetBlur = 8
        targetZ = 5
      }

      gsap.to(btn, {
        scale: targetScale,
        opacity: targetOpacity,
        filter: `blur(${targetBlur}px)`,
        borderColor: isActive ? SERVICES[i].color : 'rgba(255,255,255,0.04)',
        backgroundColor: isActive ? SERVICES[i].bg : 'rgba(255, 255, 255, 0.01)',
        duration: 0.8,
        ease: "power2.out"
      })
      
      if (label) {
        gsap.to(label, {
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : -10,
          duration: 0.8,
          ease: "power2.out"
        })
      }
      
      gsap.set(item, { zIndex: targetZ })
    })
  }, { dependencies: [rotationStep], scope: containerRef })

  useGSAP(() => {
    gsap.to(contentRef.current, {
      y: -50,
      opacity: 0.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  }, { scope: containerRef })

  const activeIndex = ((rotationStep % TOTAL_SERVICES) + TOTAL_SERVICES) % TOTAL_SERVICES
  const activeService = SERVICES[activeIndex]

  const getCoordinates = (index) => {
    const baseAngle = 270 + (index * ANGLE_PER_STEP)
    const rad = (baseAngle * Math.PI) / 180
    const x = RADIUS + RADIUS * Math.cos(rad) - 40
    const y = RADIUS + RADIUS * Math.sin(rad) - 40
    return { x, y }
  }

  return (
    <div ref={containerRef}>
      <section ref={heroRef} id="showreel" className="relative h-screen bg-[#020202] overflow-hidden flex flex-col items-center">
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <AnimatePresence>
             <motion.img 
               key={bgIndex}
               src={HERO_BGS[bgIndex]} 
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 0.15, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               alt="Post Production Studio"
               className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-screen"
             />
           </AnimatePresence>
           <div className="absolute inset-0 bg-[#020202]/60 backdrop-blur-[2px]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />
           <div className="absolute top-0 left-0 right-0 h-[800px] flex justify-center">
              <motion.div 
                animate={{ backgroundColor: activeService.color }}
                transition={{ duration: 0.8 }}
                className="absolute top-[-200px] w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.15]" 
              />
              <motion.div 
                animate={{ backgroundColor: activeService.color }}
                transition={{ duration: 0.8 }}
                className="absolute top-[100px] w-[1200px] h-[500px] rounded-[100%] blur-[200px] opacity-[0.08]" 
              />
           </div>
        </div>

        <div ref={contentRef} className="relative z-20 text-center px-6 pt-40 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-10 text-white"
          >
            <Sparkles size={14} className="text-zinc-500" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-400">Master Editing Studio</span>
          </motion.div>

          <div className="text-[clamp(3.5rem,10vw,8.5rem)] font-black uppercase tracking-[-0.04em] leading-[0.85] text-white flex flex-col items-center mb-12">
            <TextReveal>Frame</TextReveal>
            <div className="flex items-center justify-center gap-4">
               <TextReveal delay={0.2} className="text-zinc-500 italic font-light tracking-tight">The</TextReveal>
               <TextReveal delay={0.4}>Unseen</TextReveal>
            </div>
          </div>
          
          <button 
            onClick={onWatchReel}
            className="group relative inline-flex items-center gap-6 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.15)] overflow-hidden"
          >
            <motion.div 
              animate={{ x: ['-200%', '300%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-[-20deg]"
            />
            <span className="relative z-10">Launch Showreel</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
               <Play size={14} fill="white" className="ml-0.5" />
            </div>
          </button>
        </div>

        <div className="relative w-full max-w-[1200px] h-[650px] mt-auto flex justify-center pointer-events-none text-white">
          
          <div className="absolute top-[260px] left-1/2 -translate-x-1/2 z-40 flex flex-col items-center text-center w-96">
            <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] font-black mb-4">Post-Production Power</span>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeService.id}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h2 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter drop-shadow-2xl">{activeService.name}</h2>
                <p className="text-sm text-zinc-500 font-bold uppercase tracking-[0.2em]">{activeService.desc}</p>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  className="mt-8 h-[2px] rounded-full"
                  style={{ backgroundColor: activeService.color, boxShadow: `0 0 30px 2px ${activeService.color}` }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div 
            className="absolute inset-0 flex justify-center pointer-events-auto"
            style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 45%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 45%, transparent 80%)' }}
          >
            <div 
              ref={mainWheelRef}
              className="absolute top-[80px]" 
              style={{ width: WHEEL_SIZE, height: WHEEL_SIZE }}
            >
              <div className="absolute inset-0 rounded-full border border-white/[0.04] shadow-[inset_0_0_120px_rgba(255,255,255,0.02)]" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute inset-[-30px] rounded-full border border-dashed border-white/[0.03]" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-[30px] rounded-full border border-dotted border-white/[0.08] opacity-40" />

              {SERVICES.map((svc, index) => {
                const { x, y } = getCoordinates(index)
                return (
                  <div 
                    key={svc.id} 
                    ref={el => itemsRef.current[index] = el}
                    className="absolute flex items-center justify-center text-white" 
                    style={{ left: x, top: y, width: 80, height: 80 }}
                  >
                    <button 
                      onMouseEnter={(e) => {
                        setIsHovering(true)
                        gsap.to(e.currentTarget, {
                          boxShadow: `0 0 30px -5px ${svc.color}80, inset 0 0 15px ${svc.color}40`,
                          borderColor: svc.color,
                          duration: 0.3
                        })
                      }}
                      onMouseLeave={(e) => {
                        setIsHovering(false)
                        gsap.to(e.currentTarget, {
                          boxShadow: '0 0 0px 0px rgba(0,0,0,0)',
                          borderColor: activeIndex === index ? svc.color : 'rgba(255,255,255,0.04)',
                          duration: 0.3
                        })
                      }}
                      onClick={() => handleToolClick(index)}
                      className="relative rounded-full flex items-center justify-center overflow-hidden border pointer-events-auto cursor-pointer group"
                      style={{ width: '100%', height: '100%', backdropFilter: 'blur(16px)' }}
                    >
                       <svc.icon 
                        size={32}
                        className={`transition-all duration-300 ${activeIndex === index ? 'text-white' : 'text-zinc-500 group-hover:text-white'}`}
                        strokeWidth={activeIndex === index ? 2 : 1.5}
                       />
                    </button>
                    <div className="service-label absolute top-[100px] w-32 text-center pointer-events-none opacity-0">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap drop-shadow-md">{svc.name}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-30 text-white">
          <span className="text-[8px] font-black uppercase tracking-[0.5em]">Explore Capability</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>
    </div>
  )
}
