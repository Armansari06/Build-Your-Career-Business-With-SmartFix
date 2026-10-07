"use strict";

/* =========================================
   SMARTFIX BUSINESS & CAREER SOLUTIONS
   FINAL JAVASCRIPT
========================================= */


/* =========================================
   WHATSAPP CONFIGURATION
========================================= */

const WHATSAPP_NUMBER = "919918684894";


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("open");
        menuToggle.classList.toggle("active");

    });

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

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

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================
   SHOW FORM MESSAGE
========================================= */

function showMessage(element, message, type) {

    if (!element) return;

    element.textContent = message;

    if (type === "error") {

        element.style.color = "#f87171";

    } else {

        element.style.color = "#86efac";

    }

}


/* =========================================
   OPEN WHATSAPP
========================================= */

function openWhatsApp(message) {

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodedMessage;


    /*
       IMPORTANT:
       Direct location redirect is used instead
       of window.open().

       This works better on mobile browsers,
       Android, iPhone and desktop browsers.
    */

    window.location.href = whatsappURL;

}


/* =========================================
   CONTACT FORM
   SEND TO WHATSAPP
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();
        event.stopPropagation();


        /* =====================================
           GET INPUTS
        ===================================== */

        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");
        const serviceInput = document.getElementById("service");
        const messageInput = document.getElementById("message");


        /* =====================================
           GET VALUES
        ===================================== */

        const name =
            nameInput ? nameInput.value.trim() : "";

        const phone =
            phoneInput ? phoneInput.value.trim() : "";

        const service =
            serviceInput ? serviceInput.value.trim() : "";

        const message =
            messageInput ? messageInput.value.trim() : "";


        /* =====================================
           VALIDATION
        ===================================== */

        if (!name) {

            showMessage(
                formMessage,
                "Please enter your name.",
                "error"
            );

            if (nameInput) nameInput.focus();

            return;

        }


        if (!phone) {

            showMessage(
                formMessage,
                "Please enter your phone number.",
                "error"
            );

            if (phoneInput) phoneInput.focus();

            return;

        }


        if (!service) {

            showMessage(
                formMessage,
                "Please select a service.",
                "error"
            );

            if (serviceInput) serviceInput.focus();

            return;

        }


        const phoneDigits = phone.replace(/\D/g, "");

        if (phoneDigits.length < 7) {

            showMessage(
                formMessage,
                "Please enter a valid phone number.",
                "error"
            );

            if (phoneInput) phoneInput.focus();

            return;

        }


        /* =====================================
           CREATE CONTACT WHATSAPP MESSAGE
        ===================================== */

        const whatsappMessage =
`Hello Imran,

I would like to enquire about a service from SmartFix Business & Career Solutions.

━━━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━

Name: ${name}

Phone: ${phone}

Service Required: ${service}

Requirement:
${message || "Not mentioned"}

━━━━━━━━━━━━━━━━━━━━

Please contact me regarding my requirement.

Thank you.`;


        /* =====================================
           BUTTON
        ===================================== */

        const submitButton =
            contactForm.querySelector('button[type="submit"]');


        if (submitButton) {

            submitButton.disabled = true;

            submitButton.textContent =
                "Opening WhatsApp...";

        }


        showMessage(
            formMessage,
            "Opening WhatsApp...",
            "success"
        );


        /*
           Direct redirect.
           No setTimeout.
           No window.open.
        */

        openWhatsApp(whatsappMessage);

    });

}


/* =========================================
   CV BUILDER FORM
   SEND COMPLETE CV REQUEST TO WHATSAPP
========================================= */

const cvForm = document.getElementById("cvForm");
const cvFormMessage = document.getElementById("cvFormMessage");


