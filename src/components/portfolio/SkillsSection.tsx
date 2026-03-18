'use client'

import { useState, useEffect } from 'react'
import { DETAILED_SKILLS } from '@/data/portfolio-data'
import {
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import { SkillCard } from './SkillCard'
import { motion, AnimatePresence } from 'framer-motion'

export const SkillsSection = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [cardsPerPage, setCardsPerPage] = useState(2)
    const [direction, setDirection] = useState(0) // 1 for next, -1 for prev

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsPerPage(1)
            } else {
                setCardsPerPage(2)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalPages = Math.ceil(DETAILED_SKILLS.length / cardsPerPage)
    
    // Ensure currentPage is valid if cardsPerPage changes
    useEffect(() => {
        if (currentPage >= totalPages) {
            setCurrentPage(Math.max(0, totalPages - 1))
        }
    }, [cardsPerPage, totalPages, currentPage])

    const nextPage = () => {
        setDirection(1)
        setCurrentPage((prev) => (prev + 1) % totalPages)
    }
    const prevPage = () => {
        setDirection(-1)
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    }

    const goToPage = (pageIndex: number) => {
        setDirection(pageIndex > currentPage ? 1 : -1)
        setCurrentPage(pageIndex)
    }

    const visibleSkills = DETAILED_SKILLS.slice(
        currentPage * cardsPerPage,
        (currentPage * cardsPerPage) + cardsPerPage
    )

    return (
        <section id="skills" className="py-24 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skill</h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Skill Title Indicators (Now at the Top) */}
                    <div className="mb-6">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-4xl mx-auto">
                            {DETAILED_SKILLS.map((skill, i) => {
                                const skillPage = Math.floor(i / cardsPerPage)
                                const isActive = skillPage === currentPage
                                
                                return (
                                    <button
                                        key={i}
                                        onClick={() => goToPage(skillPage)}
                                        className={`group transition-all duration-300 ${
                                            isActive 
                                                ? 'text-secondary scale-105' 
                                                : 'text-slate-500 hover:text-black opacity-60 hover:opacity-100'
                                        }`}
                                        aria-label={`Go to ${skill.name}`}
                                    >
                                        <span className={`text-[11px] font-extrabold uppercase tracking-widest whitespace-nowrap ${
                                            isActive ? 'opacity-100' : 'opacity-80'
                                        }`}>
                                            {skill.name}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevPage}
                        className="absolute -left-4 lg:-left-16 top-[60%] -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-secondary hover:bg-secondary hover:text-white transition-all z-10 hidden sm:block"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button 
                        onClick={nextPage}
                        className="absolute -right-4 lg:-right-16 top-[60%] -translate-y-1/2 p-3 rounded-full bg-white shadow-lg border border-slate-100 text-secondary hover:bg-secondary hover:text-white transition-all z-10 hidden sm:block"
                        aria-label="Next page"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Carousel Content */}
                    <div className="overflow-hidden px-2 py-4">
                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                            <motion.div
                                key={currentPage}
                                custom={direction}
                                variants={{
                                    enter: (direction: number) => ({
                                        x: direction > 0 ? 50 : -50,
                                        opacity: 0
                                    }),
                                    center: {
                                        zIndex: 1,
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: (direction: number) => ({
                                        zIndex: 0,
                                        x: direction < 0 ? 50 : -50,
                                        opacity: 0
                                    })
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                                {visibleSkills.map((skill, index) => {
                                    return <SkillCard key={`${currentPage}-${index}`} skill={skill} />
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Navigation Arrows */}
                    <div className="flex justify-center gap-4 mt-8 sm:hidden">
                        <button 
                            onClick={prevPage}
                            className="p-3 rounded-full bg-white shadow-md text-secondary"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button 
                            onClick={nextPage}
                            className="p-3 rounded-full bg-white shadow-md text-secondary"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
