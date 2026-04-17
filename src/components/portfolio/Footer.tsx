'use client'

import { Linkedin, Github, Instagram, ArrowUp, FileText, Globe, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { 
    CONTACT_INFO, 
    CERTIFICATES, 
    INTERNSHIPS, 
    PROJECTS, 
    DETAILED_SKILLS, 
    ABOUT_DATA 
} from '@/data/portfolio-data'

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleDownloadData = () => {
        const timestamp = new Date().toLocaleString()
        
        // Helper to strip markdown bold/italic
        const cleanText = (text: string) => text.replace(/\*\*/g, '').replace(/\*/g, '')

        let dataStr = `DWI BUDI SETYONUGROHO - COMPREHENSIVE PORTFOLIO DATA\n`
        dataStr += `Generated: ${timestamp}\n`
        dataStr += `==========================================\n\n`

        // Contact Info
        dataStr += `CONTACT INFORMATION\n`
        dataStr += `-------------------\n`
        dataStr += `Email: ${CONTACT_INFO.email}\n`
        dataStr += `Phone: ${CONTACT_INFO.phone}\n`
        dataStr += `Location: ${CONTACT_INFO.location}\n`
        dataStr += `LinkedIn: ${CONTACT_INFO.linkedin}\n`
        dataStr += `GitHub: ${CONTACT_INFO.github}\n`
        dataStr += `Instagram: ${CONTACT_INFO.instagram}\n\n`

        // About Me (Summary)
        dataStr += `ABOUT ME (SUMMARY)\n`
        dataStr += `------------------\n`
        dataStr += `Summary: ${ABOUT_DATA.summary}\n\n`
        dataStr += `Bio:\n`
        ABOUT_DATA.bio.forEach(p => {
            dataStr += `${cleanText(p)}\n\n`
        })

        // Technical Skills
        dataStr += `DETAILED TECHNICAL SKILLS & TOOLS\n`
        dataStr += `----------------------------------\n`
        DETAILED_SKILLS.forEach(skill => {
            dataStr += `• ${skill.name}\n`
            dataStr += `  Description: ${skill.description}\n`
            dataStr += `  Key Competencies: ${skill.skills.join(', ')}\n`
            if (skill.appliedIn.length > 0) {
                dataStr += `  Applied In: ${skill.appliedIn.map(a => a.label).join(', ')}\n`
            }
            dataStr += `\n`
        })

        // Professional Experience / Internships
        dataStr += `PROFESSIONAL EXPERIENCE & INTERNSHIPS\n`
        dataStr += `-------------------------------------\n`
        INTERNSHIPS.forEach(intern => {
            dataStr += `• ${intern.title} at ${intern.company}\n`
            dataStr += `  Type: ${intern.certificateType || 'N/A'} | Level: ${intern.level || 'N/A'}\n`
            dataStr += `  Period: ${intern.period || 'N/A'}\n`
            dataStr += `  Description: ${cleanText(intern.description)}\n`
            
            // Collect all skills (main + categories)
            const allInternSkills = intern.skillCategories 
                ? Array.from(new Set(Object.values(intern.skillCategories).flat()))
                : intern.skills || [];
                
            if (allInternSkills.length > 0) {
                dataStr += `  Key Skills: ${allInternSkills.join(', ')}\n`
            }
            if (intern.achievements && intern.achievements.length > 0) {
                dataStr += `  Achievements:\n`
                intern.achievements.forEach(ach => {
                    dataStr += `    - ${ach}\n`
                })
            }
            if (intern.credentialId) dataStr += `  Credential ID: ${intern.credentialId}\n`
            if (intern.verificationUrl) dataStr += `  Verification: ${intern.verificationUrl}\n`
            dataStr += `\n`
        })

        // Projects
        dataStr += `PROJECT PORTFOLIO\n`
        dataStr += `-----------------\n`
        PROJECTS.forEach(project => {
            dataStr += `• ${project.title}\n`
            dataStr += `  Role/Type: ${project.type}\n`
            dataStr += `  Description: ${cleanText(project.description)}\n`
            dataStr += `  Technologies: ${project.technologies.join(', ')}\n`
            if (project.methodologies && project.methodologies.length > 0) {
                dataStr += `  Methodologies: ${project.methodologies.join(', ')}\n`
            }
            if (project.deliverables && project.deliverables.length > 0) {
                dataStr += `  Deliverables: ${project.deliverables.join(', ')}\n`
            }
            if (project.impact && project.impact.length > 0) {
                dataStr += `  Business Impact:\n`
                project.impact.forEach(imp => {
                    dataStr += `    - ${cleanText(imp)}\n`
                })
            }
            if (project.githubUrl) dataStr += `  GitHub: ${project.githubUrl}\n`
            dataStr += `\n`
        })

        // Education & Certificates
        dataStr += `EDUCATION & CERTIFICATIONS\n`
        dataStr += `--------------------------\n`
        CERTIFICATES.forEach(cert => {
            dataStr += `• ${cert.title}\n`
            dataStr += `  Issuer: ${cert.issuer} | Level: ${cert.level}\n`
            if (cert.gpa) dataStr += `  GPA Performance: ${cert.gpa}\n`
            dataStr += `  Description: ${cleanText(cert.description)}\n`
            
            // Skills
            const allCertSkills = cert.skillCategories 
                ? Array.from(new Set(Object.values(cert.skillCategories).flat()))
                : cert.skills || [];
            if (allCertSkills.length > 0) {
                dataStr += `  Skills Acquired: ${allCertSkills.join(', ')}\n`
            }

            // Hidden Content: Courses
            if (cert.courses && cert.courses.length > 0) {
                dataStr += `  Course Curriculum (${cert.courses.length} courses):\n`
                cert.courses.forEach((course, idx) => {
                    dataStr += `    ${idx + 1}. ${course}\n`
                })
            }

            // Hidden Content: Thesis / Program Highlights
            if (cert.highlights && cert.highlights.length > 0) {
                dataStr += `  Program Highlights:\n`
                cert.highlights.forEach(high => {
                    dataStr += `    - ${high}\n`
                })
            }
            if (cert.projectTitle) {
                dataStr += `  Project/Thesis: ${cert.projectTitle}\n`
                if (cert.projectDetails && cert.projectDetails.length > 0) {
                    dataStr += `  Detailed Insights:\n`
                    cert.projectDetails.forEach(detail => {
                        dataStr += `    - ${cleanText(detail)}\n`
                    })
                }
            }
            if (cert.credentialId) dataStr += `  Credential ID: ${cert.credentialId}\n`
            if (cert.verificationUrl) dataStr += `  Verification: ${cert.verificationUrl}\n`
            dataStr += `\n`
        })

        dataStr += `==========================================\n`
        dataStr += `End of Comprehensive Portfolio Data Export`

        const blob = new Blob([dataStr], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'DwiBudiSetyonugroho-PortfolioData.txt'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    const currentYear = new Date().getFullYear()

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <footer className="bg-[#030303] relative border-t border-white/5 overflow-hidden">
            {/* Subtle Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
                >
                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                            <div className="h-8 w-1 bg-secondary rounded-full" />
                            <h3 className="text-2xl font-bold text-white tracking-tight">{ABOUT_DATA.name}</h3>
                        </motion.div>
                        
                        <motion.p variants={itemVariants} className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
                            {ABOUT_DATA.summary}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
                            {/* Career Status Badge */}
                            <a 
                                href="/Dwi_Budi_Setyonugroho_Resume.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-xl hover:bg-secondary hover:text-white transition-all duration-300 group shadow-lg shadow-white/5"
                            >
                                <FileText className="h-4 w-4" />
                                Download Resume
                            </a>

                            <div className="flex items-center gap-3">
                                {[
                                    { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
                                    { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
                                    { icon: Instagram, href: CONTACT_INFO.instagram, label: 'Instagram' }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/5 text-white/40 hover:bg-secondary hover:text-white transition-all duration-300 rounded-xl border border-white/10 hover:border-secondary/50 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>


                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 md:pt-4">
                        <motion.h4 variants={itemVariants} className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-8">Navigation</motion.h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Skills', href: '#skills' },
                                { name: 'Certificates', href: '#certificates' },
                                { name: 'Projects', href: '#projects' }
                            ].map((link) => (
                                <motion.li key={link.name} variants={itemVariants}>
                                    <a 
                                        href={link.href} 
                                        className="text-white/40 text-sm hover:text-secondary"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 md:pt-4">
                        <motion.h4 variants={itemVariants} className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-8">Get In Touch</motion.h4>
                        <ul className="space-y-6">
                            <motion.li variants={itemVariants} className="group">
                                <a 
                                    href={`mailto:${CONTACT_INFO.email}`} 
                                    className="group"
                                >
                                    <span className="text-white/60 text-sm group-hover:text-secondary truncate">{CONTACT_INFO.email}</span>
                                </a>
                            </motion.li>
                            <motion.li variants={itemVariants} className="group">
                                <a 
                                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                                    className="group"
                                >
                                    <span className="text-white/60 text-sm group-hover:text-secondary">{CONTACT_INFO.phone}</span>
                                </a>
                            </motion.li>
                            <motion.li variants={itemVariants}>
                                <span className="text-white/60 text-sm flex items-center gap-2">
                                    <Globe className="h-3 w-3" />
                                    {CONTACT_INFO.location}
                                </span>
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8"
                >
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">
                            © {new Date().getFullYear()} Dwi Budi Setyonugroho. All rights reserved.
                        </p>
                        
                        <button
                            onClick={handleDownloadData}
                            className="flex items-center gap-2 text-[10px] font-bold text-white/30 hover:text-secondary transition-colors uppercase tracking-widest group"
                        >
                            <Download className="h-3 w-3 group-hover:scale-110 transition-transform" />
                            Download Project Data (.txt)
                        </button>
                    </div>
                    
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-[10px] font-black text-white/30 hover:text-white transition-all duration-500 uppercase tracking-[0.3em]"
                    >
                        Scroll to top
                        <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 group-hover:-translate-y-1">
                            <ArrowUp className="h-4 w-4 text-white" />
                        </div>
                    </button>
                </motion.div>
            </div>
        </footer>
    )
}
