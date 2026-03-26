'use client'

import { Linkedin, Github, Instagram, ArrowUp, FileText, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { CONTACT_INFO } from '@/data/portfolio-data'

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
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
                            <h3 className="text-2xl font-bold text-white tracking-tight">Dwi Budi Setyonugroho</h3>
                        </motion.div>
                        
                        <motion.p variants={itemVariants} className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
                            A Data Analyst with a passion for finding the stories within data to help businesses solve problems and reach their goals more effectively.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
                            {/* Career Status Badge */}
                            <a 
                                href="/resume.pdf"
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
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">
                        © {new Date().getFullYear()} Dwi Budi Setyonugroho. All rights reserved.
                    </p>
                    
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
