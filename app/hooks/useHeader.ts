import { useState, useEffect } from 'react'

export function useHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  )

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    // Check if window is available (client-side only)
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)

      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return {
    isMenuOpen,
    windowWidth,
    toggleMenu,
  }
}
