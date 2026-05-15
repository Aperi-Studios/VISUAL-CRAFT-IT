import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const PRELOAD_IMAGES = [
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598897619241-94350027ad88?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
]

export function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const imagesRef = useRef([])
  const shutterTopRef = useRef(null)
  const shutterBottomRef = useRef(null)
  const flashRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsReady(true)
        if (onComplete) onComplete()
      }
    })

    // Cinematic Sequence (10 images in ~0.8s)
    PRELOAD_IMAGES.forEach((_, i) => {
      const startTime = i * 0.08
      
      tl.set(imagesRef.current[i], { display: 'block' }, startTime)
      if (i > 0) {
        tl.set(imagesRef.current[i - 1], { display: 'none' }, startTime)
      }
      
      // Dynamic Flash & Vibration
      tl.fromTo(flashRef.current, 
        { opacity: 0.4 }, 
        { opacity: 0, duration: 0.05, ease: "power2.out" }, 
        startTime
      )
      
      tl.to(imagesRef.current[i], {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        scale: 1.02 + Math.random() * 0.03,
        duration: 0.08,
        ease: "none"
      }, startTime)
    })

    // Intense Final Flash
    tl.to(flashRef.current, {
      opacity: 1,
      duration: 0.15,
      ease: "power3.in"
    }, PRELOAD_IMAGES.length * 0.08)

    // Dramatic Shutter Reveal
    tl.to(shutterTopRef.current, {
      yPercent: -100,
      duration: 1.4,
      ease: "expo.inOut"
    }, "+=0.1")

    tl.to(shutterBottomRef.current, {
      yPercent: 100,
      duration: 1.4,
      ease: "expo.inOut"
    }, "<")

    tl.to(flashRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "<")

  }, { scope: containerRef })

  if (isReady) return null

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Shutters */}
      <div ref={shutterTopRef} className="absolute top-0 left-0 w-full h-[50.5vh] bg-[#020202] z-50 border-b border-white/5" />
      <div ref={shutterBottomRef} className="absolute bottom-0 left-0 w-full h-[50.5vh] bg-[#020202] z-50 border-t border-white/5" />
      
      {/* Flash Layer */}
      <div ref={flashRef} className="absolute inset-0 bg-white z-[60] opacity-0 pointer-events-none" />

      {/* Image Sequence Layer */}
      <div className="absolute inset-0 z-40">
        {PRELOAD_IMAGES.map((img, i) => (
          <img
            key={i}
            ref={el => imagesRef.current[i] = el}
            src={img}
            alt="Cinematic Cut"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-[1.2] hidden"
          />
        ))}
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-45 bg-grain opacity-10 pointer-events-none" />
      <div className="absolute inset-0 z-45 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 z-45 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 pointer-events-none" />

      {/* Status Bar */}
      <div className="absolute bottom-12 left-12 z-[70] flex flex-col gap-2 overflow-hidden">
         <div className="h-px w-24 bg-white/20 relative">
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-white"
            />
         </div>
         <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 block">Visual Craft IT</span>
         <span className="text-[9px] font-mono text-white/60">HANDSHAKE_ESTABLISHED // STREAMING_BUFFERS...</span>
      </div>

      {/* Frame Corners */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-white/20 z-[70]" />
      <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-white/20 z-[70]" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-white/20 z-[70]" />
    </div>
  )
}
