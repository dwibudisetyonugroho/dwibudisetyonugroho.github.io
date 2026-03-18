import { Mail, Phone, MapPin } from 'lucide-react'

export const NAVIGATION_ITEMS = [
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Education', href: '#certificates' },
    { name: 'Project', href: '#projects' },
    { name: 'Experience', href: '#internships' },
    { name: 'Contact', href: '#contact' }
]

export const CERTIFICATES = [
    {
        id: 'google-advanced-data-analytics',
        title: 'Google Advanced Data Analytics Professional Certificate',
        issuer: 'Google',
        courseCount: '7',
        certificateType: 'Professional Certificate',
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
        certificateType: 'Professional Certificate',
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
        date: 'November 5, 2024',
        startDate: 'October 2025',
        endDate: 'November 2025',
        completionTime: '2 Months',
        courseCount: '11',
        certificateType: 'Professional Certificate',
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
        certificateType: 'Professional Certificate',
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
    }
]

export const INTERNSHIPS = [
    {
        id: 'idx-partners-intern',
        title: 'Data Scientist Project-Based Internship',
        company: 'ID/X Partners',
        period: 'November 2025 - December 2025',
        startDate: 'November 2025',
        endDate: 'December 2025',
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
        period: 'October 2025 - November 2025',
        startDate: 'October 2025',
        endDate: 'November 2025',
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
    }
]

