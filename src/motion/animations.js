import { useEffect, useRef, useState } from 'react'

export const getRevealStyles = (
  isVisible,
  delay = 0,
  duration = 0.55,
  distance = 24
) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0px)' : `translateY(${distance}px)`,
  transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  willChange: 'opacity, transform',
})

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.2, rootMargin = '0px 0px -10% 0px', once = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== 'undefined' && !('IntersectionObserver' in window)
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(entry.target)
          return
        }

        if (!once) setIsVisible(false)
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
