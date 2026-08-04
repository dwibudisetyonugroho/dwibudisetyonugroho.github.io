'use client'

import { CERTIFICATES } from '@/data/certificates'
import { TicketCardEducation } from './TicketCardEducation'

const getCertProps = (cert: typeof CERTIFICATES[number]) => {
    switch (cert.id) {
        case 'datacamp-sql-fundamentals':
            return {
                logoSrc: '/logos/datacamp-sql-logo.png',
                logoAlt: 'DataCamp SQL Logo',
                verifyText: 'Verify on DataCamp',
                verifyColor: '#023047',
                verifyHoverColor: '#05608c',
                officialUrl: cert.officialPageUrl || 'https://www.datacamp.com/tracks/sql-fundamentals',
                officialLogoStyle: { height: '20px' },
                headerLogoStyle: { height: '30px' },
            }
        case 'google-advanced-data-analytics':
            return {
                logoSrc: '/logos/google-logo.png',
                logoAlt: 'Google Logo',
                verifyText: 'Verify on Coursera',
                verifyColor: '#023047',
                verifyHoverColor: '#05608c',
                officialUrl: 'https://www.coursera.org/professional-certificates/google-advanced-data-analytics',
                officialLogoSrc: '/logos/coursera-logo.png',
                officialLogoAlt: 'Coursera Logo',
                officialLogoStyle: { height: '19px' },
                headerLogoStyle: { height: '36px' },
            }
        case 'microsoft-power-bi-analyst':
            return {
                logoSrc: '/logos/microsoft-logo.png',
                logoAlt: 'Microsoft Logo',
                verifyText: 'Verify on Coursera',
                verifyColor: '#023047',
                verifyHoverColor: '#05608c',
                officialUrl: 'https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst',
                officialLogoSrc: '/logos/coursera-logo.png',
                officialLogoAlt: 'Coursera Logo',
                officialLogoStyle: { height: '19px' },
                headerLogoStyle: { height: '32px' },
            }
        case 'ibm-data-analyst':
            return {
                logoSrc: '/logos/ibm-logo.png',
                logoAlt: 'IBM Logo',
                verifyText: 'Verify on Coursera',
                verifyColor: '#023047',
                verifyHoverColor: '#05608c',
                officialUrl: 'https://www.coursera.org/professional-certificates/ibm-data-analyst',
                officialLogoSrc: '/logos/coursera-logo.png',
                officialLogoAlt: 'Coursera Logo',
                officialLogoStyle: { height: '19px' },
                headerLogoStyle: { height: '30px' },
            }
        case 'myskill-excel':
            return {
                logoSrc: '/logos/my-skill-logo.png',
                logoAlt: 'MySkill Logo',
                certificateText: 'View Certificate',
                officialUrl: 'https://myskill.id/learning-path/microsoft-excel-word-powerpoint',
                officialLogoSrc: '/logos/my-skill-logo.png',
                officialLogoAlt: 'MySkill Logo',
                officialLogoStyle: { height: '23px' },
                headerLogoStyle: { height: '36px' },
            }
        case 'akprind-bachelor':
            return {
                logoSrc: '/logos/akprind-logo.png',
                logoAlt: 'AKPRIND Logo',
                certificateText: 'View Thesis Documentation',
                verifyText: 'Thesis Artifacts (Drive)',
                verifyColor: '#023047',
                verifyHoverColor: '#05608c',
                officialUrl: 'https://akprind.ac.id',
                officialLogoSrc: '/logos/akprind-logo.png',
                officialLogoAlt: 'AKPRIND Logo',
                officialLogoStyle: { height: '26px' },
                headerLogoStyle: { height: '42px' },
                certificateUrl: '/docs/Geological-Engineering-Thesis-Documentation.pdf',
                verificationUrl: cert.artifactsUrl,
                gpa: cert.gpa,
            }
        default:
            return {}
    }
}

export const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-16 text-foreground bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Education</h2>
                <div className="max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
                    {CERTIFICATES.map(cert => {
                        const extraProps = getCertProps(cert)
                        return (
                            <div key={cert.id} id={cert.id} className="scroll-mt-24 w-full">
                                <TicketCardEducation
                                    title={cert.title}
                                    issuer={cert.issuer}
                                    description={cert.description}
                                    tags={cert.skills || ((cert as any).skillCategories ? (Object.values((cert as any).skillCategories).flat() as string[]) : [])}
                                    courses={cert.courses}
                                    courseCountText={cert.courses ? `Course Curriculum (${cert.courses.length} Courses)` : undefined}
                                    projectTitle={(cert as any).projectTitle}
                                    projectDetails={(cert as any).projectDetails}
                                    certificateUrl={cert.certificateUrl}
                                    verificationUrl={cert.verificationUrl}
                                    credentialId={cert.credentialId}
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
