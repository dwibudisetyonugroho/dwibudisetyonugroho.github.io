'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export const AnimatedLogo = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    const words = ['DBS', 'have', 'a', 'good', 'day']

    const triggerAnimation = async () => {
        if (isAnimating) return

        setIsAnimating(true)

        // Sequence timings (ms)
        const sequence = [
            { index: 1, delay: 1000 }, // have
            { index: 2, delay: 1000 }, // a
            { index: 3, delay: 1000 }, // good
            { index: 4, delay: 1000 }, // day
            { index: 0, delay: 1000 }  // Back to DBS
        ]

        for (const step of sequence) {
            await new Promise(resolve => setTimeout(resolve, step.delay))
            setCurrentWordIndex(step.index)
        }

        setIsAnimating(false)
    }

    const showBrackets = isHovered || isAnimating

    return (
        <div
            className="relative cursor-pointer flex items-center justify-center h-8 w-[108px] shrink-0"
            onMouseEnter={() => {
                setIsHovered(true)
                triggerAnimation()
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28
                }}
                className="flex items-center justify-center"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: showBrackets ? 1 : 0,
                        scale: showBrackets ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap text-2xl font-bold text-black font-mono shrink-0 select-none pr-0.5"
                >
                    ['
                </motion.span>

                <div className="relative overflow-hidden h-8 flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={currentWordIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }}
                            className="text-2xl font-extrabold tracking-tight font-inter text-black whitespace-nowrap block text-center select-none"
                        >
                            {words[currentWordIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: showBrackets ? 1 : 0,
                        scale: showBrackets ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap text-2xl font-bold text-black font-mono shrink-0 select-none pl-0.5"
                >
                    ']
                </motion.span>
            </motion.div>
        </div>
    )
}
