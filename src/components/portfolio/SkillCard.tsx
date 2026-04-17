'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { LucideIcon, ExternalLink } from "lucide-react"
import { DetailedSkill } from "@/data/portfolio-data"
import { cardHoverVariants } from "@/lib/animations"
import { SkillsList } from "./SkillsList"

interface SkillCardProps {
    skill: DetailedSkill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
    return (
        <motion.div
            variants={cardHoverVariants}
            initial="initial"
            whileHover="hover"
            className="w-full skill-card-item"
        >
            <Card
                id={`skills-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="shadow-sm bg-white text-foreground relative scroll-mt-24 overflow-hidden group transition-shadow duration-500 ease-out hover:shadow-xl h-full flex flex-col"
            >
                <CardContent className="p-6 flex flex-col h-full overflow-hidden">
                    {/* Header Section - Fixed Height */}
                    <div className="flex-shrink-0 h-[40px] flex items-center">
                        <h3 className="text-2xl font-bold text-foreground tracking-tight line-clamp-1">{skill.name}</h3>
                    </div>

                    {/* Description - Fixed Height & Scrollable */}
                    <div className="mt-4 text-justify h-[160px] overflow-y-auto custom-scrollbar pr-2 flex-shrink-0">
                        <p className="text-foreground/70 leading-relaxed text-[15px]">{skill.description}</p>
                    </div>

                    {/* Applied In Section - Pushed to Bottom */}
                    <div className="mt-auto border-t border-[#E2E8F0] pt-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-sm font-bold text-black uppercase tracking-wider">Applied In:</h4>
                        </div>
                        {skill.appliedIn.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {skill.appliedIn.map((project, idx) => (
                                    <a
                                        key={idx}
                                        href={project.link}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-black/70 text-xs font-bold border border-slate-200 hover:bg-slate-100 hover:text-black hover:border-slate-300 item-hover transition-all"
                                    >
                                        {project.label}
                                        <ExternalLink className="h-3 w-3 opacity-50" />
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <div className="h-8 flex items-center">
                                <span className="text-xs italic text-black/30 font-medium">Core technical competency</span>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
