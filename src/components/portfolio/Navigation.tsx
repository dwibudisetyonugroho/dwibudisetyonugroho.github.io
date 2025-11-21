'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Linkedin, Github, Instagram, Users, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS, getDropdownItems, CONTACT_INFO } from '@/data/portfolio-data'
import { AnimatedNavLink } from './AnimatedNavLink'
import { AnimatedLogo } from './AnimatedLogo'
import { motion, useScroll, useSpring } from 'framer-motion'

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isConnectOpen, setIsConnectOpen] = useState(false)

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section)
        })

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#DAD7CD]/95 backdrop-blur-md shadow-sm border-b border-[#1F2A23]/10' : 'bg-[#DAD7CD]/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 w-[140px]">
                        <AnimatedLogo />
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                        <div className="flex items-center space-x-8">
                            {NAVIGATION_ITEMS.map((item) => (
                                <div key={item.name} className="px-1 py-1">
                                    <AnimatedNavLink
                                        href={item.href}
                                        text={item.name}
                                        className={`text-base font-bold transition-colors duration-200 ${activeSection === item.href.substring(1) ? 'text-[#5A6E58]' : 'text-[#1F2A23]'}`}
                                        dropdownItems={getDropdownItems(item.name)}
                                        isActive={activeSection === item.href.substring(1)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Actions - Connect Button */}
                    <div
                        className="hidden md:flex items-center w-[140px] justify-end relative z-20"
                        onMouseEnter={() => setIsConnectOpen(true)}
                        onMouseLeave={() => setIsConnectOpen(false)}
                    >
                        <Button
                            size="sm"
                            className="bg-[#1F2A23] hover:bg-[#2A3530] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow group flex items-center gap-2"
                        >
                            <Users className="h-3.5 w-3.5" />
                            Connect
                            <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isConnectOpen ? 'rotate-180' : ''
                                }`} />
                        </Button>

                        {/* Connect Dropdown Menu */}
                        {isConnectOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                                className="absolute top-full right-0 pt-2 w-52 z-[100]"
                            >
                                <div className="bg-white/95 backdrop-blur-xl rounded-lg shadow-lg border border-[#E0E0E0]/50 overflow-hidden">
                                    {/* Social Links */}
                                    <div className="py-1">
                                        <a
                                            href={CONTACT_INFO.linkedin || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#5A6E58]/5 transition-all duration-200 group"
                                            onClick={() => setIsConnectOpen(false)}
                                        >
                                            <Linkedin className="h-4 w-4 text-[#0A66C2] group-hover:scale-110 transition-transform duration-200" />
                                            <span className="text-sm font-medium text-[#1F2A23] group-hover:text-[#5A6E58] transition-colors">LinkedIn</span>
                                        </a>

                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#5A6E58]/5 transition-all duration-200 group"
                                            onClick={() => setIsConnectOpen(false)}
                                        >
                                            <Github className="h-4 w-4 text-[#24292e] group-hover:scale-110 transition-transform duration-200" />
                                            <span className="text-sm font-medium text-[#1F2A23] group-hover:text-[#5A6E58] transition-colors">GitHub</span>
                                        </a>

                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#5A6E58]/5 transition-all duration-200 group"
                                            onClick={() => setIsConnectOpen(false)}
                                        >
                                            <Instagram className="h-4 w-4 text-[#E1306C] group-hover:scale-110 transition-transform duration-200" />
                                            <span className="text-sm font-medium text-[#1F2A23] group-hover:text-[#5A6E58] transition-colors">Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#3C4F40] hover:text-[#1F2A23]"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Reading Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5A6E58] origin-left pointer-events-none z-0"
                style={{ scaleX }}
            />

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#DAD7CD] border-t border-[#1F2A23]">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {NAVIGATION_ITEMS.map((item) => (
                            <AnimatedNavLink
                                key={item.name}
                                href={item.href}
                                text={item.name}
                                className={`block px-3 py-2 text-base font-medium w-full ${activeSection === item.href.substring(1) ? 'text-[#5A6E58] bg-[#5A6E58]/10 rounded-md' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                        <div className="pt-4 mt-4 border-t border-[#1F2A23]/10 flex items-center justify-between px-3">
                            <span className="text-sm font-medium text-[#3C4F40]">Connect with me</span>
                            <div className="flex items-center space-x-4">
                                <a
                                    href={CONTACT_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#3C4F40] hover:text-[#5A6E58]"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
