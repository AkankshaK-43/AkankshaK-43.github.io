document.addEventListener("DOMContentLoaded", () => {

    /*
    --------------------------------
    MOBILE NAVIGATION
    --------------------------------
    */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

    }


    /*
    --------------------------------
    CLOSE MOBILE MENU AFTER CLICK
    --------------------------------
    */

    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });


    /*
    --------------------------------
    SCROLL REVEAL ANIMATION
    --------------------------------
    */

    const sections = document.querySelectorAll(
        ".section, .contact-section"
    );

    sections.forEach((section) => {
        section.classList.add("reveal");
    });


    const observerOptions = {
        threshold: 0.08
    };


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        observerOptions
    );


    sections.forEach((section) => {
        observer.observe(section);
    });


    /*
    --------------------------------
    NAVIGATION ACTIVE STATE
    --------------------------------
    */

    const pageSections = document.querySelectorAll("main section");

    const navObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const id = entry.target.getAttribute("id");

                    navigationLinks.forEach((link) => {

                        link.classList.remove("active-link");

                        if (
                            link.getAttribute("href") === `#${id}`
                        ) {
                            link.classList.add("active-link");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-40% 0px -50% 0px"
        }
    );


    pageSections.forEach((section) => {
        navObserver.observe(section);
    });


});
