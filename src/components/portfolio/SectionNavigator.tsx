'use client'

import { useState, useEffect, Fragment, useRef } from 'react'
import { motion } from 'framer-motion'

const slideFromBottomVariants = {
    hidden: {
        y: '200px', // Pushed down off-screen
        opacity: 1, // Keep opacity 1 for backdrop-filter persistence
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    }
} as any

interface NavigationItem {
    id: string
    title: string
    logo?: string
    logoAlt?: string
}

interface SectionNavigatorProps {
    sectionId: string
    sectionTitle: string
    items: NavigationItem[]
}

export const SectionNavigator = ({ sectionId, sectionTitle, items }: SectionNavigatorProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [activeItemId, setActiveItemId] = useState<string | null>(null)
    const ratiosRef = useRef<Record<string, number>>({})

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === sectionId) {
                        setIsVisible(entry.isIntersecting)
                    }
                })
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        )

        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    ratiosRef.current[entry.target.id] = entry.intersectionRatio
                })

                let winnerId: string | null = null
                let maxRatio = 0

                items.forEach(item => {
                    const ratio = ratiosRef.current[item.id] || 0
                    if (ratio > maxRatio) {
                        maxRatio = ratio
                        winnerId = item.id
                    }
                })

                if (winnerId && maxRatio > 0.05) {
                    setActiveItemId(winnerId)
                }
            },
            {
                rootMargin: '-30% 0px -30% 0px',
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
            }
        )

        const observe = () => {
            const section = document.getElementById(sectionId)
            if (section) sectionObserver.observe(section)

            items.forEach(item => {
                const card = document.getElementById(item.id)
                if (card) cardObserver.observe(card)
            })
        }

        const timeoutId = setTimeout(observe, 100)
        observe()

        return () => {
            clearTimeout(timeoutId)
            sectionObserver.disconnect()
            cardObserver.disconnect()
        }
    }, [sectionId, items])

    const scrollToCard = (itemId: string) => {
        const card = document.getElementById(itemId)
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    if (items.length === 0) return null

    return (
        <motion.div
            key={`navigator-${sectionId}`}
            variants={slideFromBottomVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="fixed bottom-4 inset-x-0 z-40 hidden xl:flex justify-center pointer-events-none"
        >
            <div
                className="pointer-events-auto bg-[#023047]/80 backdrop-blur-[2px] border border-white/20 rounded-full pl-3 pr-1 min-h-[44px] py-1 shadow-lg shadow-black/10 flex items-center gap-6"
                style={{
                    willChange: 'transform, backdrop-filter, opacity',
                    backfaceVisibility: 'hidden'
                }}
            >
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white border-r border-white/10 pr-6 max-w-[100px] leading-tight flex items-center text-center justify-center">
                    {sectionTitle}
                </h3>

                <div className="flex items-center gap-1">
                    {items.map((item) => (
                        <Fragment key={item.id}>
                            <motion.button
                                onClick={() => scrollToCard(item.id)}
                                className={`relative px-2 py-1 rounded-full group flex items-center gap-2 text-xs font-bold transition-all duration-300 z-10 ${activeItemId === item.id ? 'text-white' : 'text-white hover:text-white'}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {activeItemId === item.id && (
                                    <motion.div
                                        layoutId={`floatingNavIndicator-${sectionId}`}
                                        className="absolute inset-0 bg-[#FB8500] rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30
                                        }}
                                    />
                                )}
                                {item.logo && (
                                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <img
                                            src={item.logo}
                                            alt={item.logoAlt || item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                )}
                                <span className="relative z-10 max-w-[120px] text-center leading-tight line-clamp-2">{item.title}</span>
                            </motion.button>
                        </Fragment>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
