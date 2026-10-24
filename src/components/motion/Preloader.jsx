import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      onComplete()
      return undefined
    }
    const timeline = gsap.timeline({ onComplete })
    timeline.fromTo('.preloader-mark', { y: 18, opacity: 0, scale: 0.94 }, { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' })
      .fromTo('.preloader-line span', { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 0.55, ease: 'power2.inOut' }, '-=0.1')
      .to('.preloader-content', { opacity: 0, y: -8, duration: 0.25, delay: 0.08 })
      .to('.preloader', { opacity: 0, duration: 0.25, pointerEvents: 'none' }, '<')
    return () => timeline.kill()
  }, [onComplete])

  return (
    <div className="preloader" aria-label="Loading portfolio">
      <div className="preloader-content">
        <div className="preloader-mark">P<span>.</span></div>
        <p>PRINCE DÉSIRÉ AHOU</p>
        <div className="preloader-line"><span /></div>
      </div>
    </div>
  )
}
