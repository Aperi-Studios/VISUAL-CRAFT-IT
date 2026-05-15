import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react'

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSigning, setIsSigning] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSigning(true)
    setTimeout(() => {
      setIsSigning(false)
      setIsSubmitted(true)
    }, 2000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#020202]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Info Side */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-6 md:mb-8 block"
            >
              Contact —
            </motion.span>
            <h2 className="text-white text-[clamp(2.5rem,10vw,5rem)] md:text-7xl font-black uppercase tracking-tighter leading-[0.8] mb-8 md:mb-12">
              Ready to <br /> <span className="text-zinc-600">Elevate?</span>
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed max-w-md mb-12 md:mb-16 italic">
              Stop settling for average. Let's create something that actually matters. Reach out for a consultation.
            </p>

            <div className="space-y-8 md:space-y-12">
              <div className="group cursor-pointer">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-2">Studio Hub</span>
                <p className="text-white text-lg md:text-xl font-bold group-hover:text-zinc-400 transition-colors">Los Angeles // London // Remote</p>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 block mb-2">Direct Channel</span>
                <p className="text-white text-lg md:text-xl font-bold group-hover:text-zinc-400 transition-colors underline underline-offset-8">hello@visualcraftit.studio</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 md:gap-12 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/5">
                 <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-zinc-700" />
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-500">Secure Transmission</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-zinc-700" />
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-zinc-500">NDA Protected</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative z-10 space-y-6 md:space-y-8 bg-white/[0.01] border border-white/5 p-8 md:p-12 backdrop-blur-3xl rounded-2xl md:rounded-3xl"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Identity</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white font-bold focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Connection</label>
                      <input required type="email" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white font-bold focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Objective</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-zinc-400 font-bold focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                      <option className="bg-black">Full-Scale Post-Production</option>
                      <option className="bg-black">VFX & 3D Environment</option>
                      <option className="bg-black">Color Grading Masterclass</option>
                      <option className="bg-black">Sound Design & Mix</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500">Briefing</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white font-bold focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800 resize-none" placeholder="Share your vision..." />
                  </div>
                  
                  <button 
                    disabled={isSigning}
                    className="group relative w-full bg-white text-black py-5 md:py-6 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs overflow-hidden transition-transform active:scale-[0.98] disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 group-hover:text-white transition-colors flex items-center justify-center gap-3 md:gap-4">
                      {isSigning ? 'Authorizing...' : 'Sign & Transmit'} <Send size={12} className="md:hidden" /> <Send size={14} className="hidden md:block" />
                    </span>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 h-full bg-white/[0.02] border border-white/10 p-24 backdrop-blur-3xl rounded-3xl flex flex-col items-center justify-center text-center"
                >
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                      <CheckCircle2 size={40} className="text-black" />
                   </div>
                   <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Handshake Confirmed.</h3>
                   <p className="text-zinc-500 font-medium max-w-xs mx-auto">
                     Your briefing has been received. Our lead artist will review and reconnect within 24 hours.
                   </p>
                   <button 
                     onClick={() => setIsSubmitted(false)}
                     className="mt-12 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 hover:text-white transition-colors"
                   >
                     New Transmission
                   </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative Grid */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-white/5 z-0" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-white/5 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
