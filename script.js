"use strict";

/* =========================================
   SMART OFFICE & CV SOLUTIONS
   Main JavaScript
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("open");
        menuToggle.classList.toggle("active");

    });

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navbar.classList.remove("open");
            menuToggle.classList.remove("active");

        });

    });

}


/* =========================================
   STICKY HEADER
========================================= */

const header = document.getElementById("header");

function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   CONTACT / SERVICE FORM
   SEND DETAILS TO WHATSAPP
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


/*
    WhatsApp Number

    Old:
    +919170688077

    New:
    +919918684894

    WhatsApp URL ke liye + sign nahi chahiye.
*/

const WHATSAPP_NUMBER = "919918684894";


/*
    Prevent multiple submissions
*/

let formSubmitted = false;


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            /*
             * IMPORTANT:
             * Browser ka default form submission
             * completely stop karo.
             *
             * Isse page reload nahi hoga.
             */

            event.preventDefault();

            event.stopPropagation();


            /* =====================================
               PREVENT DOUBLE SUBMISSION
            ===================================== */

            if (formSubmitted) {

                return;

            }


            /* =====================================
               GET FORM ELEMENTS
            ===================================== */

            const nameInput =
                document.getElementById("name");

            const phoneInput =
                document.getElementById("phone");

            const serviceInput =
                document.getElementById("service");

            const messageInput =
                document.getElementById("message");


            /* =====================================
               GET FORM VALUES
            ===================================== */

            const name =
                nameInput?.value.trim() || "";

            const phone =
                phoneInput?.value.trim() || "";

            const message =
                messageInput?.value.trim() || "";


            /* =====================================
               VALIDATE NAME
            ===================================== */

            if (!name) {

                showFormMessage(
                    "Please enter your name.",
                    "error"
                );

                nameInput?.focus();

                return;

            }


            /* =====================================
               VALIDATE PHONE
            ===================================== */

            if (!phone) {

                showFormMessage(
                    "Please enter your phone number.",
                    "error"
                );

                phoneInput?.focus();

                return;

            }


            /* =====================================
               VALIDATE SERVICE
            ===================================== */

            if (
                !serviceInput ||
                !serviceInput.value
            ) {

                showFormMessage(
                    "Please select a service.",
                    "error"
                );

                serviceInput?.focus();

                return;

            }


            /* =====================================
               PHONE VALIDATION
            ===================================== */

            const phoneDigits =
                phone.replace(/\D/g, "");


            if (phoneDigits.length < 7) {

                showFormMessage(
                    "Please enter a valid phone number.",
                    "error"
                );

                phoneInput?.focus();

                return;

            }


            /* =====================================
               GET SELECTED SERVICE NAME
            ===================================== */

            let serviceName =
                "Not specified";


            if (
                serviceInput &&
                serviceInput.selectedIndex >= 0
            ) {

                const selectedOption =
                    serviceInput.options[
                        serviceInput.selectedIndex
                    ];


                serviceName =
                    selectedOption?.text.trim() ||
                    serviceInput.value;

            }


            /* =====================================
               CREATE WHATSAPP MESSAGE
            ===================================== */

            const whatsappMessage =
`Hello,

I would like to request a service from your business.

━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${name}

Phone: ${phone}

Service Required: ${serviceName}

Requirement / Message:
${message || "Not mentioned"}

━━━━━━━━━━━━━━━━━━

Please contact me regarding this requirement.

Thank you.`;


            /* =====================================
               CREATE WHATSAPP URL
            ===================================== */

            const whatsappURL =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;


            /* =====================================
               GET SUBMIT BUTTON
            ===================================== */

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            /* =====================================
               BUTTON LOADING
            ===================================== */

            if (submitButton) {

                submitButton.classList.add("loading");

                submitButton.disabled = true;

            }


            /* =====================================
               SHOW SUCCESS MESSAGE
            ===================================== */

            showFormMessage(
                "Opening WhatsApp...",
                "success"
            );


            /* =====================================
               MARK AS SUBMITTED
            ===================================== */

            formSubmitted = true;


            /* =====================================
               OPEN WHATSAPP
            ===================================== */

            setTimeout(() => {

                /*
                 * Same tab par WhatsApp open hoga.
                 *
                 * Mobile:
                 * WhatsApp App / WhatsApp Web
                 *
                 * Desktop:
                 * WhatsApp Web / Desktop
                 */

                window.location.href =
                    whatsappURL;

            }, 300);

        }
    );

}


/* =========================================
   FORM MESSAGE HELPER
========================================= */

function showFormMessage(
    message,
    type = "success"
) {

    if (!formMessage) return;


    formMessage.textContent =
        message;


    if (type === "error") {

        formMessage.style.color =
            "#f87171";

    } else {

        formMessage.style.color =
            "#86efac";

    }

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        `
        .service-card,
        .process-step,
        .project-card,
        .feature,
        .contact-form-wrapper,
        .tool-card,
        .cv-card,
        .pricing-card,
        .business-card
        `
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(
            element
        );

    });

}


/* =========================================
   PHONE NUMBER INPUT
========================================= */

const phoneInput =
    document.getElementById("phone");


if (phoneInput) {

    phoneInput.addEventListener(
        "input",
        () => {

            /*
             * Sirf valid phone characters allow karo.
             */

            phoneInput.value =
                phoneInput.value.replace(
                    /[^\d+\-\s()]/g,
                    ""
                );

        }
    );

}


/* =========================================
   ESCAPE KEY
   CLOSE MOBILE MENU
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (navbar) {

                navbar.classList.remove(
                    "open"
                );

            }


            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );

            }

        }

    }
);


/* =========================================
   PREVENT EMPTY ANCHOR JUMP
========================================= */

document
    .querySelectorAll('a[href="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

            }
        );

    });


/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const headerHeight =
                    header?.offsetHeight || 80;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =========================================
   CONSOLE BRAND MESSAGE
========================================= */

console.log(
    "%cSmart Office & CV Solutions",
    "color:#38bdf8;font-size:20px;font-weight:bold;"
);


console.log(
    "%cCV • Excel • Word • Business Analysis • Documents • Digital Services",
    "color:#94a3b8;font-size:12px;"
);
