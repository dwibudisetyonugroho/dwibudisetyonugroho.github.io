'use client'

import { useState, useRef, useEffect, useCallback, memo } from 'react'
import { DETAILED_SKILLS } from '@/data'
import {
    ChevronRight,
    GripVertical
} from 'lucide-react'
import { SkillCard } from './SkillCard'
import { motion, animate, useMotionValue, useTransform } from 'framer-motion'

// Memoized Skill Button to prevent re-renders of the entire list
const SkillButton = memo(({ skill, index, isActive, onClick }: { 
    skill: any, 
    index: number, 
    isActive: boolean, 
    onClick: (index: number) => void 
}) => (
    <button
        onClick={() => onClick(index)}
        className={`px-3 sm:px-4 h-[60px] text-sm font-bold border transition-all duration-300 item-hover flex items-center text-left w-full relative overflow-hidden group active:scale-[0.985] select-none ${
            isActive 
                ? 'bg-[#023047] text-white border-[#023047] shadow-md z-10' 
                : 'bg-white text-black/70 border-slate-200 hover:bg-slate-50 hover:text-black hover:border-slate-300'
        }`}
        aria-label={`Select ${skill.name}`}
    >
        <div className="w-full">
            <span className="block leading-tight line-clamp-2">{skill.name}</span>
        </div>
    </button>
))
SkillButton.displayName = 'SkillButton'

export const SkillsSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef(false)
    
    // Master MotionValue: current fractional index (0 to 11)
    // This drives BOTH the pill and the filmstrip
    const xIndex = useMotionValue(0)

    // Derived MotionValues for visuals
    const filmstripX = useTransform(xIndex, (v) => `-${v * 100}%`)
    
    // Pill position is based on xIndex and track width
    const pillX = useMotionValue(0)
    const maxPillXRef = useRef(100)

    // Update pill pixel position whenever xIndex or track width changes
    useEffect(() => {
        const updatePillRange = () => {
            if (trackRef.current) {
                const trackWidth = trackRef.current.offsetWidth
                const pillWidth = trackWidth / DETAILED_SKILLS.length
                const maxPixels = trackWidth - pillWidth
                maxPillXRef.current = maxPixels
                
                // Keep pill in sync with index
                pillX.set(xIndex.get() * (maxPixels / (DETAILED_SKILLS.length - 1)))
            }
        }
        updatePillRange()
        window.addEventListener('resize', updatePillRange)
        return () => window.removeEventListener('resize', updatePillRange)
    }, [xIndex, pillX])

    // Sync pillX with xIndex changes (during animation or drag)
    useEffect(() => {
        return xIndex.on("change", (latest) => {
            const maxPixels = maxPillXRef.current
            pillX.set(latest * (maxPixels / (DETAILED_SKILLS.length - 1)))
        })
    }, [xIndex, pillX])

    const selectSkill = useCallback((index: number) => {
        setSelectedIndex(index)
        animate(xIndex, index, { type: "spring", stiffness: 400, damping: 40 })
    }, [xIndex])

    // Global interceptor for deep links and header menu
    const handleLinkClick = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement
        const anchor = target.closest('a')
        if (anchor && anchor.hash && anchor.hash.startsWith('#skills-')) {
            const id = anchor.hash.substring(1)
            const index = DETAILED_SKILLS.findIndex(s => 
                `skills-${s.name.toLowerCase().replace(/\s+/g, '-')}` === id
            )
            if (index !== -1) {
                selectSkill(index)
            }
        }
    }, [selectSkill])

    useEffect(() => {
        window.addEventListener('click', handleLinkClick)
        const hash = window.location.hash
        if (hash?.startsWith('#skills-')) {
            const id = hash.substring(1)
            const index = DETAILED_SKILLS.findIndex(s => `skills-${s.name.toLowerCase().replace(/\s+/g, '-')}` === id)
            if (index !== -1) selectSkill(index)
        }
        return () => window.removeEventListener('click', handleLinkClick)
    }, [handleLinkClick, selectSkill])

    const handleDrag = (_: any, info: any) => {
        if (!trackRef.current) return
        const rect = trackRef.current.getBoundingClientRect()
        const x = info.point.x - rect.left
        const percentage = Math.max(0, Math.min(1, x / rect.width))
        
        // Update fractional index
        const fractionalIndex = percentage * (DETAILED_SKILLS.length - 1)
        xIndex.set(fractionalIndex)
        
        // Update sidebar integer index
        const nearestIndex = Math.round(percentage * (DETAILED_SKILLS.length - 1))
        if (nearestIndex !== selectedIndex) {
            setSelectedIndex(nearestIndex)
        }
    }

    const handleDragEnd = () => {
        isDragging.current = false
        // Snap to nearest whole index
        const current = xIndex.get()
        const nearest = Math.round(current)
        selectSkill(nearest)
    }

    return (
        <section id="skills" className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skill</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Side: Skill Navigation List */}
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-3 pb-4 md:pb-0">
                            {DETAILED_SKILLS.map((skill, i) => (
                                <SkillButton 
                                    key={i}
                                    skill={skill}
                                    index={i}
                                    isActive={i === selectedIndex}
                                    onClick={selectSkill}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Filmstrip Carousel Layout */}
                    <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col md:h-[420px]">
                        <div className="overflow-hidden grow flex flex-col">
                            <motion.div 
                                className="flex h-full"
                                style={{ x: filmstripX }}
                            >
                                {DETAILED_SKILLS.map((skill, i) => (
                                    <div key={i} className="w-full h-full flex-shrink-0 px-1">
                                        <SkillCard skill={skill} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Draggable Pill Scroll Bar */}
                        <div className="mt-8 px-2 select-none">
                            <div className="flex items-center justify-between text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-3">
                                <span className="flex items-center gap-2">
                                    <GripVertical className="h-3 w-3" />
                                    Drag to Browse
                                </span>
                                <span>{selectedIndex + 1} / {DETAILED_SKILLS.length}</span>
                            </div>
                            
                            <div 
                                ref={trackRef}
                                className="relative h-4 w-full bg-white border border-slate-200 rounded-full cursor-pointer overflow-hidden backdrop-blur-sm"
                                onClick={(e) => {
                                    if (!trackRef.current) return
                                    const rect = trackRef.current.getBoundingClientRect()
                                    const x = e.clientX - rect.left
                                    const percentage = Math.max(0, Math.min(1, x / rect.width))
                                    selectSkill(Math.round(percentage * (DETAILED_SKILLS.length - 1)))
                                }}
                            >
                                <div className="absolute inset-0 flex items-center px-[2%] pointer-events-none">
                                    {DETAILED_SKILLS.map((_, i) => (
                                        <div key={i} className="flex-1 flex justify-center">
                                            <div className="w-1 h-1 rounded-full bg-slate-200" />
                                        </div>
                                    ))}
                                </div>
                                
                                <motion.div 
                                    className="absolute top-1 bottom-1 bg-[#023047] rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing z-20 group"
                                    style={{ 
                                        x: pillX,
                                        width: `${(1 / DETAILED_SKILLS.length) * 100}%`
                                    }}
                                    drag="x"
                                    dragConstraints={trackRef}
                                    dragElastic={0}
                                    dragMomentum={false}
                                    onDragStart={() => { isDragging.current = true }}
                                    onDrag={handleDrag}
                                    onDragEnd={handleDragEnd}
                                >
                                    <div className="w-4 h-1 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
