'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface AnimatedNavLinkProps {
    href: string
    text: string
    className?: string
    onClick?: () => void
    dropdownItems?: { label: string; href: string }[]
    isActive?: boolean
}

export const AnimatedNavLink = ({ href, text, className = '', onClick, dropdownItems, isActive = false }: AnimatedNavLinkProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const hoverColor = '#A7C7E7' // Pastel Blue for professional hover effect
    const letters = text.split('')

    const container = {
        initial: {},
        hover: {},
    }

    const child = {
        initial: {
            y: 0,
            color: isActive ? hoverColor : '#3C4F40',
        },
        hover: {
            y: 0,
            color: hoverColor,
            transition: {
                duration: 0,
                ease: [0.42, 0, 0.58, 1]
            } as any,
        },
    }

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -5,
            scale: 0.98,
            transition: {
                duration: 0.15,
                ease: [0.42, 0, 1, 1]
            } as any
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: [0, 0, 0.58, 1]
            } as any
        }
    }

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Hover Circle Indicator */}
            <motion.div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: hoverColor }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0, ease: "linear" }}
            />

            <motion.a
                href={href}
                className={`relative inline-flex overflow-hidden ${className}`}
                style={{ textDecoration: 'none' }}
                onClick={onClick}
                variants={container}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                animate={isActive ? { color: hoverColor } : { color: '#3C4F40' }}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={child}
                        className="inline-block"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.a>

            <AnimatePresence>
                {isHovered && dropdownItems && dropdownItems.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 pt-2 w-56 z-[100]"
                    >
                        <div className="bg-white/95 backdrop-blur-xl rounded-lg shadow-lg border border-[#E0E0E0]/50 overflow-hidden py-1">
                            {dropdownItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    className="block px-4 py-2.5 text-sm font-medium text-[#1F2A23] hover:bg-[#5A6E58]/5 hover:text-[#5A6E58] transition-all duration-200"
                                    whileTap={{ scale: 0.98 }}
                                    onClick={(e) => {
                                        if (onClick) onClick()
                                        // Smooth scroll handling could be added here if needed
                                    }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
