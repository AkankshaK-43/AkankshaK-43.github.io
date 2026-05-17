// Loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Typing Animation
const roles = [
    "Data Engineer",
    "Analytics Engineer",
    "Snowflake Specialist",
    "ETL Developer"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");

    currentRole = roles[roleIndex];

    if (isDeleting) {
        typing.textContent = currentRole.substring(0, charIndex--);
    } else {
        typing.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);
}

typeEffect();

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width =
        scrollPercent + "%";
});

// Active Nav Highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Enter a valid email.");
        return;
    }

    alert("Message submitted successfully!");

    this.reset();
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".glass-card");

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();