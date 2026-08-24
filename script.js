// ===================================================
// THEME TOGGLE (Dark/Light Mode)
// ===================================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const THEME_KEY = 'portfolio-theme';

// Initialize theme from localStorage or system preference
function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDark ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
    }
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
});

// Initialize theme on page load
initializeTheme();

// ===================================================
// RESUME DOWNLOAD
// ===================================================

const resumeDownload = document.getElementById('resumeDownload');

resumeDownload.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Create resume content
    const resumeContent = `AKANKSHA KAPOOR
Senior Data Engineer
akanksha.kapoor43@gmail.com
(+91) 9009260462
https://www.linkedin.com/in/-akankshakapoor/

PROFILE SUMMARY
Senior Data Engineer and Data Warehousing Consultant with 5.9+ years of experience delivering cloud-native data
platforms, data warehouses, ELT pipelines, and analytics solutions for U.S. and European clients. Experienced in partnering with
business and technical stakeholders across client discovery, requirements gathering, solution design, project scoping, effort
estimation, and end-to-end delivery using Snowflake, AWS, Python, SQL, and dbt. Combines hands-on data engineering
expertise with technical leadership, stakeholder communication, data governance, and executive reporting to deliver scalable data
solutions and measurable business outcomes.

SKILLS
Consulting & Delivery - Technical Solutioning, Project Scoping & Estimation, Stakeholder Management
Data Engineering - ETL/ELT, Data Modeling, Data Quality, Tasks, Streams, dbt, Dimensional Modeling, Change Data Capture
Cloud - Snowflake, Snowpark, Streams, Tasks, Time Travel, AWS (S3, IAM, Redshift, Lambda), Databricks
Programming & Data - Python, Pandas, NumPy, Snowpark, SQL, Performance Tuning, Data Warehousing
Analytics & BI - Power BI, Looker Studio, Snowsight, Tableau
Dev & Collaboration - Git, GitHub, JIRA, Agile
AI & GenAI - Generative AI, Prompt Engineering, LLM Applications, Snowflake Cortex AI, AI-Assisted Development

EXPERIENCE
MASSIVE ROCKET INDIA, Pune, MH - Senior Data Engineer - July 2024–Present
(Global martech consultancy delivering Data & CRM solutions for growth-stage and enterprise clients across the U.S. and Europe)
● Coordinated delivery across concurrent client initiatives, communicating priorities, dependencies, progress, and technical risks.
● Led client discovery, requirements gathering, project scoping, SOW preparation, and effort estimation for data initiatives.
● Architected and delivered 5+ Snowflake data platforms supporting API, batch, and event-driven ingestion at scale.
● Designed dimensional and domain-based models, improving BI and CRM query performance by 30–50%.
● Optimized queries, schemas, and workloads, reducing Snowflake compute costs by ~40%.
● Built production-grade Python (Snowpark) and SQL pipelines with idempotency and failure recovery, reducing reprocessing by ~40%.
● Implemented CDC using Snowflake Streams and Tasks, improving incremental processing and reporting data freshness.
● Designed data quality and audit frameworks supporting pipeline reliability, governance, and compliance reporting.
● Built 20+ dbt models with testing, source definitions, and lineage to improve governance and analytics delivery.
● Served as data lead, managing work allocation, code reviews, technical decisions, and mentoring team members.
● Built 10+ executive-facing dashboards translating complex data into actionable business and operational insights.
● Developed CDP-ready data layers powering Braze for customer segmentation, lifecycle campaigns, and activation.
● Used GenAI tools and Snowflake Cortex for SQL optimization, debugging, root-cause analysis, and documentation.

CAPGEMINI INDIA, Pune, MH - Associate Consultant - November 2020–July 2024
● Partnered with U.S.-based clients and stakeholders to translate business and reporting requirements into technical solutions.
● Designed and optimized Snowflake fact and dimension models, improving analytics query performance by 30–40%.
● Leveraged SnowSQL and Snowflake Time Travel for validation, rollback, and recovery, reducing data downtime by 30%+.
● Delivered Tableau and Power BI dashboards consumed by business and leadership teams
● Supported Agile delivery across multiple projects and stakeholders to consistently meet tight SLAs.
● Developed Python (Pandas, NumPy) scripts to perform automated data analysis and segmentation on large lending datasets.
● Built data schemas, ETL mappings, and SOPs to support client communication and knowledge transfer across distributed teams.

PROJECTS
● Omnichannel Customer 360 & Activation Engine – Architected a Star Schema-based Snowflake Customer 360 platform
consolidating fragmented API data into a Golden Record for 700K+ users. Engineered a Python Reverse ETL pipeline to sync
refined segments into Braze, automating real-time customer activation
Tools: Snowflake (Star Schema), dbt, Python, REST APIs, Braze.

● Data Transformation & Reporting for Hospitality Martech - Automated cross-client revenue and engagement reporting by
integrating Snowflake with REST APIs, saving ~1,000 manual working hours and ensuring consistent, standardized metrics.
Delivered executive-facing dashboards with optimized SQL transformations, improving reporting accuracy and decision-making speed.
Tools: Snowflake, SQL, Python, Looker Studio, Braze REST API

● AI-Powered Data Catalog & Documentation Framework - Built a Snowflake Cortex AI-powered metadata and documentation
framework that automatically generated business-friendly documentation for data warehouse objects, data models, metrics, and
lineage information, reducing manual documentation effort by 80% and improving governance and data discoverability.
Tools: Snowflake Cortex AI, Snowflake, SQL, Python, Information Schema, Data Lineage

EDUCATION
● B.Tech (Information Technology) Jun'16–Jul'20
Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, MP

CERTIFICATIONS
● AWS Certified Data Engineer - Associate - By Amazon Web Services (March '26)
● SnowPro Core Certificate - By Snowflake (September '25)
● Braze Certified Technical Architect - By Braze (April '25)
● Braze Certified Developer - By Braze (November '24)
● Data Analysis with Python - by IBM Developer Skills Network (May '23)

ACHIEVEMENTS
● RISING STAR AWARD - Received Rising Star Award in Q1 in the Year 2021 (Capgemini)
● STAR OF THE MONTH - Received Star of the Month Award for performance in Q4 - 2022 (Capgemini)
● HERO OF THE MONTH - Received Hero of the Month Award for performance in Q4 - 2025 (Massive Rocket)`;

    // Create blob and download
    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Akanksha_Kapoor_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});

// ===================================================
// MOBILE NAVIGATION
// ===================================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================================
// SCROLL REVEAL ANIMATIONS
// ===================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animations to elements on page load
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll(
        'section, .project-card, .expertise-category, .certification-item, .approach-step'
    );

    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
});

// ===================================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ===================================================

const sections = document.querySelectorAll('section[id]');

const updateActiveNav = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        link.style.fontWeight = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--color-accent)';
            link.style.fontWeight = '600';
        } else {
            link.style.color = 'var(--color-text-secondary)';
            link.style.fontWeight = '500';
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// ===================================================
// SMOOTH SCROLL BEHAVIOR (Enhancement)
// ===================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
