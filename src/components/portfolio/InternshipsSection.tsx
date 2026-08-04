'use client'

import { INTERNSHIPS } from '@/data'
import { TicketCardEducation } from './TicketCardEducation'

const getInternshipProps = (intern: typeof INTERNSHIPS[number]) => {
    const item = intern as any

    if (item.id === 'private-driver') {
        return {
            logoSrc: null,
            issuer: item.company,
            certificateUrl: undefined,
            verificationUrl: undefined,
            officialUrl: undefined,
        }
    }

    return {
        logoSrc: item.logo || null,
        logoAlt: item.logoAlt || `${item.company} Logo`,
        issuer: item.certificateType || 'Project-Based Virtual Internship',
        credentialId: item.credentialId,
        certificateUrl: item.verificationUrl,
        certificateText: 'View Certificate',
        verificationUrl: item.link || 'https://www.rakamin.com',
        verifyText: 'Verify on Rakamin',
        verifyColor: '#023047',
        verifyHoverColor: '#05608c',
        officialUrl: item.link || 'https://www.rakamin.com',
        officialLogoSrc: '/logos/rakamin-logo.png',
        officialLogoAlt: 'Rakamin Academy Logo',
        officialLogoStyle: { height: '20px' },
        headerLogoStyle: { height: '36px' }
    }
}

export const InternshipsSection = () => {
    return (
        <section id="internships" className="py-16 text-foreground bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Professional Experience</h2>
                <div className="max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
                    {INTERNSHIPS.map((internship) => {
                        const extraProps = getInternshipProps(internship)
                        const item = internship as any
                        const tags = item.skills || (item.skillCategories ? Object.values(item.skillCategories).flat() : [])

                        return (
                            <div key={internship.id} id={internship.id} className="scroll-mt-24 w-full">
                                <TicketCardEducation
                                    title={internship.title}
                                    description={internship.description}
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
