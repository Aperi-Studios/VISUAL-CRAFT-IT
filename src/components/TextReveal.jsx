import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function TextReveal({ children, className = "", delay = 0 }) {
  const containerRef = useRef(null)
  const lettersRef = useRef([])
  const letters = Array.from(children)

  useGSAP(() => {
    gsap.fromTo(lettersRef.current, 
      { opacity: 0, y: 20, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.02,
        delay: delay,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse", // Reveal on enter, Unreveal on leave
        }
      }
    )
  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      style={{ display: "flex", overflow: "hidden", perspective: "1000px" }}
      className={className}
    >
      {letters.map((letter, index) => (
        <span 
          key={index}
          ref={el => lettersRef.current[index] = el}
          style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </span>
      ))}
    </div>
  )
}

export function CinematicReveal({ children, className = "", delay = 0, y = 30, scale = 0.95 }) {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: y, scale: scale },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        delay: delay,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play reverse play reverse",
        }
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
