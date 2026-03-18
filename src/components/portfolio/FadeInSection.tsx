'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { fadeInUp } from '@/lib/animations'

interface FadeInSectionProps {
    children: ReactNode
    className?: string
}

export const FadeInSection = ({ children, className = '' }: FadeInSectionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.div>
    )
}
