'use client'

import { PROJECTS } from '@/data'
import { TicketCardEducation } from './TicketCardEducation'

export const getProjectProps = (project: typeof PROJECTS[number]) => {
    const proj = project as any

    // Format Technical Highlights & Business Impact into projectDetails array
    const details: string[] = []

    if (proj.technologies && proj.technologies.length > 0) {
        details.push('1. Key Technologies & Tools')
        proj.technologies.forEach((tech: string) => {
            details.push(`• ${tech}`)
        })
    }

    if (proj.methodologies && proj.methodologies.length > 0) {
        details.push('2. Methodologies & Frameworks')
        proj.methodologies.forEach((method: string) => {
            details.push(`• ${method}`)
        })
    }

    if (proj.deliverables && proj.deliverables.length > 0) {
        details.push('3. Core Deliverables')
        proj.deliverables.forEach((del: string) => {
            details.push(`• ${del}`)
        })
    }

    if (proj.impact && proj.impact.length > 0) {
        details.push('4. Business Impact & Strategic Insights')
        proj.impact.forEach((imp: string) => {
            // Strip markdown formatting if any
            const cleaned = imp.replace(/\*\*/g, '')
            details.push(`• ${cleaned}`)
        })
    }

    const logoMap: Record<string, string> = {
        'pt-sejahtera-bersama': '/logos/bank-muamalat-logo.webp',
        'kimia-farma-performance': '/logos/kimia-farma-logo.svg'
    }

    return {
        logoSrc: logoMap[project.id] || proj.logo || null,
        logoAlt: `${project.title} Logo`,
        issuer: proj.type || 'Virtual Internship',
        projectTitle: 'Technical Highlights & Business Impact',
        projectDetails: details,
        certificateUrl: proj.documentationUrl,
        certificateText: 'View Documentation',
        verificationUrl: proj.githubUrl,
        verifyText: 'View on GitHub',
        verifyColor: '#023047',
        verifyHoverColor: '#05608c',
        headerLogoStyle: { height: '36px' },
        officialLogoStyle: { height: '22px' }
    }
}

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 text-foreground bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Project Portfolio</h2>
                <div className="max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
                    {PROJECTS.map((project) => {
                        const extraProps = getProjectProps(project)
                        const proj = project as any
                        const tags = proj.technologies || (proj.technologyCategories ? Object.values(proj.technologyCategories).flat() : [])

                        return (
                            <div key={project.id} id={project.id} className="scroll-mt-24 w-full">
                                <TicketCardEducation
                                    title={project.title}
                                    description={project.description}
                                    tags={tags}
                                    riseOnHover={true}
                                    maxTilt={3}
                                    hoverSpringConfig={{ stiffness: 120, damping: 20 }}
                                    {...extraProps}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
