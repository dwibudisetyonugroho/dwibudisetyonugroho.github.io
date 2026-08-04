'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, Github, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedLogo } from './AnimatedLogo'
import { NAVIGATION_ITEMS, CONTACT_INFO } from '@/data/experience'
import { springTransition, macOSEase } from '@/lib/animations'

interface MobileNavProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    activeSection: string;
    getLinkHref: (href: string) => string;
    navItems?: { name: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
    isMenuOpen,
    setIsMenuOpen,
    activeSection,
    getLinkHref,
    navItems = NAVIGATION_ITEMS,
}) => {
    return (
        <>
            {/* ── Mobile: Logo + Hamburger ── */}
            <div className="md:hidden flex items-center justify-between w-full">
                <motion.div
                    className="pointer-events-auto bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl px-4 h-14 flex items-center shadow-lg shadow-black/10 flex-shrink-0"
                    transition={springTransition}
                >
                    <Link href="/">
                        <AnimatedLogo />
                    </Link>
                </motion.div>

                <motion.div
                    layout
                    className="pointer-events-auto bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl p-1 h-14 flex items-center shadow-lg shadow-black/10"
                    transition={springTransition}
                >
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black hover:bg-gray-100 rounded-full h-full px-2"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isMenuOpen ? 'close' : 'menu'}
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2, ease: macOSEase }}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </motion.div>
                        </AnimatePresence>
                    </Button>
                </motion.div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        layout
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={springTransition}
                        className="md:hidden mt-2 overflow-hidden"
                    >
                        <div className="bg-white backdrop-blur-[2px] border border-gray-200 shadow-xl p-4 space-y-2 pointer-events-auto rounded-3xl">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <a
                                        href={getLinkHref(item.href)}
                                        className={`block px-4 py-3 text-xl font-medium font-inter w-full rounded-xl transition-colors ${activeSection === item.href.substring(1) ? 'bg-gray-100 text-[#FF5B00]' : 'hover:bg-gray-50 text-black hover:text-[#FF5B00]'}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </div>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-200 flex items-center justify-between px-3">
                                <span className="text-lg font-medium font-inter text-black">Connect</span>
                                <div className="flex items-center space-x-4">
                                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600"><Linkedin className="h-5 w-5" /></a>
                                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600"><Github className="h-5 w-5" /></a>
                                    <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600"><Instagram className="h-5 w-5" /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
