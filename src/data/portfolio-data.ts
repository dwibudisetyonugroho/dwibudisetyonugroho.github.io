import { Mail, Phone, MapPin } from 'lucide-react'

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

export const CERTIFICATIONS = [
    {
        id: 'datacamp-data-analyst-associate',
        title: 'Data Analyst Associate Certification',
        issuer: 'DataCamp',
        officialPageUrl: 'https://www.datacamp.com/certification/data-analyst',
        date: '10 April 2026',
        certificateType: 'DataCamp Certification',
        description: 'Validated by DataCamp through a series of timed technical exams and a real-world practical case study. Demonstrated proficiency in using SQL for complex data management, performing exploratory data analysis (EDA), and applying statistical concepts to drive business decisions.',
        credentialId: 'DAA0010794897681',
        certificateUrl: '/certificates/DataCamp-Data-Analyst-Associate.pdf',
        verificationUrl: 'https://www.datacamp.com/certificate/DAA0010794897681',
        platform: 'DataCamp',
        skillCategories: {
            'Data Analysis': [
                'SQL',
                'Exploratory Data Analysis (EDA)',
                'Statistical Testing',
                'Data Cleaning',
                'Visualization',
                'Business Communication'
            ]
        }
    },
    {
        id: 'datacamp-sql-associate',
        title: 'SQL Associate Certification',
        issuer: 'DataCamp',
        officialPageUrl: 'https://www.datacamp.com/certification/sql-associate',
        date: '10 April 2026',
        certificateType: 'DataCamp Certification',
        description: 'Validated by DataCamp through a rigorous technical exam and a practical business case study. Proficient in end-to-end database workflows, including complex data extraction, joining, and aggregation. Specialized in cleaning and validating raw datasets to ensure data integrity for business reporting and metric calculation.',
        credentialId: 'SQA0014758676777',
        certificateUrl: '/certificates/DataCamp-SQL-Associate.pdf',
        verificationUrl: 'https://www.datacamp.com/certificate/SQA0014758676777',
        platform: 'DataCamp',
        skillCategories: {
            'Technical Skills': [
                'PostgreSQL',
                'Data Cleaning',
                'Joins',
                'Aggregations',
                'Subqueries',
                'CTEs',
                'Window Functions',
                'EDA',
                'Schemas'
            ]
        }
    }
]

