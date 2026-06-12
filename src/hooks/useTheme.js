import { useState, useEffect, useCallback } from 'react'

export function useTheme() {
const [theme, setTheme] = useState(() => {
// Lazy initialization from localStorage
if (typeof window !== 'undefined') {
return localStorage.getItem('theme') || 'light'
}
return 'light'
})

useEffect(() => {
document.body.setAttribute('data-theme', theme)
localStorage.setItem('theme', theme)
}, [theme])

const toggleTheme = useCallback(() => {
setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
}, [])

return { theme, toggleTheme }
}
