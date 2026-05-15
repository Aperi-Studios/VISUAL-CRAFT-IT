import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Noise() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.035] mix-blend-overlay">
      <div className="absolute inset-[-200%] bg-grain animate-grain" />
    </div>
  )
}

export function CustomCursor() {
  return null
}

// Cinematic Ambient Soundscape
export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.05
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggle = () => {
    if (isPlaying) audioRef.current.pause()
    else audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  return (
    <button 
      onClick={toggle}
      className="fixed bottom-12 right-12 z-[5000] flex items-center gap-4 group"
    >
      <div className="flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
         <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">Ambient</span>
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">{isPlaying ? 'On' : 'Off'}</span>
      </div>
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-xl group-hover:border-white transition-all text-white">
         <div className="relative flex gap-0.5 items-end h-3">
            {[1,2,3,4].map(i => (
              <motion.div 
                key={i}
                animate={isPlaying ? { height: [4, 12, 6, 10, 4] } : { height: 2 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-0.5 bg-white rounded-full"
              />
            ))}
         </div>
      </div>
    </button>
  )
}
