import { Card, CardContent } from '@/components/ui/card'
import { SKILLS } from '@/data/portfolio-data'

export const SkillsSection = () => (
    <section id="skills" className="py-20 bg-[#A3B18A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#1F2A23]">Skills & Tools</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {Object.entries(SKILLS).map(([category, skillList]) => (
                    <Card key={category} id={`skills-${category.toLowerCase().replace(/\s+/g, '-')}`} className="border border-[#6B705C] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white scroll-mt-24">
                        <CardContent className="p-6">
                            <h3 className="text-lg font-semibold text-[#1F2A23] mb-4">{category}</h3>
                            <div className="space-y-2">
                                {skillList.map((skill, index) => (
                                    <div key={index} className="bg-[#C3C7B6] px-3 py-2 rounded text-center text-[#1F2A23] hover:bg-[#A3B18A] transition-colors duration-200 text-sm">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
)
