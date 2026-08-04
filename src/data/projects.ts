export const PROJECTS = [
    {
        id: 'sql-analytics-pipeline',
        title: 'Dual-Phase SQL Analytics Pipeline: B2B Merchant Acquisition & B2C Customer Retention',
        logo: '',
        type: 'Personal Project',
        description: "Engineered a dual-phase SQL analytics pipeline to bridge B2B merchant acquisition inefficiencies with B2C customer retention leaks, directly optimizing marketing capital allocation and product lifecycle strategy. By offloading complex window functions to the database tier, I delivered a lag-free executive dashboard that identified high-yield traffic sources and quantified critical churn risks.",
        technologies: [
            'T-SQL (SQL Server)',
            'Python (Pandas, Seaborn, PyODBC)',
            'Power BI (DAX, Conditional Formatting)',
            'VS Code',
            'Git/GitHub'
        ],
        methodologies: [
            'CRISP-DM Framework',
            'Relational Data Modeling (Star Schema)',
            'Cohort Analysis',
            'Funnel Velocity Tracking'
        ],
        deliverables: [
            '5 Idempotent SQL Scripts',
            'Interactive Power BI Dashboard (.pbix)',
            'Executive PDF Report',
            'Jupyter Notebook Visualizations',
            'Comprehensive Markdown Documentation'
        ],
        impact: [
            '**High-Yield Channel Discovery**: Uncovered an "unknown" traffic channel yielding $194.49 revenue per MQL with a 16.29% conversion rate, significantly outperforming paid social.',
            '**Retention Crisis Diagnostics**: Identified a systemic "leaky bucket" crisis where Month-1 customer retention consistently dropped below 1% across all 2017 cohorts.',
            '**Marketing Capital Optimization**: Exposed "social" media as a capital drain with a dismal 5.56% conversion rate and a slow 61-day sales cycle.'
        ],
        githubUrl: 'https://github.com/dwibudisetyonugroho/b2b2c-marketplace-analytics',
        documentationUrl: '/docs/SQL-Analytics-Pipeline-Documentation.pdf'
    },
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
        logo: '/logos/logo-idx-partners.webp',
        type: 'Data Scientist Virtual Internship',
        description: "Addressing a critical class imbalance in a 466k-row lending dataset, I engineered a leakage-free pipeline and deployed a Balanced Logistic Regression model to proactively identify high-risk borrowers. This end-to-end solution transformed raw data into actionable business intelligence, directly enabling stakeholders to mitigate potential financial losses through data-driven approval strategies.",
        technologies: [
            'Python (Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn)',
            'Power BI (DAX, Power Query)',
            'VS Code',
            'Git/GitHub'
        ],
        methodologies: [
            'End-to-End CRISP-DM Lifecycle',
            'Data Leakage Prevention',
            "Class Imbalance Handling (class_weight='balanced')",
            'Feature Engineering (One-Hot Encoding, Scaling)',
            'Model Interpretation (Coefficient Analysis)',
            'Exploratory Data Analysis (EDA)'
        ],
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
        logo: '/logos/bank-muamalat-logo.webp',
        type: 'Business Intelligence Analyst Virtual Internship',
        description: "Acting as a BI Analyst for PT Sejahtera Bersama, I engineered an end-to-end data pipeline in Google BigQuery to resolve fragmented sales data, enabling the identification of a critical \"Volume vs. Value\" paradox between high-frequency eBooks and high-revenue Robots. By visualizing these insights in Looker Studio, I formulated three strategic initiatives (including product bundling and regional replication) projected to unlock over IDR 175M in optimized revenue.",
        technologies: [
            'Google Cloud Platform (BigQuery)',
            'Standard SQL',
            'Google Looker Studio',
            'GitHub (Version Control)'
        ],
        methodologies: [
            'Star Schema Data Modeling',
            'ETL Pipeline Development (Extract-Transform-Load)',
            'Primary Key & Relationship Mapping',
            'KPI Dashboard Design',
            'Strategic Business Analysis'
        ],
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
        title: 'Kimia Farma Performance Analytics (2020-2023)',
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
        methodologies: [
            'ELT Architecture',
            'Dimensional Modeling',
            'DRY Principle (via CTEs)',
            'Tiered Business Logic Implementation',
            'Gap Analysis',
            'KPI Dashboarding'
        ],
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
