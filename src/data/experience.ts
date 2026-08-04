import { PROJECTS } from './projects'
import { CERTIFICATES, CERTIFICATIONS } from './certificates'
import { DETAILED_SKILLS } from './skills'

export const NAVIGATION_ITEMS = [
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Certification', href: '#certifications' },
    { name: 'Education', href: '#certificates' },
    { name: 'Project', href: '#projects' },
    { name: 'Experience', href: '#internships' },
    { name: 'Contact', href: '#contact' }
]

export const ABOUT_DATA = {
    name: "Dwi Budi Setyonugroho",
    summary: "A Data Analyst with a passion for finding the stories within data to help businesses solve problems and reach their goals more effectively.",
    bio: [
        "Hi, I'm **Dwi Budi Setyonugroho**. My journey began with an **Engineering degree**, where my thesis on risk assessment taught me early on how to approach data analysis. As my interest in the data science field grew, I pursued the **IBM Data Analyst Professional Certificate** to master the fundamentals of analytics, followed by the **Microsoft Power BI Data Analyst Professional Certificate** to deepen my expertise in data visualization. Finally, I completed the **Google Advanced Data Analytics Professional Certificate**, where I dove deeper into statistics and machine learning to build predictive models.",
        "Subsequently, I joined **virtual internships** with three companies, applying those skills to solve complex challenges in credit risk modeling and revenue optimization. Currently, I work as a **private driver**, which has further honed my communication, crisis management, time management, and adaptability soft skills. I would be honored to bring my blend of knowledge to your team."
    ]
}

export const INTERNSHIPS = [
    {
        id: 'idx-partners-intern',
        title: 'Data Scientist Project-Based Internship',
        company: 'ID/X Partners',
        period: 'November 2023 - December 2023',
        startDate: 'November 2023',
        endDate: 'December 2023',
        completionTime: '1 Month',
        certificateType: 'Project-Based Virtual Internship',
        level: 'Excellent',
        description: 'This project-based internship focuses on the core concept of the end-to-end data science lifecycle, ranging from initial business understanding and data collection to automated model deployment. Participants leverage a technology stack including Python, R, and SQL to master specific skills in exploratory data analysis, feature engineering, machine learning modeling, and version control with Git.',
        skills: [
            'Python (Pandas, Scikit-Learn)',
            'Power BI (DAX)',
            'ML modeling',
            'CRISP-DM',
            'Feature Engineering',
            'Exploratory Data Analysis (EDA)',
            'Git/GitHub'
        ],
        achievements: [
            'Achieved Excellent rating as student',
            'Completed Data Scientist PBI Program',
            'Mastered Big Data and Deep Learning concepts'
        ],
        credentialId: '352967IAPDGII1122025',
        verificationUrl: '/certificates/Rakamin-IDX-PBI.pdf',
        projectLink: '#idx-credit-risk',
        platform: 'ID/X Partners',
        link: 'https://www.rakamin.com/virtual-internship-experience/id-x-partners-data-scientist-pbi',
        logo: '/logos/logo-idx-partners.webp',
        logoAlt: 'ID/X Partners Logo'
    },
    {
        id: 'bank-muamalat-intern',
        title: 'Business Intelligence Analyst Project-Based Internship',
        company: 'Bank Muamalat',
        period: 'August 2023 - September 2023',
        certificateType: 'Project-Based Virtual Internship',
        level: 'Qualified',
        description: 'This project-based internship provides Business Intelligence training focusing on technology stacks like SQL (PostgreSQL and BigQuery), Microsoft Excel, and Looker Studio. It cultivates specific skills in database management, advanced data manipulation (such as CTEs and joins), and data storytelling through interactive dashboards for banking portfolio analysis.',
        skills: [
            'Google BigQuery (SQL)',
            'Looker Studio',
            'Star Schema Modeling',
            'ETL Pipeline',
            'Strategic Business Analysis',
            'KPI Dashboard Design',
            'GitHub'
        ],
        achievements: [
            'Successfully completed the Business Intelligence Analyst PBI Program',
            'Gained practical experience in Business Acumen',
            'Mastered Data Visualization and Excel Data Processing'
        ],
        credentialId: '352967IAPDGIB29122025',
        verificationUrl: '/certificates/Rakamin-Bank-Muamalat-PBI.pdf',
        platform: 'Bank Muamalat',
        link: 'https://app.rakamin.com/virtual-internship-experience/vix-muamalat-bi-analyst',
        logo: '/logos/bank-muamalat-logo.webp',
        logoAlt: 'Bank Muamalat Logo',
        projectLink: '#pt-sejahtera-bersama'
    },
    {
        id: 'kimia-farma-intern',
        title: 'Big Data Analytics Project-Based Internship',
        company: 'Kimia Farma',
        period: 'October 2023 - November 2023',
        startDate: 'October 2023',
        endDate: 'November 2023',
        completionTime: '1 Month',
        certificateType: 'Project-Based Virtual Internship',
        level: 'Excellent',
        description: 'This project-based internship provides hands-on experience in SQL querying, Google BigQuery data warehousing, and Looker Studio visualization to support analytical business needs. Participants acquire specific skills in ETL pipeline design, exploratory statistical analysis, and data storytelling to transform complex big data into actionable insights.',
        skills: [
            'Google BigQuery (SQL)',
            'Looker Studio',
            'ELT Architecture',
            'Dimensional Modeling',
            'Tiered Business Logic',
            'Gap Analysis',
            'GitHub'
        ],
        achievements: [
            'Achieved Excellent rating with 89.05 average score',
            'Completed Big Data Analytics project',
            'Mastered Big Data Processing and Scheduling'
        ],
        credentialId: '352967IAPDGIK3112025',
        verificationUrl: '/certificates/Rakamin-Kimia-Farma-PBI.pdf',
        projectLink: '#kimia-farma-performance',
        platform: 'Kimia Farma',
        logo: '/logos/kimia-farma-logo.svg',
        logoAlt: 'Kimia Farma Logo'
    },
    {
        id: 'private-driver',
        title: 'Private Driver',
        company: 'Private Client / Self-Employed',
        certificateType: 'Professional Experience',
        description: 'Managed end-to-end operational logistics for private clients, ensuring seamless execution of daily schedules across diverse geographic regions. Operated as the primary point of contact for time-sensitive travel requirements, leveraging real-time data analysis to optimize routes and mitigate delays.\n**Key Achievements & Responsibilities**\n• **Operational Efficiency**: Designed and executed dynamic route optimization strategies using real-time traffic data and predictive scheduling, ensuring 100% punctuality for critical business appointments.\n• **Crisis Management & Adaptability**: Successfully navigated complex logistical challenges (e.g., vehicle maintenance emergencies, sudden schedule pivots, and adverse weather conditions), maintaining operational continuity without disrupting client workflows.\n• **Asset Management**: Maintained strict adherence to safety protocols and vehicle performance metrics, conducting proactive preventative maintenance to ensure zero downtime and optimal vehicle reliability.',
        skills: [
            'Logistics Management',
            'Route Optimization',
            'Predictive Scheduling',
            'Crisis Management',
            'Asset Management',
            'Operational Efficiency'
        ]
    }
]

