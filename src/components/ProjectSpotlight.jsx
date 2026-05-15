import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Clock, MapPin, Tag } from 'lucide-react'

export function ProjectSpotlight({ isOpen, onClose, project }) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[11000] flex items-center justify-end bg-black/80 backdrop-blur-md"
        >
          {/* Backdrop Close Click Area */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl h-full bg-[#020202] border-l border-white/5 p-12 overflow-y-auto flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-12 right-12 w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <X size={18} />
            </button>

            <div className="mt-24 space-y-12">
               <div>
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-4 block">Selected Masterpiece —</span>
                 <h2 className="text-white text-7xl font-black uppercase tracking-tighter leading-none">{project.title}</h2>
               </div>

               <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/5">
                 <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
               </div>

               <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div className="space-y-1">
                    <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-600"><Tag size={10} /> Category</span>
                    <p className="text-white text-sm font-bold uppercase">{project.category}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-600"><Clock size={10} /> Year</span>
                    <p className="text-white text-sm font-bold uppercase">{project.year}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-600"><MapPin size={10} /> Location</span>
                    <p className="text-white text-sm font-bold uppercase">Remote / London</p>
                  </div>
                  <div className="space-y-1">
                    <span className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-600"><ArrowUpRight size={10} /> Standard</span>
                    <p className="text-white text-sm font-bold uppercase">8K Mastering</p>
                  </div>
               </div>

               <div className="space-y-6">
                 <h4 className="text-white font-black uppercase tracking-widest text-xs">The Vision —</h4>
                 <p className="text-zinc-400 text-lg font-medium leading-relaxed">
                   A deep dive into the emotional landscape of {project.title}. We utilized advanced node-based compositing and custom look-development to ensure every frame resonated with the brand's core narrative.
                 </p>
               </div>

               <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:scale-[1.02] transition-transform active:scale-[0.98]">
                 Request Similar Case Study
               </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
