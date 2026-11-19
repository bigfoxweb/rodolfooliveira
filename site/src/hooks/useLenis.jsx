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
    }
  }, [lerp, gestureDirection, smoothWheel])

  return lenisRef
}

export function syncLenisScrollTrigger(lenis, ScrollTrigger) {
  if (!lenis || !ScrollTrigger) return

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scrollTo(value)
      }
      return lenis.scroll
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
  })

  lenis.on('scroll', ScrollTrigger.update)

  ScrollTrigger.refresh()

  return () => {
    lenis.off('scroll', ScrollTrigger.update)
    ScrollTrigger.scrollerProxy(document.body, null)
    ScrollTrigger.getAll().forEach((t) => t.kill())
  }
}
