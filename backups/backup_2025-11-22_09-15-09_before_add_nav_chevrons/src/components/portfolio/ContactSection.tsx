import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/data/portfolio-data'

export const ContactSection = () => (
    <section id="contact" className="py-20 bg-[#A3B18A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#1F2A23]">Contact me</h2>
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-lg text-[#1F2A23] mb-12">
                    I'm always interested in discussing new opportunities, challenging projects, or sharing insights about data analytics.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                        <Mail className="h-8 w-8 text-[#1F2A23] mx-auto mb-3" />
                        <p className="text-[#1F2A23]">{CONTACT_INFO.email}</p>
                    </div>
                    <div className="text-center">
                        <Phone className="h-8 w-8 text-[#1F2A23] mx-auto mb-3" />
                        <p className="text-[#1F2A23]">{CONTACT_INFO.phone}</p>
                    </div>
                    <div className="text-center">
                        <MapPin className="h-8 w-8 text-[#1F2A23] mx-auto mb-3" />
                        <p className="text-[#1F2A23]">{CONTACT_INFO.location}</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-[#5A6E58] hover:bg-[#4B5E4A] text-white px-8 py-3 text-base"
                        asChild
                    >
                        <a href={`mailto:${CONTACT_INFO.email}`}>Send Email</a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-[#6B705C] text-[#1F2A23] hover:bg-[#6B705C] hover:text-[#DAD7CD] px-8 py-3 text-base"
                        asChild
                    >
                        <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            LinkedIn Profile
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    </section>
)