export const CONTACT_INFO = {
    email: 'setyonugrohodwibudi@gmail.com',
    phone: '+62 851 8611 1556',
    location: 'East Java, Indonesia',
    linkedin: 'https://www.linkedin.com/in/dwibudisetyonugroho/',
    github: 'https://github.com/dwibudisetyonugroho',
    instagram: 'https://www.instagram.com/budinugroho_'
}

export const getDropdownItems = (sectionName: string) => {
    switch (sectionName) {
        case 'Project':
            return PROJECTS.map(p => ({ label: p.title, href: `#${p.id}` }))
        case 'Personal Project':
        case 'Personal Projects':
            return PROJECTS.filter(p => p.type?.toLowerCase().includes('personal')).map(p => ({ label: p.title, href: `#${p.id}` }))
        case 'Capstone Project':
        case 'Capstone Projects':
            return PROJECTS.filter(p => p.type?.toLowerCase().includes('capstone') || p.type?.toLowerCase().includes('certificate')).map(p => ({ label: p.title, href: `#${p.id}` }))
        case 'Virtual Internship Project':
        case 'Virtual Internship':
            return PROJECTS.filter(p => p.type?.toLowerCase().includes('internship')).map(p => ({ label: p.title, href: `#${p.id}` }))
        case 'Education':
            return CERTIFICATES.map(c => ({ label: c.title, href: `#${c.id}` }))
        case 'Certification':
            return CERTIFICATIONS.map(c => ({ label: c.title, href: `#${c.id}` }))
        case 'Experience':
            return INTERNSHIPS.map(i => ({ label: i.title, href: `#${i.id}` }))
        case 'Skill':
            return DETAILED_SKILLS.map(skill => ({
                label: skill.name,
                href: `#skills-${skill.name.toLowerCase().replace(/\s+/g, '-')}`
            }))
        default:
            return []
    }
}
