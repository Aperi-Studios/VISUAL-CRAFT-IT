import React, { useState, useEffect } from 'react'
import Lenis from 'lenis'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Clients } from './components/Clients'
import { FeaturedWork } from './components/FeaturedWork'
import { Process } from './components/Process'
import { Breakdown } from './components/Breakdown'
import { Philosophy } from './components/Philosophy'
import { StudioGallery } from './components/StudioGallery'
import { Console } from './components/Console'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { FinalCTA } from './components/FinalCTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Noise, CustomCursor, AudioPlayer } from './components/Scene'
import { Preloader } from './components/Preloader'
import { VideoModal } from './components/VideoModal'
import { ProjectSpotlight } from './components/ProjectSpotlight'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeVideoId, setActiveVideoId] = useState(null)
  const [spotlightProject, setSpotlightProject] = useState(null)

  useEffect(() => {
    if (isLoading) return

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.to('#scroll-progress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [isLoading])

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-50 font-sans selection:bg-white/10 selection:text-white">
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <div className="fixed top-0 left-0 w-full h-1 z-[9999] origin-left bg-gradient-to-r from-zinc-800 via-white to-zinc-800 scale-x-0" id="scroll-progress" />
          
          <CustomCursor />
          <Noise />
          <AudioPlayer />
          
          <Navigation onWatchReel={() => setActiveVideoId("dQw4w9WgXcQ")} />
          
          <main>
            <Hero onWatchReel={() => setActiveVideoId("dQw4w9WgXcQ")} />
            <Clients />
            <FeaturedWork onProjectClick={(project) => setSpotlightProject(project)} />
            <Process />
            <Breakdown />
            <Philosophy />
            <StudioGallery />
            <Console />
            <Services />
            <Testimonials onWatchVideo={(id) => setActiveVideoId(id)} />
            <FinalCTA />
            <Contact />
          </main>
          
          <Footer />

          {/* Modals */}
          <VideoModal 
            isOpen={!!activeVideoId} 
            onClose={() => setActiveVideoId(null)} 
            videoId={activeVideoId || "dQw4w9WgXcQ"}
          />
          <ProjectSpotlight 
            isOpen={!!spotlightProject} 
            onClose={() => setSpotlightProject(null)} 
            project={spotlightProject}
          />
        </>
      )}
    </div>
  )
}
