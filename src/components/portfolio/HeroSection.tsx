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
                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-center">
                        I am a Data Analyst who specializes in architecting <span className="font-semibold text-foreground">end-to-end analytics workflows</span> that transform complex datasets into strategic business assets. My unique value proposition lies at the intersection of a <span className="font-semibold text-foreground">Bachelor in Engineering</span> and three industry-recognized <span className="font-semibold text-foreground">Professional Certificates (IBM, Microsoft, Google) via Coursera</span>. This dual foundation allows me to approach data not just as numbers, but as a system requiring rigorous modeling, spatial logic, and risk assessment.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-center">
                        My technical toolkit—spanning <span className="font-semibold text-foreground">Excel, SQL, Python, Looker Studio, Power BI, and Tableau</span>—is deployed to solve real-world operational bottlenecks. I don&apos;t just build dashboards; I engineer pipelines that drive growth and mitigate risk.
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
