import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function VideoModal({ isOpen, onClose, videoId = "dQw4w9WgXcQ" }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[11000] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-2xl"
        >
          {/* Shutter Animation Overlay */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-white/5 origin-top z-[-1]"
          />

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-[11001] w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-2xl"
          >
            <X size={24} className="text-black" />
          </button>

          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateX: -45 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-[0_0_150px_rgba(255,255,255,0.1)] border border-white/10"
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1`}
              title="Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
            
            {/* Cinematic Letterbox Mask */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between">
               <div className="h-[10%] w-full bg-black/40 backdrop-blur-sm" />
               <div className="h-[10%] w-full bg-black/40 backdrop-blur-sm" />
            </div>
          </motion.div>

          {/* Background Decorative Text */}
          <div className="absolute bottom-12 left-12 opacity-10 pointer-events-none">
             <span className="text-8xl font-black text-white tracking-tighter uppercase">PLAYBACK</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
