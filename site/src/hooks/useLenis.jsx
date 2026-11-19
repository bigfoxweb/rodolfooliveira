import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function useLenis({ lerp = 0.1, gestureDirection = 'vertical', smoothWheel = true } = {}) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp,
      gestureDirection,
      smoothWheel,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [lerp, gestureDirection, smoothWheel])

  return lenisRef
}