export const PROJECTS = [
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

// --- Skill Categorization & Aggregation Logic ---

const SKILL_CATEGORY_MAP: Record<string, string> = {
    // Programming & Databases
    'Python': 'Programming & Databases',
    'SQL': 'Programming & Databases',
    'Standard SQL': 'Programming & Databases',
    'PostgreSQL': 'Programming & Databases',
    'Google BigQuery': 'Programming & Databases',
    'BigQuery': 'Programming & Databases',
    'MySQL': 'Programming & Databases',
    'Jupyter Notebooks': 'Programming & Databases',
    'Python Programming': 'Programming & Databases',
    'Python (Pandas, NumPy, Scikit-Learn)': 'Programming & Databases',
    'Python (Pandas, Scikit-Learn)': 'Programming & Databases',
    'Web Scraping': 'Programming & Databases',

    // Data Visualization & BI
    'Data Visualization': 'Data Visualization & BI',
    'Power BI': 'Data Visualization & BI',
    'Power BI (DAX)': 'Data Visualization & BI',
    'Power BI (DAX, Power Query)': 'Data Visualization & BI',
    'Tableau': 'Data Visualization & BI',
    'Tableau Software': 'Data Visualization & BI',
    'Looker Studio': 'Data Visualization & BI',
    'Google Looker Studio': 'Data Visualization & BI',
    'IBM Cognos Analytics': 'Data Visualization & BI',
    'Matplotlib': 'Data Visualization & BI',
    'Seaborn': 'Data Visualization & BI',
    'Plotly': 'Data Visualization & BI',
    'Dashboard': 'Data Visualization & BI',
    'KPI Dashboard Design': 'Data Visualization & BI',
    'Data Presentation': 'Data Visualization & BI',
    'Data Storytelling': 'Data Visualization & BI',
    'Interactive Data Visualization': 'Data Visualization & BI',

    // Data Engineering
    'Data Engineering': 'Data Engineering',
    'ETL': 'Data Engineering',
    'ELT': 'Data Engineering',
    'ETL Pipeline': 'Data Engineering',
    'ELT Architecture': 'Data Engineering',
    'ETL & ELT Pipelines': 'Data Engineering',
    'Data Warehousing': 'Data Engineering',
    'Database Design': 'Data Engineering',
    'Dimensional Modeling': 'Data Engineering',
    'Star Schema Modeling': 'Data Engineering',
    'Star Schema': 'Data Engineering',
    'Data Modeling': 'Data Engineering',
    'Git': 'Data Engineering',
    'GitHub': 'Data Engineering',
    'Git/GitHub': 'Data Engineering',
    'Git/GitHub (Version Control)': 'Data Engineering',
    'Google Cloud Platform': 'Data Engineering',
    'GCP': 'Data Engineering',
    'Microsoft Excel': 'Data Engineering',
    'Excel': 'Data Engineering',
    'Excel Formulas': 'Data Engineering',
    'Advanced Excel': 'Data Engineering',
    'Power Pivot': 'Data Engineering',
    'Macro VBA': 'Data Engineering',
    'VBA': 'Data Engineering',
    'Data Manipulation': 'Data Engineering',
    'Data Wrangling': 'Data Engineering',
    'Data Cleansing': 'Data Engineering',

    // Data Science & Analytics
    'Data Science': 'Data Science & Analytics',
    'Machine Learning': 'Data Science & Analytics',
    'ML modeling': 'Data Science & Analytics',
    'Predictive Modeling': 'Data Science & Analytics',
    'Statistics': 'Data Science & Analytics',
    'Statistical Analysis': 'Data Science & Analytics',
    'Regression Analysis': 'Data Science & Analytics',
    'Linear Regression': 'Data Science & Analytics',
    'Time Series Analysis': 'Data Science & Analytics',
    'Forecasting': 'Data Science & Analytics',
    'Exploratory Data Analysis': 'Data Science & Analytics',
    'Exploratory Data Analysis (EDA)': 'Data Science & Analytics',
    'A/B Testing': 'Data Science & Analytics',
    'Hypothesis Testing': 'Data Science & Analytics',
    'Statistical Hypothesis Testing': 'Data Science & Analytics',
    'Feature Engineering': 'Data Science & Analytics',
    'CRISP-DM': 'Data Science & Analytics',
    'CRISP-DM Lifecycle': 'Data Science & Analytics',
    'Class Imbalance Handling': 'Data Science & Analytics',
    'Model Interpretation': 'Data Science & Analytics'
};

const SKILL_NORMALIZATION_MAP: Record<string, string> = {
    // Programming & Languages
    'Python Programming': 'Python',
    'Python (Pandas, Scikit-Learn)': 'Python',
    'Python (Pandas, NumPy, Scikit-Learn)': 'Python',
    'Standard SQL': 'SQL',
    'Google BigQuery (SQL)': 'SQL',
    'Google BigQuery': 'BigQuery',

    // Visualization & BI
    'Google Looker Studio': 'Looker Studio',
    'Power BI (DAX)': 'Power BI',
    'Power BI (DAX, Power Query)': 'Power BI',
    'Tableau Software': 'Tableau',
    'IBM Cognos Analytics': 'Cognos Analytics',

    // Tools & Engineering
    'Microsoft Excel': 'Excel',
    'Microsoft Excel (Advanced)': 'Excel',
    'Excel Formulas': 'Excel',
    'GitHub': 'Git/GitHub',
    'Git': 'Git/GitHub',
    'Git/GitHub (Version Control)': 'Git/GitHub',

    // Methodologies & Analysis
    'Exploratory Data Analysis (EDA)': 'Exploratory Data Analysis',
    'CRISP-DM Lifecycle': 'CRISP-DM',
    'Statistical Hypothesis Testing': 'Hypothesis Testing',
    'Aggregate Functions': 'Advanced Excel',
    'Conditional IF': 'Advanced Excel',
    'VLOOKUP & HLOOKUP': 'Advanced Excel',
    'INDEX MATCH': 'Advanced Excel',
    'Pivot Tables': 'Advanced Excel',
    'Math Functions': 'Advanced Excel',
    'Date & Time Manipulation': 'Advanced Excel',
    'Logical Functions': 'Advanced Excel',
    'Dynamic Arrays': 'Advanced Excel',
    'Cell Referencing': 'Advanced Excel'
};

const normalizeSkill = (skill: string): string => {
    return SKILL_NORMALIZATION_MAP[skill] || skill;
};

const getCategory = (skill: string): string => {
    const normalized = normalizeSkill(skill);
    // Try exact match on normalized
    if (SKILL_CATEGORY_MAP[normalized]) return SKILL_CATEGORY_MAP[normalized];
    if (SKILL_CATEGORY_MAP[skill]) return SKILL_CATEGORY_MAP[skill];

    // Try partial match
    const lowerSkill = skill.toLowerCase();
    if (lowerSkill.includes('python') || lowerSkill.includes('sql') || lowerSkill.includes('query')) return 'Programming & Databases';
    if (lowerSkill.includes('visualization') || lowerSkill.includes('dashboard') || lowerSkill.includes('bi ') || lowerSkill.includes('power bi') || lowerSkill.includes('tableau') || lowerSkill.includes('looker') || lowerSkill.includes('cognos')) return 'Data Visualization & BI';
    if (lowerSkill.includes('engineering') || lowerSkill.includes('pipeline') || lowerSkill.includes('warehouse') || lowerSkill.includes('excel') || lowerSkill.includes('git') || lowerSkill.includes('cloud') || lowerSkill.includes('model') || lowerSkill.includes('etl')) return 'Data Engineering';
    if (lowerSkill.includes('science') || lowerSkill.includes('learning') || lowerSkill.includes('statistic') || lowerSkill.includes('analysis') || lowerSkill.includes('eda') || lowerSkill.includes('regression')) return 'Data Science & Analytics';

    return 'Data Science & Analytics'; // Default
};

const aggregateSkills = () => {
    const rawSkills: string[] = [];

    // 1. Skills from Education (CERTIFICATES)
    CERTIFICATES.forEach(cert => {
        if (cert.skillCategories) {
            Object.values(cert.skillCategories).flat().forEach(s => rawSkills.push(s));
        } else if (cert.skills) {
            cert.skills.forEach(s => rawSkills.push(s));
        }
    });

    // 2. Technologies and Methodologies from Project Portfolio (PROJECTS)
    PROJECTS.forEach(project => {
        if (project.technologyCategories) {
            Object.values(project.technologyCategories).flat().forEach(s => rawSkills.push(s));
        } else if (project.technologies) {
            project.technologies.forEach(s => rawSkills.push(s));
        }

        if (project.methodologyCategories) {
            Object.values(project.methodologyCategories).flat().forEach(s => rawSkills.push(s));
        } else if (project.methodologies) {
            project.methodologies.forEach(s => rawSkills.push(s));
        }
    });

    // 3. Skills from Professional Experience (INTERNSHIPS)
    INTERNSHIPS.forEach(intern => {
        if (intern.skillCategories) {
            Object.values(intern.skillCategories).flat().forEach(s => rawSkills.push(s));
        } else if (intern.skills) {
            intern.skills.forEach(s => rawSkills.push(s));
        }
    });

    // Unique and organized skills
    const categorized: Record<string, Set<string>> = {
        'Programming & Databases': new Set(),
        'Data Visualization & BI': new Set(),
        'Data Engineering': new Set(),
        'Data Science & Analytics': new Set()
    };

    rawSkills.forEach(skill => {
        const normalized = normalizeSkill(skill);
        const cat = getCategory(normalized);
        if (categorized[cat]) {
            categorized[cat].add(normalized);
        }
    });

    return [
        {
            name: 'Programming & Databases',
            skills: Array.from(categorized['Programming & Databases']).sort(),
            icon: 'Terminal'
        },
        {
            name: 'Data Visualization & BI',
            skills: Array.from(categorized['Data Visualization & BI']).sort(),
            icon: 'BarChart3'
        },
        {
            name: 'Data Engineering',
            skills: Array.from(categorized['Data Engineering']).sort(),
            icon: 'Database'
        },
        {
            name: 'Data Science & Analytics',
            skills: Array.from(categorized['Data Science & Analytics']).sort(),
            icon: 'Cpu'
        }
    ];
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
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['ETL', 'Data Shaping', 'Column Profiling', 'M Language', 'Source Connectors']
    },
    {
        name: 'Python',
        icon: 'Terminal',
        description: 'I architect robust end-to-end data pipelines using Pandas to transform raw, messy datasets into analysis-ready formats through complex cleaning, strategic imputation, and leakage prevention. I leverage Matplotlib and Seaborn in tandem to rapidly prototype high-fidelity visualizations that uncover hidden risk patterns and communicate statistical distributions with clarity.',
        appliedIn: [
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn']
    },
    {
        name: 'Machine Learning & Modeling',
        icon: 'Cpu',
        description: 'I implement strategic machine learning solutions using Scikit-Learn, specializing in diagnosing and resolving severe class imbalance. I perform rigorous feature engineering (One-Hot Encoding, Standard Scaling), conduct model selection between linear and ensemble approaches based on business KPIs, and ensure model integrity by auditing for data leakage.',
        appliedIn: [
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['Scikit-Learn', 'Feature Engineering', 'Model Selection', 'Data Leakage Auditing', 'Imbalance Handling']
    },
    {
        name: 'Microsoft Power BI Desktop',
        icon: 'BarChart3',
        description: 'I design executive-level, multi-page interactive dashboards that translate complex statistical findings into actionable business insights. My capabilities include developing high-impact KPI cards, building geospatial filled maps, and implementing filters for granular portfolio analysis.',
        appliedIn: [
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
            { label: 'IDX Partners', link: '#idx-credit-risk' },
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Version Control', 'Repository Management', 'Clean Commits', 'Reproducibility', 'Markdown Documentation']
    }
];

export const SKILLS = aggregateSkills();


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
