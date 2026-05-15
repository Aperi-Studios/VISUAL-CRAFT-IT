import React from 'react'
import { Play, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black border-t border-white/5 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 space-y-8">
            <a href="#" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Play size={16} className="text-black ml-0.5 fill-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl leading-[0.8] tracking-tighter text-white">VISUAL</span>
                <span className="font-black text-xl leading-none tracking-tighter text-white">CRAFT IT</span>
              </div>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Crafting high-fidelity visual narratives for the world's most ambitious brands and creators.
            </p>
            <div className="flex gap-4">
              {['TW', 'IG', 'VM', 'LI'].map(s => (
                <a key={s} href="#" className="w-10 h-10 border border-white/5 flex items-center justify-center text-[10px] font-black text-zinc-500 hover:text-white hover:border-white/20 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Studio</span>
            <ul className="space-y-4">
              {['Showreel', 'Services', 'Work', 'Process'].map(l => (
                <li key={l}><a href="#" className="text-zinc-500 hover:text-white text-sm font-bold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Legal</span>
            <ul className="space-y-4">
              {['Privacy', 'Terms', 'Licensing', 'Sitemap'].map(l => (
                <li key={l}><a href="#" className="text-zinc-500 hover:text-white text-sm font-bold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Journal</span>
            <p className="text-zinc-500 text-sm">Subscribe to get industry insights and project updates.</p>
            <form className="relative">
              <input type="email" placeholder="Email Address" className="w-full bg-white/[0.03] border border-white/5 py-4 px-6 text-sm text-white focus:outline-none focus:border-white/20 transition-colors" />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest text-white hover:text-zinc-400 transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2024 Visual Craft IT Studio. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white"
          >
            Back to top 
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
