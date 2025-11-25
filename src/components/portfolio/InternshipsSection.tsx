'use client'

import { useState } from 'react'
import { CheckCircle2, Award, ExternalLink, Copy, ChevronUp, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { INTERNSHIPS } from '@/data/portfolio-data'

export const InternshipsSection = () => {
    const [showAllSkills, setShowAllSkills] = useState<{ [key: number]: boolean }>({})
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const toggleAllSkills = (index: number) => {
        setShowAllSkills(prev => ({
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
        <section id="internships" className="py-20 bg-[#1F2A23] text-[#DAD7CD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#DAD7CD]">Internship Experience</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {INTERNSHIPS.map((internship, index) => (
                        <Card key={index} id={internship.id} className="border border-[#4B5E4A] shadow-sm hover:shadow-lg transition-all duration-300 bg-white text-[#1F2A23] relative scroll-mt-24 overflow-hidden group">
                            {/* Decorative Top Border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5A6E58] via-[#A3B18A] to-[#5A6E58]" />

                            <CardContent className="p-8">
                                {/* Header Section with Badges */}
                                <div className="pr-36">
                                    <div className="flex items-start gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-[#1F2A23] tracking-tight">{internship.title}</h3>
                                    </div>

                                    {/* Two-Row Metadata Layout */}
                                    <div className="space-y-3">
                                        {/* Row 1: Badges */}
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                Verified Credential
                                            </span>
                                            {internship.certificateType && (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F0FE] text-[#1967D2] border border-[#D2E3FC]">
                                                    <Award className="h-3.5 w-3.5" />
                                                    {internship.certificateType}
                                                </span>
                                            )}
                                        </div>

                                        {/* Row 2: Date Info & Metrics */}
                                        <div className="flex items-center gap-3 flex-wrap text-sm text-[#5F6368]">
                                            {internship.startDate && internship.endDate && (
                                                <span className="font-medium flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5A6E58]" />
                                                    {internship.startDate} - {internship.endDate}
                                                </span>
                                            )}
                                            {internship.completionTime && (
                                                <span className="font-medium text-[#5A6E58] bg-[#5A6E58]/10 px-2 py-0.5 rounded">
                                                    {internship.completionTime}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mt-6 text-justify">
                                    <p className="text-[#3C4F40] leading-relaxed text-[15px]">{internship.description}</p>
                                </div>

                                {/* Skills Section with Show More */}
                                {internship.skills && (
                                    <div className="mt-6 pt-6 border-t border-[#E0E0E0]">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-sm font-bold text-[#1F2A23] uppercase tracking-wider">Skills & Technologies</h4>
                                            <button
                                                onClick={() => toggleAllSkills(index)}
                                                className="text-xs font-semibold text-[#5A6E58] hover:text-[#4B5E4A] transition-colors duration-200 uppercase tracking-wide flex items-center gap-1"
                                            >
                                                {showAllSkills[index] ? 'Show Less' : 'Show More'}
                                                {showAllSkills[index] ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                                            </button>
                                        </div>
                                        <div className={`flex flex-wrap gap-2 ${!showAllSkills[index] ? 'max-h-[32px] overflow-hidden' : ''}`}>
                                            {internship.skills.map((skill, skillIdx) => (
                                                <span
                                                    key={skillIdx}
                                                    className="px-3 py-1 bg-[#F1F3F4] text-[#3C4F40] text-xs font-medium rounded-md border border-[#E0E0E0] hover:bg-[#E8F0FE] hover:text-[#1967D2] hover:border-[#D2E3FC] transition-all duration-200"
                                                >
                                                    {skill}
                                                </span>
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
                                            <a href={internship.verificationUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                View Certificate
                                            </a>
                                        </Button>

                                        {internship.credentialId && (
                                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-[#E0E0E0]">
                                                <span className="text-xs text-[#5F6368] font-medium">ID:</span>
                                                <span className="text-xs font-mono font-semibold text-[#1F2A23]">{internship.credentialId}</span>
                                                <button
                                                    onClick={() => copyToClipboard(internship.credentialId!)}
                                                    className="ml-2 text-[#5F6368] hover:text-[#5A6E58] transition-colors focus:outline-none"
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
                                            <span className="text-[#5F6368] text-xs font-medium tracking-wide">Visit Official Page</span>
                                            <ArrowRight className="h-3.5 w-3.5 text-[#5F6368]" />
                                            <a
                                                href="https://www.rakamin.com/virtual-internship-experience/kimiafarma-big-data-analytics-virtual-internship-program"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:opacity-80 transition-opacity"
                                            >
                                                <img
                                                    src="https://rakamin.id/images/rakamin-logo.png"
                                                    alt="Rakamin Logo"
                                                    className="h-10 w-auto"
                                                />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
