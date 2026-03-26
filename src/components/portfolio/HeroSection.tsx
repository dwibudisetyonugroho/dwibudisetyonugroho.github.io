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
                        Hi, I'm <span className="font-semibold text-foreground">Dwi Budi Setyonugroho</span>. My journey began with an <span className="font-semibold text-foreground">Engineering degree</span>, where my thesis on risk assessment taught me early on how to approach data analysis. As my interest in the data science field grew, I pursued the <span className="font-semibold text-foreground">IBM Data Analyst Professional Certificate</span> to master the fundamentals of analytics, followed by the <span className="font-semibold text-foreground">Microsoft Power BI Data Analyst Professional Certificate</span> to deepen my expertise in data visualization. Finally, I completed the <span className="font-semibold text-foreground">Google Advanced Data Analytics Professional Certificate</span>, where I dove deeper into statistics and machine learning to build predictive models.
                    </p>

                    <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-center">
                        Subsequently, I joined <span className="font-semibold text-foreground">virtual internships</span> with three companies, applying those skills to solve complex challenges in credit risk modeling and revenue optimization. Currently, I work as a <span className="font-semibold text-foreground">private driver</span>, which has further honed my communication, crisis management, time management, and adaptability soft skills. I would be honored to bring my blend of knowledge to your team.
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
