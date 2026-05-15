import React, { useState } from 'react'
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeVideoId, setActiveVideoId] = useState(null)
  const [spotlightProject, setSpotlightProject] = useState(null)

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-50 font-sans selection:bg-white/10 selection:text-white">
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
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
