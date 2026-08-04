'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { springTransition, macOSEase } from '@/lib/animations'
import Link from 'next/link'

interface ProjectsNavigationProps {
    sections: { 
        name: string
        href: string
        items?: { id: string }[]
    }[]
}

export const ProjectsNavigation = ({ sections }: ProjectsNavigationProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null)
    
    const sectionRatios = useRef<{ [key: string]: number }>({})
    const intersectionRatios = useRef<{ [key: string]: number }>({})

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    sectionRatios.current[entry.target.id] = entry.intersectionRatio;
                });

                let maxRatio = 0;
                let activeId: string | null = null;

                Object.entries(sectionRatios.current).forEach(([id, ratio]) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        activeId = id;
                    }
                });

                if (activeId && maxRatio > 0.1) {
                    setActiveSection(activeId);
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                rootMargin: '-10% 0px -20% 0px'
            }
        )

        const subObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    intersectionRatios.current[entry.target.id] = entry.intersectionRatio;
                });

                let maxRatio = 0;
                let activeId: string | null = null;

                Object.entries(intersectionRatios.current).forEach(([id, ratio]) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        activeId = id;
                    }
                });

                if (activeId && maxRatio > 0.05) {
                    setActiveSubItem(activeId);
                }
            },
            { 
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                rootMargin: '-15% 0px -25% 0px'
            }
        )

        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
            if (isAtBottom && sections.length > 0) {
                const sectionsWithItems = sections.filter(s => s.items && s.items.length > 0);
                if (sectionsWithItems.length > 0) {
                    const lastSection = sectionsWithItems[sectionsWithItems.length - 1];
                    const lastItem = lastSection.items![lastSection.items!.length - 1];
                    
                    setActiveSection((prev) => {
                        const nextSec = lastSection.href.replace('#', '');
                        return prev !== nextSec ? nextSec : prev;
                    });
                    setActiveSubItem((prev) => {
                        return prev !== lastItem.id ? lastItem.id : prev;
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        const timer = setTimeout(() => {
            sections.forEach((section) => {
                const id = section.href.replace('#', '')
                const el = document.getElementById(id)
                if (el) {
                    observer.observe(el)
                }

                if (section.items) {
                    section.items.forEach(item => {
                        const subEl = document.getElementById(item.id)
                        if (subEl) {
                            subObserver.observe(subEl)
                        }
                    })
                }
            })
        }, 500)

        return () => {
            clearTimeout(timer)
            observer.disconnect()
            subObserver.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [sections])

    if (sections.length === 0) return null

    return (
        <motion.nav
            className="fixed top-2 inset-x-0 z-50 pointer-events-none px-2"
            initial={false}
        >
            {/* Desktop Unified Pill Navigation */}
            <div className="hidden md:flex flex-col w-full relative pointer-events-none">
                <div className="pointer-events-auto mx-auto max-w-fit bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl shadow-lg shadow-black/10 h-14 flex items-center px-5 transition-all duration-300 relative z-50">
                    
                    {/* Nav Links */}
                    <div className="flex items-center gap-1">
                        {sections.map((item) => {
                            const isSectionActive = activeSection === item.href.replace('#', '')
                            return (
                                <div key={item.name} className="relative flex flex-col items-center">
                                    <a
                                        href={item.href}
                                        className={`relative inline-flex items-center px-4 h-11 font-medium font-inter transition-colors duration-200 ${
                                            isSectionActive 
                                                ? 'text-[#FF5B00]' 
                                                : 'text-black hover:text-[#FF5B00]'
                                        }`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <span className="relative z-10 flex flex-col items-center">
                                            <span className="text-lg">{item.name}</span>
                                            
                                            {/* Progress Dots Indicator */}
                                            <AnimatePresence>
                                                {isSectionActive && item.items && item.items.length > 0 && (
                                                    <motion.div 
                                                        initial={{ opacity: 0, y: -2 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -2 }}
                                                        className="absolute -bottom-1.5 flex justify-center gap-1.5 px-1 pointer-events-none"
                                                    >
                                                        {item.items.map((subItem) => (
                                                            <div 
                                                                key={subItem.id}
                                                                className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                                                                    activeSubItem === subItem.id
                                                                        ? 'bg-[#FF5B00] scale-125 shadow-[0_0_8px_rgba(255,91,0,0.4)]'
                                                                        : 'bg-black/20'
                                                                }`}
                                                            />
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </span>
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                    {/* Vertical Divider */}
                    <div className="h-6 w-px bg-gray-200 ml-1 mr-5" />

                    {/* Back to Profile Button */}
                    <div className="flex items-center">
                        <Button
                            size="sm"
                            variant="default"
                            className="flex items-center gap-2 text-lg font-medium font-inter rounded-xl bg-[#023047] text-white hover:bg-[#023047]/90 transition-all duration-300 px-4 h-10"
                            asChild
                        >
                            <Link href="/profile/">
                                <ArrowLeft className="h-4 w-4" />
                                <span>Back to Profile</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Header */}
            <div className="md:hidden flex items-center justify-between w-full">
                <motion.div
                    layout
                    className="pointer-events-auto bg-white backdrop-blur-[2px] border border-gray-200 rounded-full px-4 h-14 flex items-center shadow-lg shadow-black/10 flex-shrink-0"
                    transition={springTransition}
                >
                    <Link href="/profile/" className="flex items-center gap-1.5 text-black hover:text-[#023047] transition-all">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="text-sm font-bold font-inter">Profile</span>
                    </Link>
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

            {/* Mobile Dropdown */}
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
                            {sections.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-4 py-3 text-xl font-medium font-inter w-full rounded-xl transition-colors ${
                                        activeSection === item.href.replace('#', '') 
                                            ? 'bg-gray-100 text-[#FF5B00]' 
                                            : 'hover:bg-gray-50 text-black hover:text-[#FF5B00]'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-3 mt-3 border-t border-gray-200">
                                <Link
                                    href="/profile/"
                                    className="flex items-center gap-2 px-4 py-3 text-xl font-medium font-inter text-[#023047] hover:bg-gray-50 rounded-xl transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                    <span>Back to Profile</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
