import { Mail, Phone, MapPin } from 'lucide-react'

export const NAVIGATION_ITEMS = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internships', href: '#internships' },
    { name: 'Contact', href: '#contact' }
]

export const CERTIFICATES = [
    {
        id: 'ibm-data-analyst',
        title: 'IBM Data Analyst Professional Certificate',
        issuer: 'IBM',
        date: 'Nov 5, 2024',
        startDate: 'Oct 2024',
        endDate: 'Nov 2024',
        completionTime: '2 Months',
        courseCount: '11',
        certificateType: 'Professional Certificate',
        level: 'Professional',
        description: 'This IBM Professional Certificate is earned after successfully completing 11 courses on various topics in Data Analytics. The learner understands the core principles of data analysis and has worked hands-on with a variety of data sources, project scenarios, and data analysis tools, including Excel, SQL, Relational Databases, Python, Jupyter Notebooks, and Cognos Analytics, gaining practical experience with data manipulation, data analysis, and data visualization.',
        skills: [
            'Data Analysis', 'Python Programming', 'SQL', 'Data Visualization',
            'Microsoft Excel', 'Dashboard Creation', 'Statistical Analysis',
            'Predictive Modelling', 'Exploratory Data Analysis', 'Business Intelligence',
            'Data Cleansing', 'Data Wrangling', 'Pandas', 'Numpy', 'Matplotlib',
            'Seaborn', 'Folium', 'Cognos Analytics', 'Pivot Tables', 'Hypothesis Testing',
            'Generative AI'
        ],
        highlights: [
            'Completed 11 rigorous courses covering the entire data analysis lifecycle',
            'Built comprehensive portfolio projects demonstrating end-to-end analysis',
            'Mastered Python for Data Science, SQL databases, and visualization tools',
            'Analyzed real-world datasets across multiple industries and business scenarios',
            'Gained hands-on experience with industry-standard tools and best practices'
        ],
        courses: [
            'Introduction to Data Analytics',
            'Excel Basics for Data Analysis',
            'Data Visualization and Dashboards with Excel and Cognos',
            'Python for Data Science, AI & Development',
            'Python Project for Data Science',
            'Databases and SQL for Data Science with Python',
            'Data Analysis with Python',
            'Data Visualization with Python',
            'IBM Data Analyst Capstone Project',
            'Generative AI: Enhance your Data Analytics Career',
            'Data Analyst Career Guide and Interview Preparation'
        ],
        credentialId: 'FPC586MR2YCN',
        verificationUrl: 'https://coursera.org/verify/professional-cert/FPC586MR2YCN',
        platform: 'Coursera',
        skillCategories: {
            'Core Data Analysis': [
                'Data Analysis',
                'EDA (Exploratory Data Analysis)',
                'Data Storytelling',
                'Data Presentation'
            ],
            'Programming & Query Languages': [
                'Python Programming',
                'SQL'
            ],
            'Data Engineering': [
                'Data Wrangling',
                'Data Transformation',
                'ETL (Extract, Transform, Load)',
                'Data Import/Export'
            ],
            'Visualization & Dashboards': [
                'Data Visualization',
                'Statistical Visualization',
                'Interactive Data Visualization',
                'Dashboard',
                'Plotly',
                'Data Visualization Software'
            ],
            'Business Intelligence & Tools': [
                'IBM Cognos Analytics',
                'Microsoft Excel',
                'Excel Formulas'
            ],
            'Emerging Technologies': [
                'Generative AI'
            ],
            'Professional Development': [
                'Professional Networking'
            ]
        }
    }
]

export const INTERNSHIPS = [
    {
        id: 'techstart-intern',
        title: 'Data Analytics Intern',
        company: 'TechStart Inc.',
        period: 'Summer 2021',
        description: 'Assisted in developing customer segmentation models and created automated dashboards for sales tracking.',
        achievements: [
            'Built 5 interactive dashboards',
            'Analyzed 100K+ customer records',
            'Presented findings to executive team'
        ]
    },
    {
        id: 'datacorp-intern',
        title: 'Business Intelligence Intern',
        company: 'DataCorp Solutions',
        period: 'Fall 2020',
        description: 'Supported the BI team in creating reports and performing ad-hoc analysis for various business units.',
        achievements: [
            'Created 20+ weekly reports',
            'Reduced reporting time by 30%',
            'Trained 10+ team members'
        ]
    },
    {
        id: 'university-research',
        title: 'Research Assistant - Data Analytics',
        company: 'University Research Lab',
        period: 'Spring 2020',
        description: 'Conducted statistical analysis for academic research projects on consumer behavior patterns.',
        achievements: [
            'Co-authored 2 research papers',
            'Managed datasets of 50K+ records',
            'Presented at 3 conferences'
        ]
    }
]

export const PROJECTS = [
    {
        id: 'customer-segmentation',
        title: 'Customer Segmentation Model',
        description: 'Machine learning model that segments customers based on behavior, increasing targeted marketing effectiveness by 35%.',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Tableau'],
        impact: '35% increase in marketing ROI'
    },
    {
        id: 'sales-dashboard',
        title: 'Real-Time Sales Dashboard',
        description: 'Interactive dashboard providing real-time insights into sales performance across multiple regions.',
        technologies: ['SQL', 'Power BI', 'DAX', 'Azure'],
        impact: '50% faster decision making'
    },
    {
        id: 'predictive-maintenance',
        title: 'Predictive Maintenance System',
        description: 'IoT-based predictive maintenance system reducing equipment downtime by 40% through advanced analytics.',
        technologies: ['Python', 'TensorFlow', 'Time Series Analysis', 'AWS'],
        impact: '40% reduction in downtime'
    }
]

export const SKILLS = {
    'Data Analysis Tools': ['IBM Cognos Analytics', 'Data Analysis', 'Data Visualization', 'Data Wrangling', 'Plotly', 'Exploratory Data Analysis', 'Dashboard', 'Microsoft Excel', 'Data Cleansing'],
    'Programming & Querying': ['Python Programming', 'SQL'],
    'Data Management': ['Data Storytelling', 'Big Data', 'Data Transformation']
}

export const CONTACT_INFO = {
    email: 'setyonugrohodwibudi@gmail.com',
    phone: '+62 851 8611 1556',
    location: 'East Java, Indonesia',
    linkedin: 'https://www.linkedin.com/'
}

export const getDropdownItems = (sectionName: string) => {
    switch (sectionName) {
        case 'Projects':
            return PROJECTS.map(p => ({ label: p.title, href: `#${p.id}` }))
        case 'Certificates':
            return CERTIFICATES.map(c => ({ label: c.title, href: `#${c.id}` }))
        case 'Internships':
            return INTERNSHIPS.map(i => ({ label: i.title, href: `#${i.id}` }))
        case 'Skills':
            return Object.keys(SKILLS).map(category => ({
                label: category,
                href: `#skills-${category.toLowerCase().replace(/\s+/g, '-')}`
            }))
        default:
            return []
    }
}
