import { Card, CardContent } from '@/components/ui/card'
import { INTERNSHIPS } from '@/data/portfolio-data'

export const InternshipsSection = () => (
    <section id="internships" className="py-20 bg-[#1F2A23] text-[#DAD7CD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#DAD7CD]">Internship Experience</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {INTERNSHIPS.map((internship, index) => (
                    <Card key={index} id={internship.id} className="border border-[#4B5E4A] shadow-sm hover:shadow-md transition-shadow duration-300 bg-white text-[#1F2A23] relative scroll-mt-24">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div className="pr-32">
                                    <h3 className="text-2xl font-semibold text-[#1F2A23] mb-4">{internship.title}</h3>
                                    <p className="text-lg text-[#3C4F40] font-medium">{internship.company}</p>
                                </div>
                                <span className="text-sm text-white bg-[#5A6E58] px-4 py-2 rounded-full">{internship.period}</span>
                            </div>
                            <div className="text-justify">
                                <p className="text-[#3C4F40] leading-relaxed mb-6">{internship.description}</p>
                            </div>

                            <div className="border-t border-[#4B5E4A] pt-6">
                                <h4 className="text-lg font-semibold text-[#1F2A23] mb-4">Key Achievements</h4>
                                <div className="flex flex-wrap gap-2">
                                    {internship.achievements.map((achievement, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-[#5A6E58] text-white text-sm rounded-full hover:bg-opacity-80 transition-colors duration-200"
                                        >
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
)
