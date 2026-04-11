import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ABOUT_DATA } from '@/data/portfolio-data'

export const HeroSection = () => (
    <section id="about" className="pt-24 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">


                <h1 id="about-title" className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                    About me
                </h1>

                <div className="space-y-6 mb-10">
                    {ABOUT_DATA.bio.map((paragraph, index) => (
                        <p key={index} className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-center">
                            {paragraph.split('**').map((part, i) => (
                                i % 2 === 1 ? <span key={i} className="font-semibold text-foreground">{part}</span> : part
                            ))}
                        </p>
                    ))}
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex justify-center mt-12 cursor-pointer"
                >
                    <a href="#skills" aria-label="Scroll to Skills">
                        <ChevronDown className="h-10 w-10 text-secondary hover:text-secondary/80 item-hover" />
                    </a>
                </motion.div>

            </div>
        </div>
    </section>
)
