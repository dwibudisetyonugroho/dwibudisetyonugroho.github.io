'use client'

import { CERTIFICATIONS } from '@/data/certificates'
import { TicketCardEducation } from './TicketCardEducation'

const getCertificationProps = (cert: typeof CERTIFICATIONS[number]) => {
    switch (cert.id) {
        case 'datacamp-data-analyst-associate':
            return {
                logoSrc: '/logos/datacamp-sql-logo.png',
                logoAlt: 'DataCamp Logo',
                verifyText: 'Verify on DataCamp',
                certificateText: 'View Certificate',
                verifyColor: '#023047',
                verifyHoverColor: '#05608c',
                officialUrl: cert.officialPageUrl || 'https://www.datacamp.com/certification/data-analyst',
                officialLogoSrc: '/logos/datacamp-sql-logo.png',
                officialLogoAlt: 'DataCamp Logo',
                officialLogoStyle: { height: '20px' },
                headerLogoStyle: { height: '30px' },
                certificateUrl: cert.certificateUrl,
                verificationUrl: cert.verificationUrl,
                credentialId: cert.credentialId,
                issuer: cert.issuer,
            }
        case 'datacamp-sql-associate':
            return {
                logoSrc: '/logos/datacamp-sql-logo.png',
                logoAlt: 'DataCamp Logo',
                verifyText: 'Verify on DataCamp',
                certificateText: 'View Certificate',
                verifyColor: '#023047',
                verifyHoverColor: '#05608c',
                officialUrl: cert.officialPageUrl || 'https://www.datacamp.com/certification/sql-associate',
                officialLogoSrc: '/logos/datacamp-sql-logo.png',
                officialLogoAlt: 'DataCamp Logo',
                officialLogoStyle: { height: '20px' },
                headerLogoStyle: { height: '30px' },
                certificateUrl: cert.certificateUrl,
                verificationUrl: cert.verificationUrl,
                credentialId: cert.credentialId,
                issuer: cert.issuer,
            }
        default:
            return {
                logoSrc: '/logos/datacamp-sql-logo.png',
                logoAlt: 'Certification Logo',
                verifyText: 'Verify Certification',
                officialUrl: cert.officialPageUrl,
                certificateUrl: cert.certificateUrl,
                verificationUrl: cert.verificationUrl,
                credentialId: cert.credentialId,
                issuer: cert.issuer,
            }
    }
}

export const CertificationsSection = () => {
    return (
        <section id="certifications" className="py-16 text-foreground bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Certification</h2>
                <div className="max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
                    {CERTIFICATIONS.map(cert => {
                        const extraProps = getCertificationProps(cert)
                        const tags = (cert.skills || ((cert as any).skillCategories 
                            ? Object.values((cert as any).skillCategories).flat() 
                            : [])) as string[];

                        return (
                            <div key={cert.id} id={cert.id} className="scroll-mt-24 w-full">
                                <TicketCardEducation
                                    title={cert.title}
                                    description={cert.description}
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
