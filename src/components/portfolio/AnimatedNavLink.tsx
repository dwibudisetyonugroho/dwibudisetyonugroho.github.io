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
}

export const AnimatedNavLink = ({
    href,
    text,
    className = '',
    onClick,
    isActive = false,
    onHoverChange,
    hasDropdown = false,
    isHovered = false
}: AnimatedNavLinkProps) => {
    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => onHoverChange?.(true)}
            onMouseLeave={() => onHoverChange?.(false)}
        >
            <motion.a
                href={href}
                className={`relative inline-flex items-center gap-2 overflow-visible px-4 h-11 rounded-full font-inter text-black transition-colors duration-200 ${className}`}
                style={{ textDecoration: 'none' }}
                onClick={onClick}
                initial="initial"
            >

                {/* Text - scales subtly on hover without scaling the indicator pill */}
                <motion.span
                    className="relative z-10 text-black"
                >
                    {text}
                </motion.span>

                {hasDropdown && (
                    <motion.div
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                    >
                        <ChevronDown className="h-3 w-3" />
                    </motion.div>
                )}
            </motion.a>
        </div>
    )
}
