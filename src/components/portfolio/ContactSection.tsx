'use client'

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { CONTACT_INFO } from '@/data/portfolio-data'
import { toast } from 'sonner'
import { cardHoverVariants } from '@/lib/animations'

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)
const contactMethods = [
    {
        icon: Mail,
        label: 'Email',
        value: CONTACT_INFO.email,
        copyValue: CONTACT_INFO.email,
        href: `mailto:${CONTACT_INFO.email}`,
        hoverIconColor: 'group-hover:text-[#EA4335]',
        hoverBgColor: 'group-hover:bg-[#EA4335]/10'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'Dwi Budi Setyonugroho',
        href: CONTACT_INFO.linkedin,
        hoverIconColor: 'group-hover:text-[#0A66C2]',
        hoverBgColor: 'group-hover:bg-[#0A66C2]/10',
        external: true
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'dwibudisetyonugroho',
        href: CONTACT_INFO.github,
        hoverIconColor: 'group-hover:text-black',
        hoverBgColor: 'group-hover:bg-black/10',
        external: true
    },
    {
        icon: Phone,
        label: 'Phone',
        value: CONTACT_INFO.phone,
        copyValue: CONTACT_INFO.phone.replace(/\s/g, ''),
        href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
        hoverIconColor: 'group-hover:text-primary',
        hoverBgColor: 'group-hover:bg-primary/10'
    },
    {
        icon: WhatsAppIcon,
        label: 'WhatsApp',
        value: 'Chat with me',
        href: `https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`,
        hoverIconColor: 'group-hover:text-[#25D366]',
        hoverBgColor: 'group-hover:bg-[#25D366]/10',
        external: true
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const ContactSection = () => {
    const handleCopy = (e: React.MouseEvent, value: string, label: string) => {
        // We don't preventDefault so the mailto/tel still triggers, 
        // but we copy the text as a backup.
        navigator.clipboard.writeText(value);
        toast.success(`${label} copied to clipboard!`, {
            description: value,
        });
    }

    return (
        <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-0 text-foreground tracking-tight">Get in touch</h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto"
                >
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={index}
                            href={method.href}
                            target={method.external ? "_blank" : undefined}
                            rel={method.external ? "noopener noreferrer" : undefined}
                            variants={itemVariants}
                            whileHover="hover"
                            onClick={(e) => {
                                if (method.copyValue) {
                                    handleCopy(e, method.copyValue, method.label);
                                }
                            }}
                            className={`flex-initial min-w-[280px] bg-white p-6 px-10 rounded-none shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center cursor-pointer group`}
                        >
                            <div className={`p-4 rounded-none bg-secondary/10 mb-4 group-hover:scale-110 ${method.hoverBgColor} transition-all duration-300`}>
                                <method.icon className={`h-7 w-7 text-primary ${method.hoverIconColor} transition-colors duration-300`} />
                            </div>
                            <h3 className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em] mb-3 transition-colors duration-300">
                                {method.label}
                            </h3>
                            <p className="text-foreground text-sm font-semibold whitespace-nowrap transition-colors duration-300">
                                {method.value}
                            </p>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Location Pill */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-10 py-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/20 rounded-full animate-ping" />
                            <div className="relative p-2.5 bg-secondary/10 rounded-full">
                                <MapPin className="h-5 w-5 text-secondary" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Currently Based</span>
                            <span className="text-foreground font-bold tracking-tight">{CONTACT_INFO.location}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
