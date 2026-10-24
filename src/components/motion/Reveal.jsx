import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { y: 28, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, delay, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true }
      })
    }, ref)
    return () => ctx.revert()
  }, [delay])
  return <div ref={ref} className={className}>{children}</div>
}
