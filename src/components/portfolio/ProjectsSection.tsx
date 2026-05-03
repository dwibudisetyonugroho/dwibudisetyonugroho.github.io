'use client'

import { Award, TrendingUp, FileText, Github, Layers, Wrench, Package } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { cardHoverVariants } from '@/lib/animations'
import { PROJECTS } from '@/data/portfolio-data'
import { SkillsList } from './SkillsList'
import ReactMarkdown from 'react-markdown'


export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Project Portfolio</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardHoverVariants}
                            initial="initial"
                            whileHover="hover"
                        >
                            <Card id={project.id} className="shadow-sm bg-white text-foreground relative scroll-mt-24 overflow-hidden group transition-shadow duration-500 ease-out hover:shadow-xl">
                                <CardContent className="p-8">
                                    {/* Badges - Flush Top Left */}
                                    {(project as any).type && (
                                        <div className="flex items-center gap-0 mb-6 -mt-8 -ml-8">
                                            {(project as any).typeLink ? (
                                                <a
                                                    href={(project as any).typeLink}
                                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors cursor-pointer group/badge"
                                                >
                                                    <Award className="h-3.5 w-3.5" />
                                                    {(project as any).type}
                                                </a>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-secondary/10 text-secondary">
                                                    <Award className="h-3.5 w-3.5" />
                                                    {(project as any).type}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Project Logo - Top Right */}
                                    {(project as any).logo && (
                                        <div className="absolute top-6 right-8">
                                            <div className="w-40 h-20 flex items-center justify-center">
                                                <img
                                                    src={(project as any).logo}
                                                    alt={`${project.title} logo`}
                                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Title */}
                                    <div className="mb-6 pr-44">
                                        <h3 className="text-2xl font-bold text-foreground tracking-tight mb-1">{project.title}</h3>
                                        {(project as any).role && (
                                            <p className="text-sm text-secondary font-semibold">{(project as any).role}</p>
                                        )}
                                    </div>

                                    {/* Project Content (Synchronized Layout) */}
                                    <div className="space-y-6">
                                        <div className="text-foreground/70 leading-relaxed text-justify mb-6 text-[15px]">
                                            <ReactMarkdown>{project.description}</ReactMarkdown>
                                        </div>

                                        {/* Technical Highlights (3-column layout) */}
                                        {((project as any).technologies || (project as any).methodologies || (project as any).deliverables) && (
                                            <div className="mt-6 pt-6 mb-6 border-t border-[#E2E8F0]">
                                                <h5 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Technical Highlights</h5>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                                    {/* Technologies */}
                                                    {((project as any).technologyCategories || (project as any).technologies) && (
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/20">
                                                                <Wrench className="h-4 w-4 text-foreground/70" />
                                                                <span className="text-sm font-semibold text-foreground">Technologies</span>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {((project as any).technologyCategories
                                                                    ? Object.values((project as any).technologyCategories).flat()
                                                                    : (project as any).technologies
                                                                ).map((item: string, i: number) => (
                                                                    <li key={i} className="text-[14px] text-foreground/80 leading-snug flex items-start gap-2">
                                                                        <span className="text-foreground/40 shrink-0 mt-0.5">•</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Methodologies */}
                                                    {((project as any).methodologyCategories || (project as any).methodologies) && (
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/20">
                                                                <Layers className="h-4 w-4 text-foreground/70" />
                                                                <span className="text-sm font-semibold text-foreground">Methodologies</span>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {((project as any).methodologyCategories
                                                                    ? Object.values((project as any).methodologyCategories).flat()
                                                                    : (project as any).methodologies
                                                                ).map((item: string, i: number) => (
                                                                    <li key={i} className="text-[14px] text-foreground/80 leading-snug flex items-start gap-2">
                                                                        <span className="text-foreground/40 shrink-0 mt-0.5">•</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Deliverables */}
                                                    {(project as any).deliverables && (
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border/20">
                                                                <Package className="h-4 w-4 text-foreground/70" />
                                                                <span className="text-sm font-semibold text-foreground">Deliverables</span>
                                                            </div>
                                                            <ul className="space-y-2">
                                                                {(project as any).deliverables.map((item: string, i: number) => (
                                                                    <li key={i} className="text-[14px] text-foreground/80 leading-snug flex items-start gap-2">
                                                                        <span className="text-foreground/40 shrink-0 mt-0.5">•</span>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Impact */}
                                        {(project as any).impact && (
                                            <div className="flex items-start gap-3 bg-secondary/5 px-4 py-4 border border-border/30 mt-6">

                                                <div className="p-2 bg-primary/20 mt-1">
                                                    <TrendingUp className="h-4 w-4 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wide block mb-2">Impact & Insights</span>
                                                    {Array.isArray((project as any).impact) ? (
                                                        <ul className="space-y-3">
                                                            {(project as any).impact.map((point: string, idx: number) => (
                                                                <li key={idx} className="text-sm font-medium text-foreground flex gap-2 text-justify">
                                                                    <span className="text-primary font-bold shrink-0">{idx + 1}.</span>
                                                                    <div className="prose-sm max-w-none">
                                                                        <ReactMarkdown>{point}</ReactMarkdown>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <div className="text-sm font-bold text-foreground">
                                                            <ReactMarkdown>{(project as any).impact}</ReactMarkdown>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                        )}
                                    </div>


                                    {/* Action Buttons - Flush Bottom */}
                                    {((project as any).githubUrl || (project as any).documentationUrl) && (
                                        <div className="mt-8 -mx-8 -mb-8 flex items-center flex-wrap">
                                            {(project as any).githubUrl && (
                                                <Button
                                                    className="px-6 py-2 h-10 rounded-none flex-1 sm:flex-none font-bold"
                                                    asChild
                                                >
                                                    <a href={(project as any).githubUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="h-4 w-4 mr-2" />
                                                        View on GitHub
                                                    </a>
                                                </Button>
                                            )}
                                            {(project as any).documentationUrl && (
                                                <Button
                                                    variant="default"
                                                    className="px-6 py-2 h-10 rounded-none border-0 bg-[#023047] text-white hover:bg-[#023047]/90 transition-colors flex-1 sm:flex-none font-bold align-middle"
                                                    asChild
                                                >
                                                    <a href={(project as any).documentationUrl} target="_blank" rel="noopener noreferrer">
                                                        <FileText className="h-4 w-4 mr-2" />
                                                        View Documentation
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}