export const CERTIFICATES = [
    {
        id: 'datacamp-sql-fundamentals',
        title: 'SQL Fundamentals',
        issuer: 'DataCamp',
        officialPageUrl: 'https://www.datacamp.com/tracks/sql-fundamentals',
        courseCount: '7',
        certificateType: 'DataCamp Education',
        level: 'Intermediate',
        description: 'In this learning journey, I explored intermediate and advanced SQL concepts, primarily using PostgreSQL. I learned how to logically design databases using normalization and dimensional modeling. I mastered complex querying techniques, including advanced joins, set operations, and various subqueries like CTEs. I also gained skills in data manipulation using CASE statements, date/string functions, and arrays. Finally, I learned to write powerful window functions for analytics and manage database views and roles.',
        skills: [
            'PostgreSQL',
            'Database Design',
            'Normalization',
            'Dimensional Modeling',
            'Advanced SQL Joins',
            'Subqueries (CTEs)',
            'Window Functions',
            'Data Manipulation',
            'Database Views & Roles',
            'Relational Databases',
            'SQL Optimization'
        ],
        courses: [
            'Introduction to SQL',
            'Intermediate SQL',
            'Joining Data in SQL',
            'Data Manipulation in SQL',
            'PostgreSQL Summary Stats and Window Functions',
            'Functions for Manipulating Data in PostgreSQL',
            'Database Design'
        ],
        credentialId: 'SQF001',
        certificateUrl: '/certificates/DataCamp-SQL-Fundamentals.pdf',
        verificationUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/60ec5aa270f327e262b276e40d11ca0f341203db?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink',
        platform: 'DataCamp'
    },
    {
        id: 'google-advanced-data-analytics',
        title: 'Google Advanced Data Analytics Professional Certificate',
        issuer: 'Google',
        courseCount: '7',
        certificateType: 'Coursera Education',
        level: 'Advanced',
        description: 'This program included over 200 hours of instruction and hundreds of practice-based assessments, which helped me simulate real-world advanced data analytics scenarios that are critical for success in the workplace. The content was highly interactive and exclusively developed by Google employees with decades of experience in advanced data analytics and data science. Through a mix of videos, assessments, and hands-on labs, I was introduced to advanced data analytics tools and platforms and key technical skills required for an advanced role.',
        skills: [
            'Exploratory Data Analysis',
            'Feature Engineering',
            'Machine Learning',
            'Regression Analysis',
            'Sampling (Statistics)',
            'Statistical Analysis',
            'Statistical Hypothesis Testing',
            'Statistics',
            'Tableau Software',
            'Data Visualization',
            'A/B Testing',
            'Data Analysis',
            'Data Ethics',
            'Data Presentation',
            'Data Science',
            'Data Storytelling',
            'Data Visualization Software',
            'Python Programming'
        ],
        highlights: [
            'Completed 7 rigorous courses focused on advanced analytics and data science',
            'Mastered Python for data science, including machine learning and predictive modeling',
            'Expertise in regression analysis and statistical hypothesis testing',
            'Gained hands-on experience with exploration of large-scale datasets',
            'Prepared for advanced roles in data analytics and entry-level data science'
        ],
        courses: [
            'Foundations of Data Science',
            'Get Started with Python',
            'Go Beyond the Numbers: Translate Data into Insights',
            'The Power of Statistics',
            'Regression Analysis: Simplify Complex Data Relationships',
            'The Nuts and Bolts of Machine Learning',
            'Google Advanced Data Analytics Capstone',
            'Accelerate Your Job Search with AI'
        ],
        credentialId: 'K0Z8291W8QVJ',
        certificateUrl: '/certificates/Google-Advanced-Analytics-Certificate.pdf',
        verificationUrl: 'https://coursera.org/verify/professional-cert/K0Z8291W8QVJ',
        platform: 'Coursera',
        skillCategories: {
            'Data Science & ML': [
                'Data Science',
                'Machine Learning',
                'Feature Engineering',
                'A/B Testing'
            ],
            'Statistical Analysis': [
                'Statistics',
                'Statistical Analysis',
                'Regression Analysis',
                'Sampling (Statistics)',
                'Statistical Hypothesis Testing'
            ],
            'Data Analysis & Ethics': [
                'Data Analysis',
                'Exploratory Data Analysis',
                'Data Ethics'
            ],
            'Visualization & Storytelling': [
                'Data Visualization',
                'Data Visualization Software',
                'Tableau Software',
                'Data Storytelling',
                'Data Presentation'
            ],
            'Data Programming': [
                'Python Programming'
            ]
        }
    },
    {
        id: 'microsoft-power-bi-analyst',
        title: 'Microsoft Power BI Data Analyst Professional Certificate',
        issuer: 'Microsoft',
        courseCount: '8',
        certificateType: 'Coursera Education',
        level: 'Professional',
        description: 'This program was uniquely mapped to key job skills required in a Power BI data analyst role. In each course, I consolidated what I learned by completing a project that simulated a real-world data analysis scenario using Power BI. I also completed a final capstone project where I showcased all my new Power BI data analytical skills by connecting to data sources to transform data into an optimized data model and demonstrating data storytelling through dashboards, reports and charts to solve business challenges and identify new opportunities.',
        skills: [
            'Advanced Analytics',
            'Business Analytics',
            'Business Intelligence',
            'Data Analysis',
            'Data Collection',
            'Data Integrity',
            'Data Manipulation',
            'Data Processing',
            'Data Quality',
            'Data Storage',
            'Data Warehousing',
            'Database Design',
            'Report Writing',
            'SQL',
            'Statistical Reporting',
            'Timelines',
            'Data Visualization',
            'Microsoft Excel',
            'Power BI'
        ],
        highlights: [
            'Mastered end-to-end data analysis using Microsoft Power BI',
            'Learned to prepare and transform data for analysis',
            'Expertise in creating compelling reports and dashboards',
            'Proficient in DAX and Star schema data modeling',
            'Preparation for Microsoft PL-300 Exam'
        ],
        courses: [
            'Preparing Data for Analysis with Microsoft Excel',
            'Harnessing the Power of Data with Power BI',
            'Extract, Transform and Load Data in Power BI',
            'Data Modeling in Power BI',
            'Data Analysis and Visualization with Power BI',
            'Creative Designing in Power BI',
            'Deploy and Maintain Power BI Assets and Capstone project',
            'Microsoft PL-300 Exam Preparation and Practice'
        ],
        credentialId: '21I7H6VKPCH0',
        certificateUrl: '/certificates/Microsoft-Power-BI-Certificate.pdf',
        verificationUrl: 'https://coursera.org/verify/professional-cert/21I7H6VKPCH0',
        platform: 'Coursera',
        skillCategories: {
            'Business Intelligence': [
                'Power BI',
                'Business Intelligence',
                'Business Analytics',
                'Advanced Analytics',
                'Statistical Reporting'
            ],
            'Data Engineering & SQL': [
                'SQL',
                'Database Design',
                'Data Warehousing',
                'Data Storage'
            ],
            'Data Management': [
                'Data Collection',
                'Data Integrity',
                'Data Manipulation',
                'Data Processing',
                'Data Quality'
            ],
            'Reporting & Visualization': [
                'Data Visualization',
                'Report Writing',
                'Timelines'
            ],
            'Tools & Platforms': [
                'Microsoft Excel'
            ]
        }
    },
    {
        id: 'ibm-data-analyst',
        title: 'IBM Data Analyst Professional Certificate',
        issuer: 'IBM',
        date: 'November 5, 2023',
        startDate: 'September 2023',
        endDate: 'October 2023',
        completionTime: '2 Months',
        courseCount: '11',
        certificateType: 'Coursera Education',
        level: 'Professional',
        description: 'I gained hands-on expertise in the full data analysis lifecycle, from wrangling datasets with SQL and Python to visualizing insights in Excel and Cognos. My projects included analyzing vehicle inventory with pivot tables, creating interactive KPI dashboards, and extracting financial data with Pandas. I also built regression models to predict housing prices and developed a dynamic Python dashboard for flight reliability, effectively bridging technical rigor with data storytelling.',
        skills: [
            'Data Analysis',
            'Data Import/Export',
            'Data Manipulation',
            'Data Presentation',
            'Data Storytelling',
            'Data Visualization Software',
            'Data Wrangling',
            'Excel Formulas',
            'Exploratory Data Analysis',
            'IBM Cognos Analytics',
            'Interactive Data Visualization',
            'SQL',
            'Data Visualization',
            'Web Scraping',
            'Dashboard',
            'Generative AI',
            'Microsoft Excel',
            'Plotly',
            'Python Programming'
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
        certificateUrl: '/certificates/IBM-Data-Analyst-Certificate.pdf',
        verificationUrl: 'https://coursera.org/verify/professional-cert/FPC586MR2YCN',
        platform: 'Coursera',
        skillCategories: {
            'Data Science & Programming': [
                'Python Programming',
                'SQL',
                'Plotly',
                'Web Scraping',
                'Generative AI'
            ],
            'Data Analysis': [
                'Data Analysis',
                'Exploratory Data Analysis',
                'Data Wrangling',
                'Data Manipulation',
                'Data Import/Export'
            ],
            'Visualization & Storytelling': [
                'Data Visualization',
                'Data Visualization Software',
                'Interactive Data Visualization',
                'Data Presentation',
                'Data Storytelling',
                'Dashboard'
            ],
            'Tools & Platforms': [
                'Microsoft Excel',
                'Excel Formulas',
                'IBM Cognos Analytics'
            ]
        }
    },
    {
        id: 'myskill-excel',
        title: 'Microsoft Excel Professional Skill Certificate',
        issuer: 'MySkill',
        date: 'September 2025',
        startDate: 'September 2025',
        endDate: 'September 2025',
        completionTime: '1 Month',
        courseCount: '5',
        certificateType: 'MySkill Education',
        level: 'Professional',
        description: 'Completed a Full Learning Path with Professional Skill during 59 hours in Microsoft Excel. This comprehensive program covers Excel from basic to advanced levels, including data manipulation, forecasting, regression, and statistical analysis. Gained hands-on experience with data cleansing, visualization, pivot tables, Power Pivot, VBA macros, and advanced analytical techniques.',
        courses: [
            'Microsoft Excel Basic (Cleanse, Sort, Filter, Format, Aggregate, Conditional IF)',
            'Microsoft Excel Intermediate (Lookup & Index Match, Data Visualization, Pivot Table, Math Function, Date & Time Manipulation, Logical & Information Function, Dynamic Array, Referencing Cell & Text)',
            'Microsoft Excel Advanced (Power Pivot, What-If Analysis, Macro VBA)',
            'Data Manipulation',
            'Forecasting, Regression and Statistic (Time Series Analysis, Linear Regression, Forecasting Time Series, Descriptive Statistic)'
        ],
        credentialId: 'MS-3/9/2025-FWQ2FpFLDH393DhfzzzY',
        verificationUrl: '/certificates/Microsoft-Excel-Certificate.pdf',
        platform: 'MySkill',
        skillCategories: {
            'Excel Fundamentals': [
                'Data Cleansing',
                'Sorting & Filtering',
                'Data Formatting',
                'Aggregate Functions',
                'Conditional IF'
            ],
            'Intermediate Excel': [
                'VLOOKUP & HLOOKUP',
                'INDEX MATCH',
                'Pivot Tables',
                'Data Visualization',
                'Math Functions',
                'Date & Time Manipulation',
                'Logical Functions',
                'Dynamic Arrays',
                'Cell Referencing'
            ],
            'Advanced Excel': [
                'Power Pivot',
                'What-If Analysis',
                'Macro VBA',
                'Automation'
            ],
            'Data Analysis': [
                'Data Manipulation',
                'Time Series Analysis',
                'Linear Regression',
                'Forecasting',
                'Descriptive Statistics'
            ]
        }
    },
    {
        id: 'akprind-bachelor',
        title: 'Bachelor of Engineering in Geological Engineering',
        issuer: 'Institut Sains & Teknologi AKPRIND Yogyakarta',
        gpa: '3.34 / 4.00',
        certificateType: 'Bachelor’s Education',
        level: 'Very Satisfactory',
        description: 'My engineering training provided a rigorous quantitative foundation, emphasizing spatial logic, complex system modeling, and statistical risk assessment. This background honed my ability to decompose ambiguous real-world problems into structured data models, directly translating geological field methodologies into modern data-driven decision-making frameworks.\n**Organizational Leadership**\n• **Human Resource Development Dept**: Designed seminar, workshop, and research to develop soft skills and hard skills for the members.\n• **Media & Publication Dept**: Managed and created graphic design and visual communication strategies for organizational social media.',
        projectTitle: 'Thesis: Geospatial Predictive Modeling for Landslide Vulnerability',
        projectDetails: [
            'Landslide Susceptibility Zonation for Mlati Village and Surroundings, Arjosari District, Pacitan, East Java, Indonesia.',
            '1. Executive Summary',
            'This project involved a comprehensive geospatial analysis to identify and categorize landslide vulnerability zones across an 81 km² study area in Arjosari, Pacitan, East Java. By integrating field-collected primary data with regional secondary data, I developed a predictive risk model based on a modified weighted scoring system. The final output provided actionable insights for disaster mitigation and urban planning, classifying the region into High, Medium, and Low-risk zones.',
            '2. Technical Stack',
            '• Geospatial Analysis: ArcGIS 10.2 (Spatial Join, Weighted Overlay, Buffer Analysis).',
            '• Structural Data Processing: Dips (Stereographic projection for rock stress analysis).',
            '• Statistical Weighting: Microsoft Excel (Multi-criteria scoring and data normalization).',
            '• Visualization: CorelDraw 2017 (Technical cartography and information design).',
            '3. Data Methodology & Feature Engineering',
            'The analysis was driven by 43 unique observation points where multiple environmental variables were recorded. I applied a Multi-Criteria Decision Making (MCDM) approach, assigning specific weights to eight parameters based on their influence on slope stability:',
            'Anthropogenic Factors:',
            '• Settlement Proximity (20% Weight): Evaluated as the most critical factor for risk impact.',
            'Geophysical Parameters:',
            '• Slope Gradient (15%): Ranging from flat (0-8%) to very steep (>20%).',
            '• Soil Condition (15%): Analyzed residual soil thickness and fracture presence.',
            '• Lithology/Rock Type (15%): Assessed the resistance of 4 distinct rock units (Tuff, Sandstone, Breccia, and Dacite).',
            '• Precipitation (15%): Normalized annual rainfall data (~2,154 mm/year).',
            'Environmental & Seismic Factors:',
            '• Vegetation Cover (10%): Differentiated between deep-rooted trees (e.g., teak) and surface-level shrubs.',
            '• Hydrology/Water Management (7%): Identified seepage points and groundwater influence.',
            '• Seismicity (3%): Integrated historical earthquake frequency data from 2011–2020.',
            '4. Key Analytical Insights',
            'Using the Weighted Overlay method, each observation point was assigned a cumulative risk score ranging from 1.00 to 3.00.',
            '• High-Risk Zones (38% of area): Scores between 2.40 – 3.00. These zones were characterized by steep slopes, high fracture density in the rock, and proximity to settlements. Point 33 recorded the highest risk score at 2.67.',
            '• Medium-Risk Zones (47% of area): Scores between 1.70 – 2.39. This represents the dominant landscape, requiring active management like terracing to prevent degradation.',
            '• Low-Risk Zones (15% of area): Scores between 1.00 – 1.69. Identified as the safest locations for future residential development.',
            '5. Data-Driven Recommendations',
            'The project concluded with strategic mitigation advice derived directly from the model\'s results:',
            '• Urban Planning: Prohibit residential construction on slopes with a cumulative weight above 2.40.',
            '• Engineering: Implement specific terracing and drainage systems in "Medium" risk zones to reduce soil saturation during the rainy season.',
            '• Preventative Maintenance: Immediate sealing of ground fractures (identified in field data) to prevent water infiltration and subsequent mass movement.'
        ],
        skillsTitle: 'Relevant Coursework',
        skillCategories: {
            'Coursework': [
                'Geostatistics',
                'Geocomputation & GIS',
                'Research Methodology',
                'Mathematics I & II',
                'Physics',
                'Quality Management'
            ]
        },
        thesisUrl: '/docs/Geological-Engineering-Thesis-Documentation.pdf',
        artifactsUrl: 'https://drive.google.com/drive/folders/1VswUsTWFFfJ0RLlFgaA2LBITgBFC6CMT?usp=sharing'
    }
]

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
        skillCategories: {
            'Data Science & ML': [
                'ML modeling',
                'CRISP-DM',
                'Feature Engineering',
                'Exploratory Data Analysis (EDA)'
            ],
            'Data Programming': [
                'Python (Pandas, Scikit-Learn)'
            ],
            'Business Intelligence': [
                'Power BI (DAX)'
            ],
            'Data Engineering & Tools': [
                'Git/GitHub'
            ]
        },
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
        logo: '/logos/logo-idx-partners.png',
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
        skillCategories: {
            'Business Intelligence': [
                'Looker Studio',
                'KPI Dashboard Design',
                'Strategic Business Analysis'
            ],
            'Data Engineering': [
                'Google BigQuery (SQL)',
                'ETL Pipeline',
                'Star Schema Modeling'
            ],
            'Tools & Version Control': [
                'GitHub'
            ]
        },
        achievements: [
            'Successfully completed the Business Intelligence Analyst PBI Program',
            'Gained practical experience in Business Acumen',
            'Mastered Data Visualization and Excel Data Processing'
        ],
        credentialId: '352967IAPDGIB29122025',
        verificationUrl: '/certificates/Rakamin-Bank-Muamalat-PBI.pdf',
        platform: 'Bank Muamalat',
        link: 'https://app.rakamin.com/virtual-internship-experience/vix-muamalat-bi-analyst',
        logo: '/logos/bank-muamalat-logo.png',
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
        skillCategories: {
            'Business Intelligence': [
                'Looker Studio',
                'Gap Analysis'
            ],
            'Data Engineering & Architecture': [
                'Google BigQuery (SQL)',
                'ELT Architecture',
                'Dimensional Modeling',
                'Tiered Business Logic'
            ],
            'Tools': [
                'GitHub'
            ]
        },
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
        ],
        skillCategories: {
            'Operational Logistics': [
                'Logistics Management',
                'Route Optimization',
                'Predictive Scheduling'
            ],
            'Management & Adaptability': [
                'Crisis Management',
                'Asset Management',
                'Operational Efficiency'
            ]
        }
    }
]

