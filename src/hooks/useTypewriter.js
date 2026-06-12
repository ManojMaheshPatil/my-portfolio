import { useState, useEffect, useRef, useCallback } from 'react'

const roles = [
{ text: "I build things for the web", color: "#ff6b5e" },
{ text: "Backend, frontend, whatever it takes", color: "#2ec4b6" },
{ text: "Professional bug fixer", color: "#7b6ef6" },
{ text: "Powered by chai", color: "#f59e0b" }
]

export function useTypewriter() {
const [displayText, setDisplayText] = useState('')
const [color, setColor] = useState(roles[0].color)

const roleIndexRef = useRef(0)
const charIndexRef = useRef(0)
const isDeletingRef = useRef(false)
const timeoutRef = useRef(null)

const typeWriter = useCallback(() => {
const currentRole = roles[roleIndexRef.current]
let typeSpeed

if (!isDeletingRef.current && charIndexRef.current === 0) {
setColor(currentRole.color)
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

return { displayText, color }
}
