'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TicketCard } from '@/components/portfolio/TicketCard'
import { ParallaxBackground } from '@/components/portfolio/ParallaxBackground'

export default function WelcomePortal() {
  // Stagger container variants for header/grid animation on entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
    }
  }

  return (
    <div className="relative min-h-screen text-black flex flex-col justify-between overflow-x-hidden pb-12">
      {/* Static top-aligned background image matching /profile/ page texture without parallax */}
      <ParallaxBackground imageSrc="/images/pine_forest.webp" disableParallax={true} backgroundPosition="center top" />

      {/* Top Right Experimentation Button (Local Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
          <Link 
            href="/ticket" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white border border-slate-300/60 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 transition-all active:scale-[0.985] shadow-sm select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fb8500]"></span>
            </span>
            <span>EXPERIMENTATION</span>
          </Link>
        </div>
      )}

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 max-w-6xl mx-auto w-full relative z-10">
        {/* Header Block */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#023047] tracking-tight">
            Welcome
            <motion.span
              animate={{ color: ['#023047', '#023047', '#FB8500', '#FB8500'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                times: [0, 0.4999, 0.5, 1],
                ease: 'linear'
              }}
            >
              .
            </motion.span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore my portfolio of end-to-end data analytics projects, or view my professional background, certifications, and credentials.
          </p>
        </motion.div>

        {/* Portal Cards Grid - Responsive Grid (Side-by-Side on Desktop) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1: Explore Profile */}
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <Link href="/profile/" className="block w-full max-w-[600px]">
              <TicketCard 
                title="Explore Profile"
                tags={["Technical Skill", "Certification", "Education", "Project Portfolio", "Professional Experience", "contacts"]}
                baseHeight={208}
                riseOnHover={true}
                maxTilt={3}
                hoverSpringConfig={{ stiffness: 120, damping: 20 }}
              />
            </Link>
          </motion.div>

          {/* Card 2: View Projects */}
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <Link href="/projects/" className="block w-full max-w-[600px]">
              <TicketCard 
                title="View Projects"
                tags={["Project Portfolio"]}
                baseHeight={208}
                riseOnHover={true}
                maxTilt={3}
                hoverSpringConfig={{ stiffness: 120, damping: 20 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
