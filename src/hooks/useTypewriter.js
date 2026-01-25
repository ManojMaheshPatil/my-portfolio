import { useState, useEffect, useRef, useCallback } from 'react'

const roles = [
  { text: "Building Scalable Systems", gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)" },
  { text: "Exploring AI", gradient: "linear-gradient(135deg, #f43f5e, #ec4899)" },
  { text: "Designing Interfaces", gradient: "linear-gradient(135deg, #0ea5e9, #10b981)" },
  { text: "Watching Movies", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
  { text: "Playing Games", gradient: "linear-gradient(135deg, #a855f7, #d946ef)" }
]

export function useTypewriter() {
  const [displayText, setDisplayText] = useState('')
  const [gradient, setGradient] = useState(roles[0].gradient)
  
  const roleIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const timeoutRef = useRef(null)

  const typeWriter = useCallback(() => {
    const currentRole = roles[roleIndexRef.current]
    let typeSpeed

    if (!isDeletingRef.current && charIndexRef.current === 0) {
      setGradient(currentRole.gradient)
    }

    if (isDeletingRef.current) {
      charIndexRef.current--
      setDisplayText(currentRole.text.substring(0, charIndexRef.current))
      typeSpeed = 50
    } else {
      charIndexRef.current++
      setDisplayText(currentRole.text.substring(0, charIndexRef.current))
      typeSpeed = 100
    }

    if (!isDeletingRef.current && charIndexRef.current === currentRole.text.length) {
      isDeletingRef.current = true
      typeSpeed = 2000
    } else if (isDeletingRef.current && charIndexRef.current === 0) {
      isDeletingRef.current = false
      roleIndexRef.current = (roleIndexRef.current + 1) % roles.length
      typeSpeed = 500
    }

    timeoutRef.current = setTimeout(typeWriter, typeSpeed)
  }, [])

  useEffect(() => {
    typeWriter()
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [typeWriter])

  return { displayText, gradient }
}
