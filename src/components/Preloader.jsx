import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const counterRef = useRef(null)
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const shutterTopRef = useRef(null)
  const shutterBottomRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsReady(true)
        if (onComplete) onComplete()
      }
    })

    // Cinematic Counter
    tl.to(counterRef.current, {
      innerHTML: 100,
      duration: 2.5,
      snap: { innerHTML: 1 },
      ease: "power4.inOut"
    }, 0)

    // Flash text 1 (Top)
    tl.fromTo(textRef1.current, 
      { opacity: 0, y: 10, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: "power2.out" },
      0.5
    )

    // Flash text 2 (Bottom)
    tl.fromTo(textRef2.current,
      { opacity: 0, y: -10, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: "power2.out" },
      1.0
    )

    // Fade out text and counter
    tl.to([counterRef.current, counterRef.current.nextSibling, textRef1.current, textRef2.current], {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)',
      duration: 0.6,
      ease: "power2.in"
    }, 2.8)

    // Open Cinematic Shutter
    tl.to(shutterTopRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut"
    }, 3.2)

    tl.to(shutterBottomRef.current, {
      yPercent: 100,
      duration: 1.2,
      ease: "expo.inOut"
    }, 3.2)

  }, { scope: containerRef })

  if (isReady) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] pointer-events-none flex flex-col">
      {/* Shutters */}
      <div ref={shutterTopRef} className="absolute top-0 left-0 w-full h-[50.5vh] bg-[#020202] z-10" />
      <div ref={shutterBottomRef} className="absolute bottom-0 left-0 w-full h-[50.5vh] bg-[#020202] z-10" />
      
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 z-[11]" />
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-white">
           <span ref={textRef1} className="text-[10px] font-black uppercase tracking-[1em] text-white/50 mb-4 block ml-[1em]">
             Establishing Connection
           </span>
           
           <div className="flex items-start gap-2 overflow-hidden">
              <span ref={counterRef} className="text-[15vw] md:text-[12rem] font-black leading-none tracking-tighter tabular-nums">0</span>
              <span className="text-2xl md:text-5xl font-black text-white/30 mt-4 md:mt-8">%</span>
           </div>

           <span ref={textRef2} className="text-xl md:text-3xl font-black uppercase tracking-[0.5em] text-white mt-4 block ml-[0.5em]">
             Visual Craft IT
           </span>
        </div>
      </div>
      
      {/* Film Grain / Noise Overlay specific to preloader */}
      <div className="absolute inset-0 z-30 opacity-[0.03] bg-grain pointer-events-none" />
    </div>
  )
}
