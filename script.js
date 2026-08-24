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
    
    // Path to the PDF file in assets folder
    const resumeUrl = 'assets/Akanksha_Kapoor_Resume.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Akanksha_Kapoor_Resume.pdf';
    link.style.display = 'none';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
