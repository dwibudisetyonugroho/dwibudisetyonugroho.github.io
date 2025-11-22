import { TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { PROJECTS } from '@/data/portfolio-data'

export const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-[#A3B18A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#1F2A23]">Project Portfolio</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {PROJECTS.map((project, index) => (
                    <Card key={index} id={project.id} className="border border-[#4B5E4A] shadow-sm hover:shadow-md transition-shadow duration-300 bg-white text-[#1F2A23] relative scroll-mt-24">
                        <CardContent className="p-8">
                            <div className="pr-32">
                                <h3 className="text-2xl font-semibold text-[#1F2A23] mb-4">{project.title}</h3>
                            </div>
                            <div className="text-justify">
                                <p className="text-[#3C4F40] leading-relaxed mb-6">{project.description}</p>
                            </div>

                            <div className="border-t border-[#4B5E4A] pt-6">
                                <h4 className="text-lg font-semibold text-[#1F2A23] mb-4">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-[#5A6E58] text-white text-sm rounded-full hover:bg-opacity-80 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-[#4B5E4A]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="h-4 w-4 text-[#5A6E58]" />
                                        <span className="text-sm font-medium text-[#3C4F40]">{project.impact}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
)
