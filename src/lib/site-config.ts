import { ABOUT_DATA, CONTACT_INFO } from '@/data'

export const SITE_CONFIG = {
  name: ABOUT_DATA.name,
  title: 'Dwi Budi Setyonugroho | Data Analyst Portfolio',
  description: ABOUT_DATA.summary,
  primaryDomain: 'https://budinugroho.com',
  fallbackDomain: 'https://dwibudisetyonugroho.github.io',
  
  get url() {
    if (typeof window !== 'undefined') {
      return window.location.origin
    }
    return process.env.NEXT_PUBLIC_SITE_URL || this.primaryDomain
  },

  author: ABOUT_DATA.name,
  jobTitle: 'Data Analyst',
  social: {
    linkedin: CONTACT_INFO.linkedin,
    github: CONTACT_INFO.github,
    instagram: CONTACT_INFO.instagram,
    email: CONTACT_INFO.email,
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.jobTitle,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.primaryDomain,
    sameAs: [
      SITE_CONFIG.primaryDomain,
      SITE_CONFIG.fallbackDomain,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.instagram,
    ],
    knowsAbout: [
      'Data Analytics',
      'Python',
      'PostgreSQL',
      'SQL',
      'Power BI',
      'Excel',
      'Predictive Modeling',
      'Business Intelligence',
      'Exploratory Data Analysis'
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Gadjah Mada University',
      }
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'IBM Data Analyst Professional Certificate',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Microsoft Power BI Data Analyst Professional Certificate',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Google Advanced Data Analytics Professional Certificate',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'DataCamp Data Analyst Associate Certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'DataCamp SQL Associate Certification',
      }
    ]
  }
}
