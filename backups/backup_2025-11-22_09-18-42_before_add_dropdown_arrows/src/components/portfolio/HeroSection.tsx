import { Button } from '@/components/ui/button'

export const HeroSection = () => (
    <section id="about" className="pt-16 min-h-screen flex items-center justify-center bg-[#1F2A23] text-[#DAD7CD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#DAD7CD] mb-6">
                    About me
                </h1>
                <p className="text-2xl md:text-3xl text-[#C3C7B6] mb-8 font-light">
                    Entry-level Data Analyst
                </p>
                <p className="text-lg md:text-xl text-[#A3B18A] mb-12 max-w-3xl mx-auto leading-relaxed">
                    I'm Dwi Budi Setyonugroho, an entry-level data analyst with a strong foundation in transforming complex data into actionable insights that drive business growth and innovation. My expertise spans predictive modeling, statistical analysis, and data visualization, having helped optimize operations and make data-driven decisions that matter. I combine technical excellence with business acumen to deliver solutions that create real impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-[#5A6E58] hover:bg-[#4B5E4A] text-white px-8 py-3 text-base"
                        asChild
                    >
                        <a href="#contact">Get In Touch</a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-[#A3B18A] text-[#DAD7CD] hover:bg-[#A3B18A] hover:text-[#1F2A23] px-8 py-3 text-base"
                        asChild
                    >
                        <a href="#projects">View Projects</a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
)
