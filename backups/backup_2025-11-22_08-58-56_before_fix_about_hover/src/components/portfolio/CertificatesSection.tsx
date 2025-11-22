'use client'

import { useState } from 'react'
import { ExternalLink, Award, CheckCircle2, BookOpen, ChevronUp, ChevronDown, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CERTIFICATES } from '@/data/portfolio-data'

export const CertificatesSection = () => {
    const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({})
    const [showAllSkills, setShowAllSkills] = useState<{ [key: number]: boolean }>({})
    const [showCurriculum, setShowCurriculum] = useState<{ [key: number]: boolean }>({})
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const toggleSkills = (index: number) => {
        setExpandedSkills(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const toggleAllSkills = (index: number) => {
        setShowAllSkills(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

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

    const getPrioritySkills = (skills: string[]) => {
        const priorityOrder = [
            'Microsoft Excel',
            'SQL',
            'Python Programming',
            'Exploratory Data Analysis',
            'Data Wrangling',
            'Data Analysis'
        ]

        const prioritySkills = skills.filter(skill => priorityOrder.includes(skill))
        const otherSkills = skills.filter(skill => !priorityOrder.includes(skill))

        return [...prioritySkills, ...otherSkills]
    }

    return (
        <section id="certificates" className="py-20 bg-[#1F2A23] text-[#DAD7CD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#DAD7CD]">Professional Certificates</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {CERTIFICATES.map((cert, index) => {
                        const isExpanded = expandedSkills[index] || false
                        const orderedSkills = cert.skills ? getPrioritySkills(cert.skills) : []
                        const displaySkills = isExpanded ? orderedSkills : orderedSkills.slice(0, 6)
                        const hasMoreSkills = orderedSkills.length > 6

                        return (
                            <Card key={index} id={cert.id} className="border border-[#4B5E4A] shadow-sm hover:shadow-lg transition-all duration-300 bg-white text-[#1F2A23] relative scroll-mt-24 overflow-hidden group">
                                {/* Decorative Top Border */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5A6E58] via-[#A3B18A] to-[#5A6E58]" />

                                <CardContent className="p-8">
                                    {/* IBM Logo - Better Implementation */}
                                    <div className="absolute top-8 right-8">
                                        <div className="w-28 h-14 flex items-center justify-center bg-white rounded-md border border-gray-100 shadow-sm p-2">
                                            <img
                                                src="https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg"
                                                alt="IBM Logo"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Header Section with Badges */}
                                    <div className="pr-36">
                                        <div className="flex items-start gap-3 mb-4">
                                            <h3 className="text-2xl font-bold text-[#1F2A23] tracking-tight">{cert.title}</h3>
                                        </div>

                                        {/* Two-Row Metadata Layout */}
                                        <div className="space-y-3">
                                            {/* Row 1: Badges */}
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                                    Verified Credential
                                                </span>
                                                {cert.certificateType && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F0FE] text-[#1967D2] border border-[#D2E3FC]">
                                                        <Award className="h-3.5 w-3.5" />
                                                        {cert.certificateType}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Row 2: Date Info & Metrics */}
                                            <div className="flex items-center gap-3 flex-wrap text-sm text-[#5F6368]">
                                                {cert.startDate && cert.endDate && (
                                                    <span className="font-medium flex items-center gap-1.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#5A6E58]" />
                                                        {cert.startDate} - {cert.endDate}
                                                    </span>
                                                )}
                                                {cert.completionTime && (
                                                    <span className="font-medium text-[#5A6E58] bg-[#5A6E58]/10 px-2 py-0.5 rounded">
                                                        {cert.completionTime}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-6 text-justify">
                                        <p className="text-[#3C4F40] leading-relaxed text-[15px]">{cert.description}</p>
                                    </div>

                                    {/* Course Curriculum Accordion */}
                                    {cert.courses && (
                                        <div className="mt-6 border border-[#E0E0E0] rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => toggleCurriculum(index)}
                                                className="w-full flex items-center justify-between px-4 py-3 bg-[#F8F9FA] hover:bg-[#F1F3F4] transition-colors duration-200"
                                            >
                                                <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2A23]">
                                                    <BookOpen className="h-4 w-4 text-[#5A6E58]" />
                                                    Course Curriculum
                                                    <span className="text-xs font-normal text-[#5F6368] ml-1">({cert.courses.length} Courses)</span>
                                                </div>
                                                {showCurriculum[index] ? (
                                                    <ChevronUp className="h-4 w-4 text-[#5F6368]" />
                                                ) : (
                                                    <ChevronDown className="h-4 w-4 text-[#5F6368]" />
                                                )}
                                            </button>
                                            {showCurriculum[index] && (
                                                <div className="px-4 py-3 bg-white border-t border-[#E0E0E0]">
                                                    <ul className="grid gap-2 sm:grid-cols-2">
                                                        {cert.courses.map((course, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-[#3C4F40]">
                                                                <span className="text-[#5A6E58] mt-1 text-[10px]">●</span>
                                                                <span>{course}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}


                                    {/* Compact Skills Section with Toggle */}
                                    {cert.skillCategories && (
                                        <div className="mt-6 pt-6 border-t border-[#E0E0E0]">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-sm font-bold text-[#1F2A23] uppercase tracking-wider">Skills & Technologies</h4>
                                                <button
                                                    onClick={() => toggleAllSkills(index)}
                                                    className="text-xs font-semibold text-[#5A6E58] hover:text-[#4B5E4A] transition-colors duration-200 uppercase tracking-wide flex items-center gap-1"
                                                >
                                                    {showAllSkills[index] ? 'Show Less' : `View All (${Object.keys(cert.skillCategories).length} Categories)`}
                                                    {showAllSkills[index] ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                                                </button>
                                            </div>
                                            <div className="space-y-4">
                                                {Object.entries(cert.skillCategories)
                                                    .slice(0, showAllSkills[index] ? undefined : 3)
                                                    .map(([category, skills]) => (
                                                        <div key={category}>
                                                            <h5 className="text-xs font-semibold text-[#5F6368] mb-2 uppercase tracking-wide">{category}</h5>
                                                            <div className="flex flex-wrap gap-2">
                                                                {skills.map((skill, skillIdx) => (
                                                                    <span
                                                                        key={skillIdx}
                                                                        className="px-3 py-1 bg-[#F1F3F4] text-[#3C4F40] text-xs font-medium rounded-md border border-[#E0E0E0] hover:bg-[#E8F0FE] hover:text-[#1967D2] hover:border-[#D2E3FC] transition-all duration-200"
                                                                    >
                                                                        {skill}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Footer with Actions */}
                                    <div className="mt-8 pt-6 border-t border-[#E0E0E0] bg-[#F8F9FA] -mx-8 -mb-8 px-8 py-4 flex items-center justify-between flex-wrap gap-4">
                                        <div className="flex items-center gap-4 flex-wrap">
                                            <Button
                                                className="bg-[#5A6E58] hover:bg-[#4B5E4A] text-white px-6 py-2 h-10 shadow-sm hover:shadow transition-all"
                                                asChild
                                            >
                                                <a href={cert.verificationUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    View Certificate
                                                </a>
                                            </Button>

                                            {cert.credentialId && (
                                                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-[#E0E0E0]">
                                                    <span className="text-xs text-[#5F6368] font-medium">ID:</span>
                                                    <span className="text-xs font-mono font-semibold text-[#1F2A23]">{cert.credentialId}</span>
                                                    <button
                                                        onClick={() => copyToClipboard(cert.credentialId!)}
                                                        className="ml-2 text-[#5F6368] hover:text-[#5A6E58] transition-colors focus:outline-none"
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
                                                <span className="text-[#5F6368] text-xs font-medium uppercase tracking-wide">Verified by</span>
                                                <a
                                                    href="https://www.coursera.org/professional-certificates/ibm-data-analyst"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opacity-80 transition-opacity"
                                                >
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
                                                        alt="Coursera Logo"
                                                        className="h-5 w-auto"
                                                    />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
