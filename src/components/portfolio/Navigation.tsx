'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS, getDropdownItems } from '@/data/experience'
import { AnimatedNavLink } from './AnimatedNavLink'
import { AnimatedLogo } from './AnimatedLogo'
import { NavigationDropdown } from './NavigationDropdown'
import { MobileNav } from './MobileNav'
import { motion } from 'framer-motion'
import { springTransition } from '@/lib/animations'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const PROJECT_NAVIGATION_ITEMS = [
    { name: 'Personal Project', href: '#personal-projects' },
    { name: 'Capstone Project', href: '#capstone-projects' },
    { name: 'Virtual Internship Project', href: '#internship-projects' },
]

export const Navigation = () => {
    const pathname = usePathname()
    const isProfilePage = pathname === '/profile' || pathname === '/profile/'
    const isProjectsPage = pathname === '/projects' || pathname === '/projects/'
    const navItems = isProjectsPage ? PROJECT_NAVIGATION_ITEMS : NAVIGATION_ITEMS

    const getLinkHref = (href: string) => {
        if (!href.startsWith('#')) return href
        if (isProjectsPage) return href
        return isProfilePage ? href : `/profile/${href}`
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isConnectOpen, setIsConnectOpen] = useState(false)
    const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null)
    const sectionRatios = useRef<{ [key: string]: number }>({})
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
        }, 80)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    sectionRatios.current[entry.target.id] = entry.intersectionRatio
                })

                let maxRatio = 0
                let activeId: string | null = null

                Object.entries(sectionRatios.current).forEach(([id, ratio]) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio
                        activeId = id
                    }
                })

                if (activeId && maxRatio > 0) {
                    setActiveSection(activeId)
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                rootMargin: '-80px 0px -20% 0px'
            }
        )

        const targetSelector = isProjectsPage
            ? '#personal-projects, #capstone-projects, #internship-projects'
            : 'section[id]'

        const sections = document.querySelectorAll(targetSelector)
        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [isProjectsPage])

    useEffect(() => {
        if (!activeSection) {
            setActiveSubItem(null)
            return
        }

        const activeElement = document.getElementById(activeSection)
        if (!activeElement) {
            setActiveSubItem(null)
            return
        }

        const sectionItem = navItems.find((item) => item.href.substring(1) === activeSection)
        const dropdownItems = sectionItem ? getDropdownItems(sectionItem.name) : []
        const validSubIds = new Set(dropdownItems.map((item) => item.href.substring(1)))

        // Get all card elements strictly matching registered card IDs for this section
        const cardElements = Array.from(activeElement.querySelectorAll('[id]')).filter(
            (el) => validSubIds.has(el.id)
        )

        if (cardElements.length === 0) {
            setActiveSubItem(null)
            return
        }

        const updateActiveCard = () => {
            let bestCardId: string | null = null
            let maxScore = -Infinity

            // Reading focal zone: 28% down from top of viewport (just below the fixed header)
            const focusTargetY = window.innerHeight * 0.28

            cardElements.forEach((el) => {
                const rect = el.getBoundingClientRect()
                // Check if card overlaps the visible viewing window
                if (rect.bottom > 80 && rect.top < window.innerHeight * 0.85) {
                    // Distance from top of card to reading focal line
                    const dist = Math.abs(rect.top - focusTargetY)
                    const score = 10000 - dist
                    if (score > maxScore) {
                        maxScore = score
                        bestCardId = el.id
                    }
                }
            })

            if (bestCardId) {
                setActiveSubItem(bestCardId)
            }
        }

        // Initial measurement
        updateActiveCard()

        const handleScroll = () => {
            requestAnimationFrame(updateActiveCard)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [activeSection, navItems])

    const activeDropdownItems = hoveredNavItem ? getDropdownItems(hoveredNavItem) : []

    const navBarRef = useRef<HTMLDivElement>(null)
    const connectBtnRef = useRef<HTMLDivElement>(null)
    const badgesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const inspectDOMGaps = () => {
            if (!navBarRef.current || !connectBtnRef.current || !badgesRef.current) return

            const navRect = navBarRef.current.getBoundingClientRect()
            const btnRect = connectBtnRef.current.getBoundingClientRect()
            const badgesRect = badgesRef.current.getBoundingClientRect()

            const topGap = Math.round(btnRect.top - navRect.top)
            const bottomGap = Math.round(navRect.bottom - btnRect.bottom)
            const rightGap = Math.round(navRect.right - btnRect.right)
            const leftGap = Math.round(btnRect.left - badgesRect.right)

            // Dynamic verification check to guarantee equal 8px spacing around Connect button
            if (topGap !== bottomGap || topGap !== rightGap || topGap !== leftGap) {
                console.warn('[DOM Measurement] Spacing adjustment detected:', { topGap, bottomGap, leftGap, rightGap })
            }
        }

        inspectDOMGaps()
        window.addEventListener('resize', inspectDOMGaps)
        return () => window.removeEventListener('resize', inspectDOMGaps)
    }, [])

    return (
        <motion.nav
            className="fixed top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-50 pointer-events-none"
            transition={springTransition}
        >
            {/* Desktop Navbar */}
            <div className="hidden md:block relative w-full">
                <div
                    ref={navBarRef}
                    className="pointer-events-auto bg-white backdrop-blur-[2px] border border-gray-200 rounded-2xl pl-6 pr-2 py-2 shadow-lg shadow-black/10 transition-all duration-300 relative z-50 w-full"
                    onMouseLeave={handleMouseLeaveNav}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <Link href="/">
                                <AnimatedLogo />
                            </Link>

                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1)
                                const dropdownItems = getDropdownItems(item.name)
                                const hasDropdown = !isProjectsPage && dropdownItems.length > 0

                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => {
                                            clearHoverTimeout()
                                            if (hasDropdown) {
                                                setHoveredNavItem(item.name)
                                                setIsConnectOpen(false)
                                            } else {
                                                setHoveredNavItem(null)
                                                setIsConnectOpen(false)
                                            }
                                        }}
                                    >
                                        <AnimatedNavLink
                                            href={getLinkHref(item.href)}
                                            text={item.name}
                                            isActive={isActive}
                                            hasDropdown={hasDropdown}
                                            subItems={dropdownItems}
                                            activeSubId={activeSubItem}
                                        />
                                    </div>
                                )
                            })}
                        </div>

                        {/* Right items container: Badges + Connect button with uniform gap */}
                        <div className="flex items-center gap-2">
                            {/* Badges */}
                            <div ref={badgesRef} className="flex items-center gap-2">
                                <a
                                    href="https://www.datacamp.com/certificate/SQA0014758676777"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 h-10 aspect-[196/240] relative group cursor-pointer"
                                >
                                    <img
                                        src="/logos/datacamp-sql-badge.png"
                                        alt="DataCamp SQL Associate Certification Badge"
                                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[180px] p-6 bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none flex flex-col items-center gap-4 z-50">
                                        <div className="relative h-28 w-28 flex-shrink-0">
                                            <img
                                                src="/logos/datacamp-sql-badge.png"
                                                alt="DataCamp SQL Associate Full Badge"
                                                className="h-full w-full object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">DataCamp Certification</div>
                                            <div className="text-xs font-bold text-black leading-tight">SQL Associate</div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://www.datacamp.com/certificate/DAA0010794897681"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 h-10 aspect-[196/240] relative group cursor-pointer"
                                >
                                    <img
                                        src="/logos/datacamp-data-analyst-badge.png"
                                        alt="DataCamp Data Analyst Associate Certification Badge"
                                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[180px] p-6 bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none flex flex-col items-center gap-4 z-50">
                                        <div className="relative h-28 w-28 flex-shrink-0">
                                            <img
                                                src="/logos/datacamp-data-analyst-badge.png"
                                                alt="DataCamp Data Analyst Associate Full Badge"
                                                className="h-full w-full object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">DataCamp Certification</div>
                                            <div className="text-xs font-bold text-black leading-tight">Data Analyst Associate</div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://coursera.org/verify/professional-cert/K0Z8291W8QVJ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 h-10 aspect-square relative group cursor-pointer"
                                >
                                    <img
                                        src="/logos/google-advanced-data-analytics-badge.png"
                                        alt="Google Advanced Data Analytics Professional Certificate Badge"
                                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[180px] p-6 bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none flex flex-col items-center gap-4 z-50">
                                        <div className="relative h-28 w-28 flex-shrink-0">
                                            <img
                                                src="/logos/google-advanced-data-analytics-badge.png"
                                                alt="Google Advanced Data Analytics Full Badge"
                                                className="h-full w-full object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Google Certificate</div>
                                            <div className="text-xs font-bold text-black leading-tight">Advanced Data Analytics</div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://coursera.org/verify/professional-cert/21I7H6VKPCH0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 h-10 aspect-square relative group cursor-pointer"
                                >
                                    <img
                                        src="/logos/microsoft-power-bi-badge.png"
                                        alt="Microsoft Power BI Data Analyst Professional Certificate Badge"
                                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[180px] p-6 bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none flex flex-col items-center gap-4 z-50">
                                        <div className="relative h-28 w-28 flex-shrink-0">
                                            <img
                                                src="/logos/microsoft-power-bi-badge.png"
                                                alt="Microsoft Power BI Data Analyst Full Badge"
                                                className="h-full w-full object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Microsoft Certificate</div>
                                            <div className="text-xs font-bold text-black leading-tight">Power BI Data Analyst</div>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://coursera.org/verify/professional-cert/FPC586MR2YCN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 h-10 aspect-square relative group cursor-pointer"
                                >
                                    <img
                                        src="/logos/ibm-data-analyst-badge.png"
                                        alt="IBM Data Analyst Professional Certificate Badge"
                                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[180px] p-6 bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none flex flex-col items-center gap-4 z-50">
                                        <div className="relative h-28 w-28 flex-shrink-0">
                                            <img
                                                src="/logos/ibm-data-analyst-badge.png"
                                                alt="IBM Data Analyst Full Badge"
                                                className="h-full w-full object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">IBM Certificate</div>
                                            <div className="text-xs font-bold text-black leading-tight">Data Analyst</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Connect Button */}
                            <div
                                ref={connectBtnRef}
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
                                    className="flex items-center gap-2 text-lg font-medium font-inter rounded-xl bg-[#023047] text-white hover:bg-[#023047]/90 active:scale-[0.985] select-none transition-all duration-300 px-4 h-10"
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
                                        <ChevronDown className="h-4 w-4" />
                                    </motion.div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <NavigationDropdown
                    hoveredNavItem={hoveredNavItem}
                    activeDropdownItems={activeDropdownItems}
                    isConnectOpen={isConnectOpen}
                    getLinkHref={getLinkHref}
                    onMouseEnter={clearHoverTimeout}
                    onMouseLeave={handleMouseLeaveNav}
                />
            </div>

            <MobileNav
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                activeSection={activeSection}
                getLinkHref={getLinkHref}
                navItems={navItems}
            />
        </motion.nav>
    )
}