export const PROJECTS = [
    {
        id: 'salifort-motors-retention',
        title: 'Predictive Modeling for Employee Retention: Salifort Motors',
        logo: '',
        type: 'Google Advanced Data Analytics Professional Certificate Capstone Project',
        typeLink: '#google-advanced-data-analytics',
        description: "Led the end-to-end data analytics lifecycle for Salifort Motors to diagnose a critical 23.8% employee turnover crisis by developing a predictive Random Forest model that achieved 99% accuracy and identified key drivers like satisfaction and workload. Translated complex technical findings into actionable strategic recommendations, directly enabling leadership to implement targeted retention interventions in high-risk departments.",
        technologies: [
            'Python (Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn)',
            'Power BI (DAX, Data Modeling)',
            'Git/GitHub'
        ],
        technologyCategories: {
            'Data Science': [
                'Python (Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn)'
            ],
            'Business Intelligence': [
                'Power BI (DAX, Data Modeling)'
            ],
            'Development Tools': [
                'Git/GitHub'
            ]
        },
        methodologies: [
            'Data Cleaning & Standardization',
            'Exploratory Data Analysis (EDA)',
            'One-Hot & Ordinal Encoding',
            'Train-Test Splitting',
            'Logistic Regression Baseline vs. Random Forest Classifier',
            '5-Fold Cross-Validation',
            'Feature Importance Analysis',
            'Bias/Fairness Testing across departments'
        ],
        methodologyCategories: {
            'Data Engineering': [
                'Data Cleaning & Standardization',
                'One-Hot & Ordinal Encoding',
                'Train-Test Splitting'
            ],
            'Analysis & Modeling': [
                'Exploratory Data Analysis (EDA)',
                'Logistic Regression Baseline vs. Random Forest Classifier',
                '5-Fold Cross-Validation',
                'Feature Importance Analysis',
                'Bias/Fairness Testing across departments'
            ]
        },
        deliverables: [
            'Salifort-Motors-Retention GitHub Repository',
            'Interactive Power BI Dashboard',
            'Trained Model Artifacts (salifort_model.pkl)',
            'Comprehensive Executive Report',
            'Strategic Presentation Deck'
        ],
        impact: [
            '**Attrition Prevention**: Achieved 96.36% Recall, successfully identifying nearly all at-risk employees to prevent attrition.',
            '**Key Driver Analysis**: Quantified Satisfaction Level as the dominant driver (34.9% importance), revealing a stark 0.23 gap between stayers and leavers.',
            '**Workload Insights**: Uncovered a 100% churn rate for employees managing 7 concurrent projects, providing immediate evidence for workload caps.'
        ],
        documentationUrl: '/docs/Salifort-Motors-Retention-Documentation.pdf',
        githubUrl: 'https://github.com/dwibudisetyonugroho/Salifort-Motors-Retention'
    },
    {
        id: 'idx-credit-risk',
        title: 'End-to-End Credit Risk Modeling and Dashboarding for ID/X Partners',
        logo: '/logos/logo-idx-partners.png',
        type: 'Data Scientist Virtual Internship',
        description: "Addressing a critical class imbalance in a 466k-row lending dataset, I engineered a leakage-free pipeline and deployed a Balanced Logistic Regression model to proactively identify high-risk borrowers. This end-to-end solution transformed raw data into actionable business intelligence, directly enabling stakeholders to mitigate potential financial losses through data-driven approval strategies.",
        technologies: [
            'Python (Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn)',
            'Power BI (DAX, Power Query)',
            'VS Code',
            'Git/GitHub'
        ],
        technologyCategories: {
            'Data Science': [
                'Python (Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn)'
            ],
            'Business Intelligence': [
                'Power BI (DAX, Power Query)'
            ],
            'Development Tools': [
                'VS Code',
                'Git/GitHub'
            ]
        },
        methodologies: [
            'End-to-End CRISP-DM Lifecycle',
            'Data Leakage Prevention',
            "Class Imbalance Handling (class_weight='balanced')",
            'Feature Engineering (One-Hot Encoding, Scaling)',
            'Model Interpretation (Coefficient Analysis)',
            'Exploratory Data Analysis (EDA)'
        ],
        methodologyCategories: {
            'Lifecycle & EDA': [
                'End-to-End CRISP-DM Lifecycle',
                'Exploratory Data Analysis (EDA)'
            ],
            'Data Engineering': [
                'Data Leakage Prevention',
                'Feature Engineering (One-Hot Encoding, Scaling)'
            ],
            'Modeling & Analysis': [
                "Class Imbalance Handling (class_weight='balanced')",
                'Model Interpretation (Coefficient Analysis)'
            ]
        },
        deliverables: [
            'Production-ready Jupyter Notebook (.ipynb) & Python Script (.py)',
            'Serialized Model Artifacts (.pkl)',
            'Interactive Power BI Dashboard (.pbix)',
            'Executive Infographic Presentation (.pdf/.pptx)',
            'Comprehensive Technical Documentation (README.md)'
        ],
        impact: [
            '**Risk Detection**: Increased Recall from 8% to 66%, successfully catching 2 out of 3 potential defaults that baseline models missed.',
            '**Model Performance**: Achieved a 220% improvement in F1-Score (0.14 → 0.45) by optimizing for the minority class rather than overall accuracy.',
            '**Data Integrity**: Reduced the dataset from 466k to 239k high-confidence records by rigorously removing data leakage and ambiguous "Current" loan statuses.'
        ],
        documentationUrl: '/docs/IDX-Partners-Credit-Risk-Documentation.pdf',
        githubUrl: 'https://github.com/dwibudisetyonugroho/ID-X-Credit-Risk-Prediction'
    },
    {
        id: 'pt-sejahtera-bersama',
        title: 'End-to-End Business Intelligence Pipeline for Revenue Optimization: A Case Study of PT Sejahtera Bersama',
        logo: '/logos/bank-muamalat-logo.png',
        type: 'Business Intelligence Analyst Virtual Internship',
        description: "Acting as a BI Analyst for PT Sejahtera Bersama, I engineered an end-to-end data pipeline in Google BigQuery to resolve fragmented sales data, enabling the identification of a critical \"Volume vs. Value\" paradox between high-frequency eBooks and high-revenue Robots. By visualizing these insights in Looker Studio, I formulated three strategic initiatives—including product bundling and regional replication—projected to unlock over IDR 175M in optimized revenue.",
        technologies: [
            'Google Cloud Platform (BigQuery)',
            'Standard SQL',
            'Google Looker Studio',
            'GitHub (Version Control)'
        ],
        technologyCategories: {
            'Cloud & Data Warehouse': [
                'Google Cloud Platform (BigQuery)'
            ],
            'Query & Tooling': [
                'Standard SQL',
                'GitHub (Version Control)'
            ],
            'Visualization': [
                'Google Looker Studio'
            ]
        },
        methodologies: [
            'Star Schema Data Modeling',
            'ETL Pipeline Development (Extract-Transform-Load)',
            'Primary Key & Relationship Mapping',
            'KPI Dashboard Design',
            'Strategic Business Analysis'
        ],
        methodologyCategories: {
            'Data Engineering': [
                'Star Schema Data Modeling',
                'ETL Pipeline Development (Extract-Transform-Load)',
                'Primary Key & Relationship Mapping'
            ],
            'Business Intelligence': [
                'KPI Dashboard Design',
                'Strategic Business Analysis'
            ]
        },
        deliverables: [
            'Master Sales Data Table (master_sales_data)',
            'Interactive Looker Studio Dashboard',
            'SQL Transformation Scripts',
            'Comprehensive Project Documentation (PDF)',
            'Public GitHub Portfolio Repository'
        ],
        impact: [
            '**Revenue Visibility**: Uncovered IDR 175,475,057 in total sales and 11,654 units across 7 categories, revealing that Robots drive 44.3% of revenue while eBooks drive 32.7% of volume.',
            '**Strategic Opportunity**: Identified a specific cross-sell gap leading to a proposed "Robot Starter Kit" bundle designed to convert high-volume entry customers into high-value hardware buyers.',
            '**Regional Optimization**: Pinpointed Washington DC as a top performer (IDR 5.5M), providing a data-backed blueprint for replicating success in underperforming markets like Houston and Sacramento.'
        ],
        documentationUrl: '/docs/PT-Sejahtera-Bersama-Business-Intelligence-Documentation.pdf',
        githubUrl: 'https://github.com/dwibudisetyonugroho/BI-Project-BankMuamalat'
    },

    {
        id: 'kimia-farma-performance',
        title: 'Kimia Farma Performance Analytics (2020–2023)',
        logo: '/logos/kimia-farma-logo.svg',
        type: 'Big Data Analyst Virtual Internship',
        description: "Architected an end-to-end analytics solution for Indonesia's largest pharmaceutical retailer by engineering a BigQuery ELT pipeline to unify 672K+ transactions and implementing complex tiered margin logic to resolve data silos. This initiative enabled real-time performance monitoring that identified a critical 30% geographic revenue dependency and pinpointed specific operational bottlenecks causing a 0.4-point customer satisfaction gap in key branches.",
        technologies: [
            'Google Cloud Platform (BigQuery)',
            'Standard SQL',
            'Google Looker Studio',
            'GitHub',
            'Data Visualization (Scatter Plots, Choropleth Maps)'
        ],
        technologyCategories: {
            'Cloud & Data Warehouse': [
                'Google Cloud Platform (BigQuery)'
            ],
            'Query & Tooling': [
                'Standard SQL',
                'GitHub'
            ],
            'Visualization': [
                'Google Looker Studio',
                'Data Visualization (Scatter Plots, Choropleth Maps)'
            ]
        },
        methodologies: [
            'ELT Architecture',
            'Dimensional Modeling',
            'DRY Principle (via CTEs)',
            'Tiered Business Logic Implementation',
            'Gap Analysis',
            'KPI Dashboarding'
        ],
        methodologyCategories: {
            'Data Engineering': [
                'ELT Architecture',
                'Dimensional Modeling',
                'DRY Principle (via CTEs)',
                'Tiered Business Logic Implementation'
            ],
            'Analysis & BI': [
                'Gap Analysis',
                'KPI Dashboarding'
            ]
        },
        deliverables: [
            'Unified analysis_table (14 columns)',
            'Interactive Executive Dashboard',
            'Comprehensive Data Dictionary',
            'Technical Design Documentation',
            'Strategic Recommendation Deck'
        ],
        impact: [
            '**Uncovered Geographic Risk**: Identified that Jawa Barat drives 29.5% of total revenue (102B IDR), highlighting a massive concentration risk versus emerging markets.',
            '**Diagnosed Operational Gaps**: Detected branches like Tarakan and Bekasi where high facility ratings (>4.4) masked poor transaction experiences (<3.99), enabling targeted audits.',
            '**Quantified Profitability**: Calculated 98.54B IDR in Nett Profit across 31 provinces using dynamic pricing tiers, revealing a 0.7% revenue stagnation trend in 2023.'
        ],
        documentationUrl: '/docs/Kimia-Farma-Project-Documentation.pdf',
        githubUrl: 'https://github.com/dwibudisetyonugroho/rakamin-kimia-farma-pbi'
    }

]


