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
            { label: 'SQL Analytics Pipeline', link: '#sql-analytics-pipeline' },
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
            { label: 'SQL Analytics Pipeline', link: '#sql-analytics-pipeline' },
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
            { label: 'SQL Analytics Pipeline', link: '#sql-analytics-pipeline' },
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
            { label: 'SQL Analytics Pipeline', link: '#sql-analytics-pipeline' },
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
            { label: 'SQL Analytics Pipeline', link: '#sql-analytics-pipeline' },
            { label: 'Salifort Motors Retention Project', link: '#salifort-motors-retention' },
            { label: 'IDX Partners Credit Risk Project', link: '#idx-credit-risk' }
        ],
        skills: ['DAX', 'Power Query', 'Data Modeling', 'KPI Dashboards', 'Geospatial Visualization']
    },
    {
        name: 'Google Looker Studio',
        icon: 'Layout',
        description: 'I build end-to-end business intelligence solutions connecting directly to BigQuery, featuring dynamic filter controls and real-time KPI scorecards with trend lines. My dashboards leverage advanced visualizations, including geo-spatial heatmaps, scatter plots, bar charts, and donut charts for composition, to transform complex data into actionable strategic narratives.',
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
            { label: 'SQL Analytics Pipeline', link: '#sql-analytics-pipeline' },
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
            { label: 'SQL Analytics Pipeline', link: '#sql-analytics-pipeline' },
            { label: 'Salifort Motors', link: '#salifort-motors-retention' },
            { label: 'IDX Partners', link: '#idx-credit-risk' },
            { label: 'Kimia Farma', link: '#kimia-farma-performance' },
            { label: 'Bank Muamalat', link: '#pt-sejahtera-bersama' }
        ],
        skills: ['Version Control', 'Repository Management', 'Clean Commits', 'Reproducibility', 'Markdown Documentation']
    }
];

export const SKILLS: string[] = [];
