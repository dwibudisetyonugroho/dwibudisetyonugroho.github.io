'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface SkillsListProps {
    skills: string[]
    title?: string
}

export const SkillsList = ({ skills, title = "Skills & Technologies" }: SkillsListProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current) {
                // Check if content height exceeds one line (32px)
                const hasOverflow = containerRef.current.scrollHeight > 32
                setShowButton(hasOverflow)
            }
        }

        // Check on mount and when skills change
        checkOverflow()

        // Recheck on window resize
        window.addEventListener('resize', checkOverflow)
        return () => window.removeEventListener('resize', checkOverflow)
    }, [skills])

    return (
        <div className="mt-6 pt-6 mb-6 border-t border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-black uppercase tracking-wider">{title}</h4>
                {showButton && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-xs font-bold text-black/40 hover:text-black item-hover uppercase tracking-wide flex items-center gap-1"
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                        {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </button>
                )}
            </div>
            <motion.div
                ref={containerRef}
                initial={false}
                animate={{ height: isExpanded || !showButton ? "auto" : 32 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            variants={staggerItem}
                            className="px-3 py-1.5 bg-slate-50 text-black/70 text-xs font-bold border border-slate-200 hover:bg-slate-100 hover:text-black hover:border-slate-300 item-hover"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
