'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { organicDropdownVariants } from '@/lib/animations'

interface AnimatedNavLinkProps {
    href: string
    text: string
    className?: string
    onClick?: () => void
    isActive?: boolean
    onHoverChange?: (isHovered: boolean) => void
    hasDropdown?: boolean
    isHovered?: boolean
    subItems?: { label: string; href: string }[]
    activeSubId?: string | null
}

export const AnimatedNavLink = ({
    href,
    text,
    className = '',
    onClick,
    isActive = false,
    onHoverChange,
    hasDropdown = false,
    isHovered = false,
    subItems = [],
    activeSubId = null
}: AnimatedNavLinkProps) => {
    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => onHoverChange?.(true)}
            onMouseLeave={() => onHoverChange?.(false)}
        >
            <motion.a
                href={href}
                className={`relative inline-flex items-center gap-2 overflow-visible px-4 h-11 rounded-full font-inter transition-colors duration-200 ${className} ${isActive || isHovered ? 'text-[#FF5B00]' : 'text-black'}`}
                style={{ textDecoration: 'none' }}
                onClick={onClick}
                initial="initial"
            >

                {/* Text Container - now relative to house the dots strictly under the text */}
                <span className="relative z-10 flex flex-col items-center">
                    <span className={`transition-colors duration-200 ${isActive || isHovered ? 'text-[#FF5B00]' : 'text-black'}`}>
                        {text}
                    </span>

                    {/* Progress Dots Indicator - strictly under text */}
                    <AnimatePresence>
                        {isActive && subItems.length > 0 && (
                            <motion.div 
                                initial={{ opacity: 0, y: -2 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -2 }}
                                className="absolute -bottom-1.5 flex justify-center gap-1.5 px-1 pointer-events-none"
                            >
                                {subItems.map((si) => (
                                    <div 
                                        key={si.href}
                                        className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                                            activeSubId === si.href.substring(1)
                                                ? 'bg-[#FF5B00] scale-125 shadow-[0_0_8px_rgba(255,91,0,0.4)]'
                                                : 'bg-black/20'
                                        }`}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </span>

                {hasDropdown && (
                    <motion.div
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                    >
                        <ChevronDown className="h-4 w-4" />
                    </motion.div>
                )}
            </motion.a>
        </div>
    )
}