if (cvForm) {

    cvForm.addEventListener("submit", function (event) {

        event.preventDefault();
        event.stopPropagation();


        /* =====================================
           GET ALL CV INPUTS
        ===================================== */

        const cvName =
            document.getElementById("cvName");

        const cvPhone =
            document.getElementById("cvPhone");

        const cvEmail =
            document.getElementById("cvEmail");

        const cvLocation =
            document.getElementById("cvLocation");

        const cvJob =
            document.getElementById("cvJob");

        const cvExperience =
            document.getElementById("cvExperience");

        const cvEducation =
            document.getElementById("cvEducation");

        const cvWork =
            document.getElementById("cvWork");

        const cvSkills =
            document.getElementById("cvSkills");

        const cvLanguages =
            document.getElementById("cvLanguages");

        const cvCertifications =
            document.getElementById("cvCertifications");

        const cvStyle =
            document.getElementById("cvStyle");

        const cvUrgency =
            document.getElementById("cvUrgency");

        const cvMessage =
            document.getElementById("cvMessage");


        /* =====================================
           GET VALUES SAFELY
        ===================================== */

        const name =
            cvName ? cvName.value.trim() : "";

        const phone =
            cvPhone ? cvPhone.value.trim() : "";

        const email =
            cvEmail ? cvEmail.value.trim() : "";

        const location =
            cvLocation ? cvLocation.value.trim() : "";

        const job =
            cvJob ? cvJob.value.trim() : "";

        const experience =
            cvExperience ? cvExperience.value.trim() : "";

        const education =
            cvEducation ? cvEducation.value.trim() : "";

        const work =
            cvWork ? cvWork.value.trim() : "";

        const skills =
            cvSkills ? cvSkills.value.trim() : "";

        const languages =
            cvLanguages ? cvLanguages.value.trim() : "";

        const certifications =
            cvCertifications ? cvCertifications.value.trim() : "";

        const style =
            cvStyle ? cvStyle.value.trim() : "";

        const urgency =
            cvUrgency ? cvUrgency.value.trim() : "";

        const additionalMessage =
            cvMessage ? cvMessage.value.trim() : "";


        /* =====================================
           REQUIRED VALIDATION
        ===================================== */

        if (!name) {

            showMessage(
                cvFormMessage,
                "Please enter your full name.",
                "error"
            );

            if (cvName) cvName.focus();

            return;

        }


        if (!phone) {

            showMessage(
                cvFormMessage,
                "Please enter your phone number.",
                "error"
            );

            if (cvPhone) cvPhone.focus();

            return;

        }


        if (!job) {

            showMessage(
                cvFormMessage,
                "Please enter your target job / position.",
                "error"
            );

            if (cvJob) cvJob.focus();

            return;

        }


        const phoneDigits =
            phone.replace(/\D/g, "");


        if (phoneDigits.length < 7) {

            showMessage(
                cvFormMessage,
                "Please enter a valid phone number.",
                "error"
            );

            if (cvPhone) cvPhone.focus();

            return;

        }


        /* =====================================
           CREATE CV WHATSAPP MESSAGE
        ===================================== */

        const cvWhatsappMessage =
`Hello Imran,

I would like to request a Professional CV / Resume from SmartFix Business & Career Solutions.

━━━━━━━━━━━━━━━━━━━━
CV REQUEST DETAILS
━━━━━━━━━━━━━━━━━━━━

PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━

Full Name:
${name}

Phone:
${phone}

Email:
${email || "Not provided"}

City / Location:
${location || "Not provided"}


CAREER DETAILS
━━━━━━━━━━━━━━━━━━━━

Target Job / Position:
${job}

Experience:
${experience || "Not specified"}


EDUCATION
━━━━━━━━━━━━━━━━━━━━

${education || "Not provided"}


WORK EXPERIENCE
━━━━━━━━━━━━━━━━━━━━

${work || "Not provided"}


SKILLS
━━━━━━━━━━━━━━━━━━━━

${skills || "Not provided"}


LANGUAGES
━━━━━━━━━━━━━━━━━━━━

${languages || "Not provided"}


CERTIFICATIONS / ADDITIONAL DETAILS
━━━━━━━━━━━━━━━━━━━━

${certifications || "Not provided"}


CV PREFERENCE
━━━━━━━━━━━━━━━━━━━━

CV Style:
${style || "Not specified"}

Delivery Requirement:
${urgency || "Not specified"}


ADDITIONAL MESSAGE
━━━━━━━━━━━━━━━━━━━━

${additionalMessage || "No additional message"}

━━━━━━━━━━━━━━━━━━━━

Please review my details and let me know the next steps, pricing and delivery time.

Thank you.`;


        /* =====================================
           GET SUBMIT BUTTON
        ===================================== */

        const cvSubmitButton =
            cvForm.querySelector('button[type="submit"]');


        if (cvSubmitButton) {

            cvSubmitButton.disabled = true;

            cvSubmitButton.textContent =
                "Opening WhatsApp...";

        }


        /* =====================================
           SHOW MESSAGE
        ===================================== */

        showMessage(
            cvFormMessage,
            "Opening WhatsApp...",
            "success"
        );


        /* =====================================
           OPEN WHATSAPP DIRECTLY
        ===================================== */

        openWhatsApp(cvWhatsappMessage);

    });

}


/* =========================================
   PHONE INPUT - CONTACT
========================================= */

const phoneInput =
    document.getElementById("phone");

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value =
            this.value.replace(
                /[^\d+\-\s()]/g,
                ""
            );

    });

}


/* =========================================
   PHONE INPUT - CV
========================================= */

const cvPhoneInput =
    document.getElementById("cvPhone");

if (cvPhoneInput) {

    cvPhoneInput.addEventListener("input", function () {

        this.value =
            this.value.replace(
                /[^\d+\-\s()]/g,
                ""
            );

    });

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (navbar) {

            navbar.classList.remove("open");

        }

        if (menuToggle) {

            menuToggle.classList.remove("active");

        }

    }

});


/* =========================================
   PREVENT EMPTY ANCHOR
========================================= */

document
    .querySelectorAll('a[href="#"]')
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });


/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll('a[href^="#"]:not([href="#"])')
    .forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 80;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });


/* =========================================
   SCROLL REVEAL
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
        .business-card,
        .analysis-card,
        .analysis-feature
        `
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(element);

    });

}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%cSmartFix Business & Career Solutions",
    "color:#38bdf8;font-size:20px;font-weight:bold;"
);

console.log(
    "%cCV • Excel • Word • Business Analysis • Documents • Digital Services",
    "color:#94a3b8;font-size:12px;"
);
