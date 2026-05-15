import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Play } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Showreel', href: '#showreel' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' }
]

export function Navigation({ onWatchReel }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState('')
  const [isStudioOpen, setIsStudioOpen] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const laTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now)
      setTime(laTime)
      
      const hour = parseInt(laTime.split(':')[0])
      setIsStudioOpen(hour >= 9 && hour < 18)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : '' }, [isOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group relative z-[1001]">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <Play size={16} className="text-black relative z-10 ml-0.5 fill-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg leading-[0.8] tracking-tighter text-white">VISUAL</span>
            <span className="font-black text-lg leading-none tracking-tighter text-white">CRAFT IT</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-1.5 p-1 rounded-full border transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent'
        }`}>
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => {
                if (link.name === 'Showreel') {
                  e.preventDefault()
                  onWatchReel()
                }
              }}
              className="px-6 py-2 rounded-full text-[11px] font-black tracking-[0.2em] uppercase text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Authority Cluster */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-6 border-l border-white/5 pl-6">
             <div className="flex flex-col items-end">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">Studio Time // LA</span>
                <span className="text-[10px] font-mono font-bold text-white">{time}</span>
             </div>
             <div className="flex flex-col items-start">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">Status</span>
                <div className="flex items-center gap-1.5">
                   <div className={`w-1 h-1 rounded-full ${isStudioOpen ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-orange-500'}`} />
                   <span className="text-[10px] font-black uppercase tracking-widest text-white">{isStudioOpen ? 'Active' : 'Standby'}</span>
                </div>
             </div>
          </div>

          <button className="relative group">
            <div className="absolute inset-0 bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative block bg-white text-black text-[11px] font-black tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-transform active:scale-95">
              Start Project
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden relative z-[1001] p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black z-[1000] flex flex-col p-12"
          >
            <div className="mt-24 flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => {
                    setIsOpen(false)
                    if (link.name === 'Showreel') {
                      e.preventDefault()
                      onWatchReel()
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-6xl font-black tracking-tighter text-zinc-800 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-auto pt-12 border-t border-white/10 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                 <p className="text-zinc-500 text-sm font-medium">Ready to start? Let's talk.</p>
                 <div className="flex flex-col items-end">
                    <span className="text-[8px] font-black uppercase text-zinc-700 tracking-widest">Studio Status</span>
                    <span className="text-[10px] font-black uppercase text-white tracking-widest">{isStudioOpen ? 'Active' : 'Standby'}</span>
                 </div>
              </div>
              <button className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm">
                Book a Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
