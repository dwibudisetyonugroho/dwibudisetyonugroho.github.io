'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS, getDropdownItems, CONTACT_INFO } from '@/data/portfolio-data'
import { AnimatedNavLink } from './AnimatedNavLink'
import { AnimatedLogo } from './AnimatedLogo'
import { motion, AnimatePresence } from 'framer-motion'
import { springTransition, macOSEase } from '@/lib/animations'

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isConnectOpen, setIsConnectOpen] = useState(false)
    const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
    const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    const clearHoverTimeout = () => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current)
            hoverTimeout.current = null
        }
    }

    const handleMouseLeaveNav = () => {
        hoverTimeout.current = setTimeout(() => {
            setHoveredNavItem(null)
            setIsConnectOpen(false)
        }, 200)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        )

        setTimeout(() => {
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section)
            })
        }, 100)

        return () => {
            observer.disconnect()
        }
    }, [])

    const activeDropdownItems = hoveredNavItem ? getDropdownItems(hoveredNavItem) : []

    return (
        <motion.nav
            className="fixed top-2 inset-x-0 z-50 pointer-events-none px-2"
            initial={false}
        >
            <AnimatePresence>
                {(hoveredNavItem && activeDropdownItems.length > 0) || isConnectOpen ? (
                    <motion.div
                        key="nav-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bg-black/60 backdrop-blur-sm pointer-events-none -z-10"
                        style={{ top: '-20px', left: '-20px', width: '110vw', height: '120vh' }}
                    />
                ) : null}
            </AnimatePresence>

            {/* ── Single unified pill (desktop) ── */}
            <div
                className="hidden md:flex flex-col w-full gap-2 relative pointer-events-none"
                onMouseEnter={clearHoverTimeout}
                onMouseLeave={handleMouseLeaveNav}
            >
                {/* Main nav row */}
                <div className="pointer-events-auto w-full bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl shadow-lg shadow-black/10 overflow-hidden h-14 flex items-center px-5 gap-4 transition-all duration-300">

                    {/* Logo - width locked to prevent layout shift */}
                    <div className="flex items-center flex-shrink-0 w-[120px]">
                        <AnimatedLogo />
                    </div>

                    {/* Nav links — left-aligned, flowing after logo */}
                    <div className="flex items-center gap-1">
                        {NAVIGATION_ITEMS.map((item) => (
                            <AnimatedNavLink
                                key={item.name}
                                href={item.href}
                                text={item.name}
                                className="text-lg font-medium text-black whitespace-nowrap px-3"
                                isActive={activeSection === item.href.substring(1)}
                                onHoverChange={(hovered) => {
                                    if (hovered) {
                                        clearHoverTimeout()
                                        setHoveredNavItem(item.name)
                                        setIsConnectOpen(false)
                                    }
                                }}
                                hasDropdown={getDropdownItems(item.name).length > 0}
                                isHovered={hoveredNavItem === item.name}
                            />
                        ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Badges & Connect CTA — far right */}
                    <div className="flex items-center gap-4">
                        {/* Credentials Badges */}
                        <div className="flex items-center gap-2">
                            {/* IBM Badge */}
                            <a 
                                href="https://www.credly.com/badges/7e329c4d-879a-4bf0-a40f-9c24152ff159/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 h-10 w-10 relative group cursor-pointer"
                            >
                                <img 
                                    src="/logos/ibm-data-analyst-badge.png" 
                                    alt="IBM Data Analyst Professional Certificate Badge"
                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    IBM Data Analyst
                                </div>
                            </a>

                            {/* Microsoft Power BI Badge */}
                            <a 
                                href="https://www.credly.com/badges/cbbce260-effa-4a8b-bcd9-ca9b4bbdc4d4/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 h-10 w-10 relative group cursor-pointer"
                            >
                                <img 
                                    src="/logos/microsoft-power-bi-badge.png" 
                                    alt="Microsoft Power BI Data Analyst Professional Certificate Badge"
                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Microsoft Power BI Analyst
                                </div>
                            </a>

                            {/* Google Advanced Data Analytics Badge */}
                            <a 
                                href="https://www.credly.com/badges/4754d8b9-cc32-4e7f-9739-663224d5dfbd/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 h-10 w-10 relative group cursor-pointer"
                            >
                                <img 
                                    src="/logos/google-advanced-data-analytics-badge.png" 
                                    alt="Google Advanced Data Analytics Professional Certificate Badge"
                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Google Advanced Data Analytics
                                </div>
                            </a>
                        </div>

                        {/* Connect Button */}
                        <div
                            className="flex items-center"
                            onMouseEnter={() => {
                                clearHoverTimeout()
                                setIsConnectOpen(true)
                                setHoveredNavItem(null)
                            }}
                        >
                            <Button
                                size="sm"
                                variant="default"
                                className="flex items-center gap-2 text-lg font-medium font-inter rounded-xl bg-[#023047] text-white hover:bg-[#023047]/90 transition-all duration-300 px-4 h-10"
                            >
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-primary"
                                    animate={{ opacity: [1, 1, 0, 0] }}
                                    transition={{
                                        duration: 2,
                                        times: [0, 0.5, 0.5, 1],
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <span>Connect</span>
                                <motion.div
                                    animate={{ rotate: isConnectOpen ? 180 : 0 }}
                                    transition={springTransition}
                                >
                                    <ChevronDown className="h-3 w-3" />
                                </motion.div>
                            </Button>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {/* Dropdown: Nav item sub-links */}
                    {hoveredNavItem && activeDropdownItems.length > 0 && !isConnectOpen && (
                        <motion.div
                            key="nav-dropdown"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="pointer-events-auto w-full bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl shadow-lg shadow-black/10 overflow-hidden absolute top-16 left-0 right-0 z-40"
                        >
                            <div className="py-2 flex flex-row pl-[152px] pr-4 gap-8">
                                {Array.from({ length: Math.ceil(activeDropdownItems.length / 5) }).map((_, colIdx) => (
                                    <div key={colIdx} className="flex flex-col">
                                        {activeDropdownItems.slice(colIdx * 5, (colIdx + 1) * 5).map((dropItem, idx) => (
                                            <a
                                                key={`${hoveredNavItem}-${colIdx}-${idx}`}
                                                href={dropItem.href}
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
                            transition={{ duration: 0.2 }}
                            className="pointer-events-auto w-full bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl shadow-lg shadow-black/10 overflow-hidden absolute top-16 left-0 right-0 z-40"
                        >
                            <div className="py-2 flex flex-row pl-[152px] pr-4 gap-8">
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
                                    href="https://github.com/dwibudisetyonugroho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-2.5 text-black hover:bg-gray-100 rounded-xl transition-colors duration-200"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="text-lg font-medium font-inter text-black">GitHub</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/budinugroho_"
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
            </div>

            {/* ── Mobile: Logo + Hamburger ── */}
            <div className="md:hidden flex items-center justify-between w-full">
                <motion.div
                    layout
                    className="pointer-events-auto bg-white backdrop-blur-[2px] border border-gray-200 rounded-full px-4 h-14 flex items-center shadow-lg shadow-black/10 flex-shrink-0"
                    transition={springTransition}
                >
                    <AnimatedLogo />
                </motion.div>

                <motion.div
                    layout
                    className="pointer-events-auto bg-white backdrop-blur-[2px] border border-gray-200 rounded-full p-1 h-14 flex items-center shadow-lg shadow-black/10"
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
                            {NAVIGATION_ITEMS.map((item) => (
                                <div key={item.name}>
                                    <a
                                        href={item.href}
                                        className={`block px-4 py-3 text-xl font-medium font-inter w-full text-black rounded-xl transition-colors ${activeSection === item.href.substring(1) ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
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
                                    <a href="https://github.com/dwibudisetyonugroho" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600"><Github className="h-5 w-5" /></a>
                                    <a href="https://www.instagram.com/budinugroho_" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600"><Instagram className="h-5 w-5" /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
