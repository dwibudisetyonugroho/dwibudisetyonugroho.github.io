import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const HeroSection = () => (
    <section id="about" className="pt-24 min-h-screen flex items-center justify-center bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">


                <h1 id="about-title" className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                    About me
                </h1>

                <div className="space-y-6 mb-10">
                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                        I&apos;m <span className="font-bold text-foreground border-b-2 border-primary/20">Dwi Budi Setyonugroho</span>, a Data Analyst specializing in architecting <span className="font-semibold text-foreground">end-to-end analytics pipelines</span> that bridge the gap between complex datasets and strategic business growth. With a foundation in <span className="font-semibold text-foreground">Engineering background</span> and <span className="font-semibold text-foreground">IBM, Google, and Microsoft Professional Certificates from Coursera</span>, I leverage a sophisticated stack of <span className="font-semibold text-foreground">SQL, Python, and Power BI/Looker Studio</span> to deliver high-impact intelligence.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                        From optimizing <span className="font-bold text-foreground">risk detection by 58%</span> to uncovering multi-million IDR revenue opportunities through <span className="font-semibold text-foreground">tiered margin logic</span> and geographic analysis, I transform raw data into actionable assets. My approach combines rigorous statistical modeling with strategic business acumen to resolve operational bottlenecks and drive data-informed decision-making.
                    </p>
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
