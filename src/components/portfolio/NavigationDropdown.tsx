'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Github, Instagram } from 'lucide-react'
import { CONTACT_INFO } from '@/data/experience'

interface NavigationDropdownProps {
    hoveredNavItem: string | null;
    activeDropdownItems: { label: string; href: string }[];
    isConnectOpen: boolean;
    getLinkHref: (href: string) => string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
    hoveredNavItem,
    activeDropdownItems,
    isConnectOpen,
    getLinkHref,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <AnimatePresence mode="wait">
            {/* Dropdown: Nav item sub-links */}
            {hoveredNavItem && activeDropdownItems.length > 0 && !isConnectOpen && (
                <motion.div
                    key="nav-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.08 }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className="pointer-events-auto w-full bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl shadow-lg shadow-black/10 overflow-hidden absolute top-16 left-0 right-0 z-40 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4"
                >
                    <div className="py-3 flex flex-row pl-[152px] pr-4 gap-8">
                        {Array.from({ length: Math.ceil(activeDropdownItems.length / 5) }).map((_, colIdx) => (
                            <div key={colIdx} className="flex flex-col">
                                {activeDropdownItems.slice(colIdx * 5, (colIdx + 1) * 5).map((dropItem, idx) => (
                                    <a
                                        key={`${hoveredNavItem}-${colIdx}-${idx}`}
                                        href={getLinkHref(dropItem.href)}
                                        className="px-4 py-2.5 text-lg font-medium font-inter text-black hover:bg-gray-100 rounded-xl transition-colors duration-200 whitespace-nowrap"
                                    >
                                        {dropItem.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Dropdown: Connect social links */}
            {isConnectOpen && !hoveredNavItem && (
                <motion.div
                    key="connect-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.08 }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className="pointer-events-auto w-full bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl shadow-lg shadow-black/10 overflow-hidden absolute top-16 left-0 right-0 z-40 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-4"
                >
                    <div className="py-3 flex flex-row pl-[152px] pr-4 gap-8">
                        <div className="flex flex-col">
                            <a
                                href={CONTACT_INFO.linkedin || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-2.5 text-black hover:bg-gray-100 rounded-xl transition-colors duration-200"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="text-lg font-medium font-inter text-black">LinkedIn</span>
                            </a>
                            <a
                                href={CONTACT_INFO.github || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-2.5 text-black hover:bg-gray-100 rounded-xl transition-colors duration-200"
                            >
                                <Github className="h-5 w-5" />
                                <span className="text-lg font-medium font-inter text-black">GitHub</span>
                            </a>
                            <a
                                href={CONTACT_INFO.instagram || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-2.5 text-black hover:bg-gray-100 rounded-xl transition-colors duration-200"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="text-lg font-medium font-inter text-black">Instagram</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
