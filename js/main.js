// Language translations
const translations = {
    en: {
        home: "Home",
        services: {
            title: "Our Services"
        },
        about: "About",
        projects: "Projects",
        partners: "Partners",
        contact: {
            title: "Contact",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit"
        },
        blog: "News",
        careers: "Careers",
        hero: {
            title: "From Earth to Prosperity: Elevating Mining Operations Worldwide",
            subtitle: "Leading mining contractor in East Africa, delivering excellence across six nations",
            cta: "Get Started"
        },
        about: {
            title: "About Espérence Mining",
            text1: "Leading mining contractor in East Africa, Espérence Mining SARL operates in six major countries: DRC, Uganda, Burundi, Tanzania, Rwanda, and Kenya.",
            text2: "Our expertise extends from mining logistics to specialized recruitment, fuel supply, and strategic partnerships."
        },
        projects: {
            title: "Our Projects",
            project1: {
                title: "DRC Mining Operations",
                description: "Major extraction project with cutting-edge equipment"
            },
            project2: {
                title: "Tanzania Logistics",
                description: "Transportation and management of mining equipment"
            }
        },
        partners: {
            title: "Our Partners and Clients"
        },
        blog: {
            title: "Mining News",
            readMore: "Read More"
        },
        careers: {
            title: "Join Our Team",
            position: "Senior Mining Engineer",
            description: "We are looking for an experienced engineer to oversee our operations...",
            apply: "Apply Now"
        }
    },
    fr: {
        home: "Accueil",
        services: {
            title: "Nos Services"
        },
        about: "À Propos",
        projects: "Réalisations",
        partners: "Partenaires",
        contact: {
            title: "Contact",
            name: "Nom",
            email: "Email",
            message: "Message",
            submit: "Envoyer"
        },
        blog: "Actualités",
        careers: "Recrutement",
        hero: {
            title: "De la Terre à la Prospérité : Élever les Opérations Minières Mondiales",
            subtitle: "Leader des entrepreneurs miniers en Afrique de l'Est, offrant l'excellence dans six pays",
            cta: "Commencer"
        },
        about: {
            title: "À Propos d'Espérence Mining",
            text1: "Leader dans le secteur minier en Afrique de l'Est, Espérence Mining SARL opère dans six pays majeurs : RDC, Ouganda, Burundi, Tanzanie, Rwanda et Kenya.",
            text2: "Notre expertise s'étend de la logistique minière au recrutement spécialisé, en passant par l'approvisionnement en carburant et les partenariats stratégiques."
        },
        projects: {
            title: "Nos Réalisations",
            project1: {
                title: "Exploitation Minière RDC",
                description: "Projet majeur d'extraction avec équipement de pointe"
            },
            project2: {
                title: "Logistique Tanzanie",
                description: "Transport et gestion d'équipements miniers"
            }
        },
        partners: {
            title: "Nos Partenaires et Clients"
        },
        blog: {
            title: "Actualités Minières",
            readMore: "Lire la suite"
        },
        careers: {
            title: "Rejoignez Notre Équipe",
            position: "Ingénieur Minier Senior",
            description: "Nous recherchons un ingénieur expérimenté pour superviser nos opérations...",
            apply: "Postuler"
        }
    }
};

let currentLang = 'fr';

// Toggle language function
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    const langBtn = document.querySelector('.lang-switch');
    langBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
    updateContent();
}

// Update content based on selected language
function updateContent() {
    // Update navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        const translation = translations[currentLang][key];
        if (typeof translation === 'string') {
            link.textContent = translation;
        } else if (translation && translation.title) {
            link.textContent = translation.title;
        }
    });

    // Update hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const h1 = heroContent.querySelector('h1');
        const p = heroContent.querySelector('p');
        const cta = heroContent.querySelector('.cta-button');
        
        if (h1) h1.textContent = translations[currentLang].hero.title;
        if (p) p.textContent = translations[currentLang].hero.subtitle;
        if (cta) cta.textContent = translations[currentLang].hero.cta;
    }

    // Update about section
    document.querySelector('#about h2').textContent = translations[currentLang].about.title;
    const aboutTexts = document.querySelectorAll('#about .about-text p');
    aboutTexts[0].textContent = translations[currentLang].about.text1;
    aboutTexts[1].textContent = translations[currentLang].about.text2;

    // Update projects section
    document.querySelector('#projects h2').textContent = translations[currentLang].projects.title;
    const projectCards = document.querySelectorAll('.project-card');
    projectCards[0].querySelector('h3').textContent = translations[currentLang].projects.project1.title;
    projectCards[0].querySelector('p').textContent = translations[currentLang].projects.project1.description;
    projectCards[1].querySelector('h3').textContent = translations[currentLang].projects.project2.title;
    projectCards[1].querySelector('p').textContent = translations[currentLang].projects.project2.description;

    // Update partners section
    document.querySelector('#partners h2').textContent = translations[currentLang].partners.title;

    // Update blog section
    document.querySelector('#blog h2').textContent = translations[currentLang].blog.title;
    document.querySelectorAll('.read-more').forEach(link => {
        link.textContent = translations[currentLang].blog.readMore;
    });

    // Update careers section
    document.querySelector('#careers h2').textContent = translations[currentLang].careers.title;
    const jobCard = document.querySelector('.job-card');
    jobCard.querySelector('h3').textContent = translations[currentLang].careers.position;
    jobCard.querySelector('p').textContent = translations[currentLang].careers.description;
    jobCard.querySelector('.apply-btn').textContent = translations[currentLang].careers.apply;

    // Update services section
    document.querySelector('#services h2').textContent = translations[currentLang].services.title;
    
    // Update contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const title = contactSection.querySelector('h2');
        const form = contactSection.querySelector('#contact-form');
        
        if (title) title.textContent = translations[currentLang].contact.title;
        if (form) {
            form.querySelector('input[type="text"]').placeholder = translations[currentLang].contact.name;
            form.querySelector('input[type="email"]').placeholder = translations[currentLang].contact.email;
            form.querySelector('textarea').placeholder = translations[currentLang].contact.message;
            form.querySelector('button').textContent = translations[currentLang].contact.submit;
        }
    }
}

// Mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert(currentLang === 'en' ? 'Thank you for your message. We will contact you soon!' : 'Merci pour votre message. Nous vous contacterons bientôt !');
});

// Fonction pour animer les compteurs
function animateCounter(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Observer pour démarrer l'animation quand la section est visible
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                animateCounter(counter, 0, target, 2000, suffix);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialiser l'observer au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Animation des sections au scroll
function initSectionAnimations() {
    const sections = document.querySelectorAll('.section-animate');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialisation des animations au chargement
document.addEventListener('DOMContentLoaded', function() {
    initSectionAnimations();
});
