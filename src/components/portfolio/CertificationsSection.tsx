'use client'

import { useState } from 'react'
import { ExternalLink, Award, CheckCircle2, BookOpen, ChevronUp, ChevronDown, Copy, ArrowRight, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CERTIFICATIONS } from '@/data/portfolio-data'
import { SkillsList } from './SkillsList'
import { cardHoverVariants } from '@/lib/animations'

export const CertificationsSection = () => {
    const [showCurriculum, setShowCurriculum] = useState<{ [key: number]: boolean }>({})
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const toggleCurriculum = (index: number) => {
        setShowCurriculum(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(text)
        setTimeout(() => setCopiedId(null), 2000)
    }

    return (
        <section id="certifications" className="py-16 text-foreground bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Certification</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {CERTIFICATIONS.map((cert, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={cardHoverVariants}
                                initial="initial"
                                whileHover="hover"
                            >
                                <Card id={cert.id} className="shadow-sm bg-white text-foreground relative scroll-mt-24 overflow-hidden group transition-shadow duration-500 ease-out hover:shadow-xl">

                                    <CardContent className="p-8">
                                        {/* Badges - Flush Top Left */}
                                        <div className="flex items-center gap-0 mb-6 -mt-8 -ml-8">
                                            {cert.certificateType && (
                                                <span className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-secondary/10 text-secondary">
                                                    <Award className="h-3.5 w-3.5" />
                                                    {cert.certificateType}
                                                </span>
                                            )}
                                        </div>
                                        {/* Certificate Logo - Conditional based on issuer */}
                                        <div className="absolute top-6 right-8">
                                            <div className="w-40 h-20 flex items-center justify-center">
                                                {cert.issuer === 'IBM' ? (
                                                    <img
                                                        src="/logos/ibm-logo.png"
                                                        alt="IBM Logo"
                                                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 item-hover"
                                                    />
                                                ) : cert.issuer === 'Google' ? (
                                                    <img
                                                        src="/logos/google-logo.png"
                                                        alt="Google Logo"
                                                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 item-hover"
                                                    />
                                                ) : cert.issuer === 'Microsoft' ? (
                                                    <img
                                                        src="/logos/microsoft-logo.png"
                                                        alt="Microsoft Logo"
                                                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 item-hover"
                                                    />
                                                ) : cert.issuer === 'MySkill' ? (
                                                    <img
                                                        src="/logos/my-skill-logo.png"
                                                        alt="MySkill Logo"
                                                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 item-hover"
                                                    />
                                                ) : cert.issuer === 'DataCamp' ? (
                                                    <img
                                                        src="/logos/datacamp-sql-logo.png"
                                                        alt="DataCamp Logo"
                                                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 item-hover"
                                                    />
                                                ) : null}
                                            </div>
                                        </div>

                                        {/* Header Section with Badges */}
                                        <div className="pr-48">
                                            <div className="flex flex-col items-start gap-1 mb-4">
                                                <h3 className="text-2xl font-bold text-foreground tracking-tight">{cert.title}</h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="mt-6 text-justify">
                                            {cert.description.split('\n').map((line, i) => {
                                                const isBullet = line.trim().startsWith('•');
                                                const isBold = line.trim().startsWith('**') && line.trim().endsWith('**');

                                                if (!line.trim()) return <div key={i} className="h-4" />;
                                                if (isBullet) {
                                                    const bulletText = line.replace(/^•\s*/, '');
                                                    return (
                                                        <div key={i} className="flex items-start gap-2 mb-1 text-left">
                                                            <span className="text-foreground/70 mt-0.5 mt-[2px] text-[15px]">•</span>
                                                            <p className="text-foreground/70 leading-relaxed text-[15px] flex-1">
                                                                {bulletText.split('**').map((part, idx) => idx % 2 === 1 ? <strong key={idx} className="font-bold text-foreground">{part}</strong> : part)}
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                                return (
                                                    <p key={i} className={`text-foreground/70 leading-relaxed text-[15px] mb-2 ${isBold ? 'font-bold mt-4 text-foreground' : ''}`}>
                                                        {isBold ? line.trim().slice(2, -2) : line.split('**').map((part, idx) => idx % 2 === 1 ? <strong key={idx} className="font-bold text-foreground">{part}</strong> : part)}
                                                    </p>
                                                );
                                            })}
                                        </div>

                                        {/* Course Accordion */}
                                        {cert.courses && (
                                            <div className="mt-6 border border-[#E2E8F0] overflow-hidden">
                                                <button
                                                    onClick={() => toggleCurriculum(index)}
                                                    className="w-full flex items-center justify-between px-4 py-3 bg-secondary/5 hover:bg-secondary/10 item-hover"
                                                >
                                                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                                        <BookOpen className="h-4 w-4 text-secondary" />
                                                        Course Curriculum
                                                        <span className="text-xs font-normal text-foreground/50 ml-1">({cert.courses.length} Courses)</span>
                                                    </div>
                                                    {showCurriculum[index] ? (
                                                        <ChevronUp className="h-4 w-4 text-foreground/50" />
                                                    ) : (
                                                        <ChevronDown className="h-4 w-4 text-foreground/50" />
                                                    )}
                                                </button>
                                                <AnimatePresence>
                                                    {showCurriculum[index] && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-4 py-3 bg-white border-t border-[#E2E8F0]">
                                                                <ul className="columns-1 sm:columns-2 gap-x-8 space-y-2">
                                                                    {cert.courses.map((course, idx) => (
                                                                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70 break-inside-avoid">
                                                                            <span className="text-secondary mt-1 text-[10px] font-semibold min-w-[16px]">
                                                                                {idx + 1}.
                                                                            </span>
                                                                            <span>{course}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}

                                        {/* Skills Section */}
                                        {cert.skillCategories && (
                                            <SkillsList skills={Object.values(cert.skillCategories).flat()} title="Technical Skill" />
                                        )}

                                        {/* Bottom action bar */}
                                        <div className="mt-8 -mx-8 -mb-8 pl-0 pr-8 flex items-center justify-between flex-wrap gap-4">
                                            <div className="flex items-center gap-0 flex-wrap">
                                                {(cert as any).certificateUrl ? (
                                                    <>
                                                        <Button
                                                            className="px-6 py-2 h-10 rounded-none"
                                                            asChild
                                                        >
                                                            <a href={(cert as any).certificateUrl} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                                View Certificate
                                                            </a>
                                                        </Button>

                                                        <Button
                                                            variant="default"
                                                            className="px-6 py-2 h-10 rounded-none border-0 bg-[#023047] text-white hover:bg-[#023047]/90"
                                                            asChild
                                                        >
                                                            <a href={cert.verificationUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                                Verify on Coursera
                                                            </a>
                                                        </Button>
                                                    </>
                                                ) : cert.verificationUrl ? (
                                                    <Button
                                                        className="px-6 py-2 h-10 rounded-none"
                                                        asChild
                                                    >
                                                        <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4 mr-2" />
                                                            {cert.platform ? `Verify on ${cert.platform}` : 'View Certificate'}
                                                        </a>
                                                    </Button>
                                                ) : null}

                                                {cert.credentialId && (
                                                    <div className="flex items-center gap-2 bg-secondary/5 px-3 py-1.5 border border-border/30 ml-1.5">
                                                        <span className="text-xs text-foreground/50 font-medium">ID:</span>
                                                        <span className="text-xs font-mono font-semibold text-foreground">{cert.credentialId}</span>
                                                        <button
                                                            onClick={() => copyToClipboard(cert.credentialId!)}
                                                            className="ml-2 text-foreground/50 hover:text-primary item-hover focus:outline-none"
                                                            title="Copy ID"
                                                        >
                                                            {copiedId === cert.credentialId ? (
                                                                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                                            ) : (
                                                                <Copy className="h-3.5 w-3.5" />
                                                            )}
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            {cert.platform && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-foreground/50 text-xs font-medium tracking-wide">Visit Official Page</span>
                                                    <ArrowRight className="h-3.5 w-3.5 text-foreground/50" />
                                                    {cert.issuer === 'IBM' ? (
                                                        <a href="https://www.coursera.org/professional-certificates/ibm-data-analyst" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 item-hover">
                                                            <img src="/logos/coursera-logo.png" alt="Coursera Logo" className="h-4 w-auto" />
                                                        </a>
                                                    ) : cert.issuer === 'Google' ? (
                                                        <a href="https://www.coursera.org/professional-certificates/google-advanced-data-analytics" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 item-hover">
                                                            <img src="/logos/coursera-logo.png" alt="Coursera Logo" className="h-4 w-auto" />
                                                        </a>
                                                    ) : cert.issuer === 'Microsoft' ? (
                                                        <a href="https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 item-hover">
                                                            <img src="/logos/coursera-logo.png" alt="Coursera Logo" className="h-4 w-auto" />
                                                        </a>
                                                    ) : cert.issuer === 'MySkill' ? (
                                                        <a href="https://myskill.id/learning-path/microsoft-excel-word-powerpoint" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 item-hover">
                                                            <img src="/logos/my-skill-logo.png" alt="MySkill Logo" className="h-4 w-auto" />
                                                        </a>
                                                    ) : cert.issuer === 'DataCamp' ? (
                                                        <a href="https://www.datacamp.com/certification/sql-associate" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 item-hover">
                                                            <img src="/logos/datacamp-sql-logo.png" alt="DataCamp Logo" className="h-[22px] w-auto" />
                                                        </a>
                                                    ) : null}
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
