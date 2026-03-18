'use client'

import { useState, useMemo } from 'react'
import { CheckCircle2, Award, ExternalLink, Copy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { INTERNSHIPS } from '@/data/portfolio-data'
import { SkillsList } from './SkillsList'
import { motion } from 'framer-motion'
import { cardHoverVariants } from '@/lib/animations'

export const InternshipsSection = () => {
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(text)
        setTimeout(() => setCopiedId(null), 2000)
    }


    return (
        <section id="internships" className="py-16 text-foreground bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Professional Experience</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {INTERNSHIPS.map((internship, index) => (
                        <motion.div
                            key={index}
                            variants={cardHoverVariants}
                            initial="initial"
                            whileHover="hover"
                        >
                            <Card id={internship.id} className="shadow-sm bg-white text-foreground relative scroll-mt-24 overflow-hidden group transition-shadow duration-500 ease-out hover:shadow-xl">

                                <CardContent className="p-8">
                                    {/* Badges - Flush Top Left */}
                                    <div className="flex items-center gap-0 mb-6 -mt-8 -ml-8">
                                        {internship.certificateType && (
                                            <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-secondary/10 text-secondary">
                                                <Award className="h-3.5 w-3.5" />
                                                {internship.certificateType}
                                            </span>
                                        )}
                                    </div>

                                    {/* Internship Logo - Top Right */}
                                    {(internship as any).logo && (
                                        <div className="absolute top-6 right-8">
                                            <div className="w-40 h-20 flex items-center justify-center">
                                                <img
                                                    src={(internship as any).logo}
                                                    alt={(internship as any).logoAlt || 'Internship Logo'}
                                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 item-hover"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Header Section with Badges */}
                                    <div className="pr-48">
                                        <div className="flex items-start gap-3 mb-4">
                                            <h3 className="text-2xl font-bold text-foreground tracking-tight">{internship.title}</h3>
                                        </div>


                                    </div>

                                    {/* Description */}
                                    <div className="mt-6 text-justify">
                                        <p className="text-foreground/70 leading-relaxed text-[15px]">{internship.description}</p>
                                    </div>

                                    {/* Skills Section with Smart Show More */}
                                    {internship.skillCategories ? (
                                        <SkillsList skills={Object.values(internship.skillCategories).flat()} title="Technical Skill" />
                                    ) : (
                                        internship.skills && <SkillsList skills={internship.skills} title="Technical Skill" />
                                    )}

                                    {/* Bottom action bar - flush to card edges */}
                                    <div className="mt-8 -mx-8 -mb-8 pl-0 pr-8 flex items-center justify-between flex-wrap gap-4">
                                        <div className="flex items-center gap-0 flex-wrap">
                                            <Button
                                                className="px-6 py-2 h-10 rounded-none"
                                                asChild
                                            >
                                                <a href={internship.verificationUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    View Certificate
                                                </a>
                                            </Button>

                                            {(internship as any).projectLink && (
                                                <Button
                                                    variant="default"
                                                    className="px-6 py-2 h-10 rounded-none border-0 bg-[#023047] text-white hover:bg-[#023047]/90"
                                                    asChild
                                                >
                                                    <a href={(internship as any).projectLink}>
                                                        <ArrowRight className="h-4 w-4 mr-2" />
                                                        View Project
                                                    </a>
                                                </Button>
                                            )}

                                            {internship.credentialId && (
                                                <div className="flex items-center gap-2 bg-secondary/5 px-3 py-1.5 border border-border/30 ml-1.5">
                                                    <span className="text-xs text-foreground/50 font-medium">ID:</span>
                                                    <span className="text-xs font-mono font-semibold text-foreground">{internship.credentialId}</span>
                                                    <button
                                                        onClick={() => copyToClipboard(internship.credentialId!)}
                                                        className="ml-2 text-foreground/50 hover:text-primary item-hover focus:outline-none"
                                                        title="Copy ID"
                                                    >
                                                        {copiedId === internship.credentialId ? (
                                                            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                                        ) : (
                                                            <Copy className="h-3.5 w-3.5" />
                                                        )}
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {internship.platform && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-foreground/50 text-xs font-medium tracking-wide">Visit Official Page</span>
                                                <ArrowRight className="h-3.5 w-3.5 text-foreground/50" />
                                                <a
                                                    href={internship.link || "https://www.rakamin.com/virtual-internship-experience/kimiafarma-big-data-analytics-virtual-internship-program"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opacity-80 item-hover"
                                                >
                                                    <img
                                                        src="/logos/rakamin-logo.png"
                                                        alt="Rakamin Logo"
                                                        className="h-4 w-auto opacity-90 hover:opacity-100 transition-opacity duration-0"
                                                    />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
