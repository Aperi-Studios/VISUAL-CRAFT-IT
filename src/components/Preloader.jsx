import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsDone(true), 500)
          setTimeout(() => onComplete(), 1200)
          return 100
        }
        return prev + 1
      })
    }, 20)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-8"
        >
          {/* Central Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-24"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center rotate-45">
               <Play size={24} className="text-black -rotate-45 ml-1 fill-black" />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border border-dashed border-white/20" 
            />
          </motion.div>

          <div className="w-full max-w-xs space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Initialising</span>
              <span className="text-xl font-black text-white">{progress}%</span>
            </div>
            <div className="h-px w-full bg-white/10 relative overflow-hidden">
               <motion.div 
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: progress / 100 }}
                 className="absolute inset-0 bg-white origin-left"
               />
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 text-center">
              Orchestrating Cinematic Excellence
            </p>
          </div>

          {/* Decorative Corner Numbers (Coded aesthetic) */}
          <div className="absolute top-12 left-12 text-[10px] font-mono text-zinc-800">
            SEC_AUTH // 001.FC.STUDIO
          </div>
          <div className="absolute bottom-12 right-12 text-[10px] font-mono text-zinc-800">
            LAT: 34.0522 N // LON: 118.2437 W
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
