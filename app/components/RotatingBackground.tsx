import { useEffect, useState } from 'react'

interface RotatingBackgroundProps {
  imageUrls: string[]
  interval?: number
  overlay?: boolean
  overlayColor?: string
  overlayOpacity?: number
}

export default function RotatingBackground({
  imageUrls,
  interval = 5000,
  overlay = false,
  overlayColor = 'black',
  overlayOpacity = 0.3,
}: RotatingBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Effect for image transition
  useEffect(() => {
    if (imageUrls.length <= 1) return

    const transitionInterval = setInterval(() => {
      setActiveIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1))
    }, interval)

    return () => clearInterval(transitionInterval)
  }, [imageUrls, interval])

  return (
    <div className='absolute inset-0 w-full h-full'>
      {imageUrls.map((url, index) => (
        <div
          key={url}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            activeIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay */}
      {overlay && (
        <div
          className='absolute inset-0 w-full h-full'
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        ></div>
      )}
    </div>
  )
}
