# FRAME CRAFTERS: THE DIRECTOR'S CUT
## UI/UX SPECIFICATION & IMPLEMENTATION PLAN

**Vision:** A cinematic journey that positions the "Artist" as the master of the craft, utilizing high-end motion to build immediate trust with global clients.

---

### 1. THE CONCEPTUAL PILLARS
*   **Narrative Flow:** The website is a single "Continuous Shot." Scroll-jacking will be used to move the "Camera" (User's Viewport) through 3D layers of work.
*   **The Artist's Perspective:** Visuals will focus on the *process* as much as the *result*. We show the wireframes, the color nodes, and the final frame to prove capability.
*   **Trust through Polish:** Every micro-interaction (hover, scroll, click) must have zero latency and high-quality easing. "If the UI is this good, their VFX must be legendary."

---

### 2. CORE ARCHITECTURAL SCENES

#### Scene 1: The Overture (Hero)
*   **Visual:** The Orbit Wheel returns but is now a "Lens Aperture." It frames the Artist's latest showreel.
*   **Interaction:** Scrolling doesn't move the page down immediately; it "zooms" into the center of the wheel, transitioning through the aperture into the next section.
*   **Mobile Focus:** The wheel will be vertically oriented or simplified into a "Dial" at the bottom of the screen, allowing for thumb-based interaction.

#### Scene 2: The Studio (Services & Capability)
*   **Visual:** A "Workbench" aesthetic. As the user scrolls, "Capability Cards" fly in from the Z-axis (depth).
*   **Trust Signal:** Live-updating stats (Projects in LA, London, Tokyo) to show global presence.
*   **Mobile Focus:** Horizontal card swiping with haptic-like visual feedback.

#### Scene 3: The Gallery (Testimonials & Work)
*   **Visual:** Editorial layout. Large, high-contrast typography. Testimonials aren't just boxes; they are "Critical Reviews" of the studio's performance.
*   **Mobile Focus:** Single-column vertical stacking with staggered fade-ins to keep the eye moving.

---

### 3. TECHNICAL DESIGN SYSTEM

*   **Typography:** 
    *   **Headline:** `Syne` (Bold/ExtraBold) - For that "Movie Poster" look.
    *   **Body:** `Plus Jakarta Sans` - For high-legibility "Tech" feel.
*   **Color Palette:**
    *   **Foundation:** `#020202` (Deep Space Black).
    *   **Accents:** Adaptive colors based on the current "Tool" or "Service" (e.g., DaVinci Red, After Effects Purple).
*   **Audio UI:**
    *   **Hover:** A low-frequency "thrum" (sub-bass, 40ms).
    *   **Click:** A mechanical "shutter click" (high-frequency, 20ms).
    *   **Scroll:** A subtle "air displacement" sound when sections transition.

---

### 4. MOBILE-FIRST MASTERCLASS
*   **Touch-Targets:** All interactive elements (Tools in the wheel) will have a minimum hit-area of 48px.
*   **Performance:** All animations will use `transform` and `opacity` only (GPU accelerated) to ensure 60FPS on iPhone/Android.
*   **Gestures:** Use `framer-motion` to handle drag and swipe gestures for the wheel on mobile.

---

### 5. NEXT STEPS (ACTION PLAN)
1.  **Refactor Scene.jsx:** Add the `Noise` and `CustomCursor` with enhanced mobile detection.
2.  **Rewrite Hero.jsx:** Implement the "Aperture" zoom logic and scroll-jacking.
3.  **Implement Services Section:** Create the "Z-Axis" flight animation for service cards.
4.  **Integrate Subtle Audio UI:** Load and trigger the haptic audio sounds.
