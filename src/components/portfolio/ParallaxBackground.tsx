'use client'

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion'

interface ParallaxBackgroundProps {
  imageSrc?: string
  speed?: number
  disableParallax?: boolean
  backgroundPosition?: string
}

export const ParallaxBackground = ({
  imageSrc = '/images/pine_forest.webp',
  disableParallax = false,
  backgroundPosition = 'center top'
}: ParallaxBackgroundProps) => {
  const { scrollYProgress } = useScroll()

  // Apply smooth spring physics inertia for liquid-smooth parallax movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.0005
  })

  // Map scroll progress (0 to 1) dynamically from top (0%) to bottom (100%)
  const bgPosY = useTransform(smoothProgress, [0, 1], [0, 100])
  const animatedBgPosition = useMotionTemplate`center ${bgPosY}%`

  const effectiveBgPosition = disableParallax ? backgroundPosition : (animatedBgPosition as any)

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none select-none">
      <motion.div
        className="w-full h-full"
        style={{
          backgroundImage: `url('${imageSrc}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: effectiveBgPosition,
          willChange: disableParallax ? 'auto' : 'background-position'
        }}
      />
    </div>
  )
}
