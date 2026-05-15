import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Play } from 'lucide-react'
import { CinematicReveal } from './TextReveal'

const TESTIMONIALS = [
  {
    quote: "Visual Craft IT transformed our brand video into something truly cinematic. Their attention to detail and creative vision exceeded every expectation we had.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechVenture Inc.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Working with their team was incredible. They understood our vision immediately and delivered a showreel that perfectly captured our brand essence.",
    author: "Marcus Webb",
    role: "Founder",
    company: "Neon Studios",
    rating: 5,
    image: null
  },
  {
    quote: "The level of craftsmanship is unmatched. Our campaign video went viral and drove 3x engagement. We've found our creative partners for life.",
    author: "Elena Rodriguez",
    role: "Creative Lead",
    company: "Pulse Media",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580894732444-8ecded790047?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Their color grading brought our documentary to life. The mood and tone were exactly what we envisioned. True masters of the craft.",
    author: "David Kim",
    role: "Film Director",
    company: "Independent",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "We needed high-end VFX on a tight deadline, and Visual Craft IT delivered flawlessly. Their pipeline is incredibly efficient and secure.",
    author: "Priya Patel",
    role: "Post Producer",
    company: "Atlas Films",
    rating: 5,
    image: null
  },
  {
    quote: "The sound design they created for our commercial was immersive and impactful. It elevated the entire production to a new level of professionalism.",
    author: "James Wilson",
    role: "Creative Director",
    company: "Echo Advertising",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Their motion design team is top-tier. They translated complex technical concepts into beautiful, fluid animations that our audience loved.",
    author: "Anita Sharma",
    role: "Head of Content",
    company: "Innovate AI",
    rating: 5,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Consistently reliable and always pushing the boundaries. Visual Craft IT is our go-to studio for all 8K mastering and final delivery.",
    author: "Thomas Miller",
    role: "Technical Director",
    company: "Global Broadcast",
    rating: 5,
    image: null
  },
  {
    quote: "The trailer they cut for our game launch was explosive. Perfect pacing, incredible sound mix, and it built massive hype.",
    author: "Chloe Dubois",
    role: "Lead Marketer",
    company: "Polyhedron Games",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "A true partnership. They don't just execute instructions; they bring artistic insight that makes the final product significantly better.",
    author: "Robert Chang",
    role: "Executive Producer",
    company: "Horizon Media",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
  }
]

export function Testimonials({ onWatchVideo }) {
  return (
    <section id="testimonials" className="relative py-32 bg-[#020202] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <CinematicReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-6 block">
              Voices —
            </span>
            <h2 className="text-white text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              What the <br /> <span className="text-zinc-600 italic font-light tracking-tight">Industry</span> Says
            </h2>
            <div className="w-24 h-px bg-white/10" />
          </div>
          <div className="lg:col-span-7 pt-12">
            <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-lg italic">
              We've had the privilege of collaborating with forward-thinking teams to create visual stories that resonate.
            </p>
          </div>
        </CinematicReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 relative z-10">
          {TESTIMONIALS.map((t, i) => (
            <CinematicReveal 
              key={t.author}
              delay={i * 0.1}
              className="bg-[#020202] p-12 flex flex-col min-h-[450px] group hover:bg-white/[0.02] transition-colors"
            >
              {t.image && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
                  <img src={t.image} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" alt={t.author} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                      <Play size={14} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={10} fill="white" className="text-white" />
                ))}
              </div>
              
              <Quote size={32} className="text-white/5 mb-6 group-hover:text-white/10 transition-colors" />
              
              <p className="text-white text-lg font-medium leading-relaxed mb-auto italic">
                "{t.quote}"
              </p>
              
              <div className="mt-12 flex items-end justify-between border-t border-white/5 pt-8">
                <div>
                  <p className="text-white font-black uppercase tracking-widest text-[11px] mb-1">{t.author}</p>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[9px]">{t.role} @ {t.company}</p>
                </div>
              </div>
            </CinematicReveal>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 right-[-5%] text-[40vw] font-black text-white/[0.01] leading-none pointer-events-none select-none z-0">
        T
      </div>
    </section>
  )
}