export const SKILLS_SECTION_DATA = {
    title: "Technical Skill",
    categories: [
        {
            name: 'Programming & Databases',
            icon: 'Terminal'
        },
        {
            name: 'Data Visualization & BI',
            icon: 'BarChart3'
        },
        {
            name: 'Data Engineering',
            icon: 'Database'
        },
        {
            name: 'Data Science & Analytics',
            icon: 'Cpu'
        }
    ]
};

export interface DetailedSkill {
    name: string;
    icon: string;
    description: string;
    appliedIn: {
        label: string;
        link: string;
    }[];
    skills: string[];
}

export const DETAILED_SKILLS: DetailedSkill[] = [
    {
        name: 'Visual Studio Code (VS Code)',
        icon: 'Code2',
        description: 'I utilize VS Code as my central integrated development environment for writing, debugging, and version-controlling code. I leverage extensions for Git integration, Markdown previewing, and Python linting to ensure code quality, while managing virtual environments (venv) and package installations directly via the integrated terminal.',
        appliedIn: [
            { label: 'Salifort Motors', link: '#salifort-motors-retention' },
            { label: 'IDX Partners', link: '#idx-credit-risk' },
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Git Integration', 'Python Debugging', 'Venv Management', 'Terminal', 'Markdown']
    },
    {
        name: 'Jupyter Notebook',
        icon: 'BookOpen',
        description: 'I create reproducible research narratives that combine executable code, rich text explanations (Markdown), and visualizations into a single linear story. I use notebooks for rapid prototyping of Exploratory Data Analysis (EDA) and hypothesis testing, ensuring every step from data loading to model serialization is self-documented for non-technical review.',
        appliedIn: [
            { label: 'Salifort Motors Retention Project', link: '#salifort-motors-retention' },
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['EDA', 'Markdown', 'Data Visualization', 'Hypothesis Testing', 'Prototyping']
    },
    {
        name: 'Google BigQuery',
        icon: 'Cloud',
        description: 'I architect serverless cloud data pipelines on Google BigQuery, ingesting and unifying disparate datasets into unified data table. I optimize performance through partitioning strategies and cost-effective query design, managing both Sandbox environments for prototyping and production-ready datasets.',
        appliedIn: [
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Cloud SQL', 'ETL/ELT', 'Data Partitioning', 'Cost Optimization', 'Big Data']
    },
    {
        name: 'SQL',
        icon: 'Database',
        description: 'I engineer complex transformation logic using SQL, leveraging persistent table creation to build unified "Single Source of Truth" datasets. My proficiency covers tiered conditional logic (CASE WHEN) for dynamic margin calculations, Common Table Expressions (CTEs) for maintainable code, and advanced multi-table joins to seamlessly merge transactional and dimensional data with high accuracy.',
        appliedIn: [
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Complex Joins', 'CTEs', 'Case Logic', 'Data Integrity', 'Query Optimization']
    },
    {
        name: 'Power Query',
        icon: 'Database',
        description: 'I execute efficient in-tool ETL processes, performing advanced data shaping such as dynamic column type conversion, date extraction, and custom column creation without altering source data.',
        appliedIn: [
            { label: 'Salifort Motors Retention Project', link: '#salifort-motors-retention' },
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['ETL', 'Data Shaping', 'Column Profiling', 'M Language', 'Source Connectors']
    },
    {
        name: 'Python',
        icon: 'Terminal',
        description: 'I architect robust end-to-end data pipelines using Pandas to transform raw, messy datasets into analysis-ready formats through complex cleaning, strategic imputation, and leakage prevention. I leverage Matplotlib and Seaborn in tandem to rapidly prototype high-fidelity visualizations that uncover hidden risk patterns and communicate statistical distributions with clarity.',
        appliedIn: [
            { label: 'Salifort Motors Retention Project', link: '#salifort-motors-retention' },
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn']
    },
    {
        name: 'Machine Learning & Modeling',
        icon: 'Cpu',
        description: 'I implement strategic machine learning solutions using Scikit-Learn, specializing in diagnosing and resolving severe class imbalance. I perform rigorous feature engineering (One-Hot Encoding, Standard Scaling), conduct model selection between linear and ensemble approaches based on business KPIs, and ensure model integrity by auditing for data leakage.',
        appliedIn: [
            { label: 'Salifort Motors Retention Project', link: '#salifort-motors-retention' },
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['Scikit-Learn', 'Feature Engineering', 'Model Selection', 'Data Leakage Auditing', 'Imbalance Handling']
    },
    {
        name: 'Microsoft Power BI Desktop',
        icon: 'BarChart3',
        description: 'I design executive-level, multi-page interactive dashboards that translate complex statistical findings into actionable business insights. My capabilities include developing high-impact KPI cards, building geospatial filled maps, and implementing filters for granular portfolio analysis.',
        appliedIn: [
            { label: 'Salifort Motors Retention Project', link: '#salifort-motors-retention' },
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['DAX', 'Power Query', 'Data Modeling', 'KPI Dashboards', 'Geospatial Visualization']
    },
    {
        name: 'Google Looker Studio',
        icon: 'Layout',
        description: 'I build end-to-end business intelligence solutions connecting directly to BigQuery, featuring dynamic filter controls and real-time KPI scorecards with trend lines. My dashboards leverage advanced visualizations—including geo-spatial heatmaps, scatter plots, bar charts, and donut charts for composition—to transform complex data into actionable strategic narratives.',
        appliedIn: [
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['KPI Dashboards', 'BigQuery Integration', 'Data Visualization', 'Filter Controls', 'Geospatial Heatmaps']
    },
    {
        name: 'PowerPoint',
        icon: 'Presentation',
        description: 'I construct strategic executive decks that flow logically from Business Context to Methodology, Technical Implementation, and Strategic Recommendations. I integrate high-resolution dashboard screenshots with callout boxes and annotations to guide audience focus, utilizing corporate branding and clean layouts to deliver board-ready presentations.',
        appliedIn: [
            { label: 'Salifort Motors', link: '#salifort-motors-retention' },
            { label: 'IDX Partners', link: '#idx-credit-risk' },
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Executive Deck Design', 'Data Storytelling', 'Strategic Reporting', 'Corporate Branding', 'Visual Annotations']
    },
    {
        name: 'Technical Documentation',
        icon: 'FileText',
        description: 'I author comprehensive technical artifacts, including detailed Data Dictionaries that define schema granularity and explicit business logic formulas. I craft executive-level README files that serve as professional project landing pages, streamlining business context summarization, tech stacks, key insights, and deployment links to ensure seamless stakeholder handover and long-term project reproducibility.',
        appliedIn: [
            { label: 'Salifort Motors', link: '#salifort-motors-retention' },
            { label: 'IDX Partners', link: '#idx-credit-risk' },
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Data Dictionaries', 'README Optimization', 'Technical Writing', 'Project Handover', 'Reproducibility']
    },
    {
        name: 'Git & GitHub',
        icon: 'GitBranch',
        description: 'I manage professional repository structures with logical hierarchies and comprehensive README.md files. I maintain clean commit histories with meaningful messages, track changes effectively to ensure reproducible deployment and portfolio presentation.',
        appliedIn: [
            { label: 'Salifort Motors', link: '#salifort-motors-retention' },
            { label: 'IDX Partners', link: '#idx-credit-risk' },
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Version Control', 'Repository Management', 'Clean Commits', 'Reproducibility', 'Markdown Documentation']
    }
];


export const SKILLS = []; // Manual override or remove if unused


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
