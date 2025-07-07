// ===== LANGUAGE TRANSLATION SYSTEM =====
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.services': 'Services',
        'nav.testimonials': 'Témoignages',
        'nav.contact': 'Contact',
        'nav.book': 'Réserver',
        
        // Hero Section
        'hero.title': 'Votre Chemin vers le Bien-être',
        'hero.subtitle': 'Thérapies Alternatives & Préventives',
        'hero.description': 'Découvrez la sagesse ancestrale de la guérison holistique à travers nos services thérapeutiques soigneusement sélectionnés, conçus pour restaurer l\'équilibre, soulager les tensions et nourrir votre bien-être.',
        'hero.btn_services': 'Explorez Nos Services',
        'hero.btn_consultation': 'Réservez une Consultation',
        
        // About Section
        'about.title': 'À Propos d\'Edenitude',
        'about.subtitle': 'Un sanctuaire pour la guérison holistique et le bien-être spirituel',
        'about.wisdom_title': 'Embrassant la Sagesse Ancestrale',
        'about.description1': 'Chez Edenitude, nous croyons au pouvoir des pratiques de guérison ancestrales combinées aux approches modernes du bien-être. Notre mission est de vous guider dans un voyage transformateur vers une santé optimale et la paix intérieure.',
        'about.description2': 'Chaque séance de thérapie est soigneusement conçue pour traiter non seulement l\'inconfort physique, mais aussi le bien-être émotionnel et spirituel, créant un équilibre harmonieux qui favorise un bien-être durable.',
        'about.feature1': 'Soins Personnalisés',
        'about.feature2': 'Guérison Naturelle',
        'about.feature3': 'Équilibre Spirituel',
        
        // Services Section
        'services.title': 'Nos Services de Guérison',
        'services.subtitle': 'Traitements thérapeutiques conçus pour restaurer votre équilibre naturel',
        'services.thai.title': 'Massage Thaï',
        'services.thai.price': 'À partir de 65€',
        'services.thai.description': 'Techniques douces pour soulager la douleur, améliorer la mobilité et restaurer l\'équilibre naturel de votre corps.',
        'services.thai.benefit1': 'Soulagement de la Douleur',
        'services.thai.benefit2': 'Mobilité Améliorée',
        'services.thai.benefit3': 'Rééquilibrage Corporel',
        'services.aromatherapy.title': 'Massage Aromathérapie',
        'services.aromatherapy.price': 'À partir de 70€',
        'services.aromatherapy.description': 'Thérapie manuelle puissante ciblant les tensions musculaires profondes et les restrictions fasciales pour une relaxation profonde.',
        'services.aromatherapy.benefit1': 'Relaxation Profonde',
        'services.aromatherapy.benefit2': 'Libération des Tensions',
        'services.aromatherapy.benefit3': 'Travail Fascial',
        'services.energy.title': 'Guérison Énergétique',
        'services.energy.price': 'À partir de 55€',
        'services.energy.description': 'Équilibrage des chakras et alignement énergétique pour restaurer l\'harmonie entre l\'esprit, le corps et l\'âme.',
        'services.energy.benefit1': 'Équilibre Énergétique',
        'services.energy.benefit2': 'Alignement des Chakras',
        'services.energy.benefit3': 'Bien-être Spirituel',
        'services.learn_more': 'En Savoir Plus',
        
        // Testimonials Section
        'testimonials.title': 'Expériences Clients',
        'testimonials.subtitle': 'Écoutez ceux qui ont trouvé leur chemin vers le bien-être',
        'testimonials.testimonial1.text': 'Le massage thaï chez Edenitude a complètement transformé mon bien-être. Le toucher intuitif du thérapeute et les techniques ancestrales ont fait fondre des années de tension et de stress.',
        'testimonials.testimonial1.author': 'Sarah M.',
        'testimonials.testimonial1.role': 'Passionnée de Bien-être',
        
        // Contact Section
        'contact.title': 'Commencez Votre Voyage',
        'contact.subtitle': 'Prêt à découvrir votre chemin vers le bien-être ? Contactez-nous dès aujourd\'hui',
        'contact.visit.title': 'Visitez Notre Sanctuaire',
        'contact.visit.address': '123 Avenue du Bien-être<br>Jardins Paisibles, CP 12345',
        'contact.call.title': 'Appelez-nous',
        'contact.email.title': 'Écrivez-nous',
        'contact.hours.title': 'Horaires d\'Ouverture',
        'contact.hours.schedule': 'Lundi - Samedi : 9h00 - 20h00<br>Dimanche : 10h00 - 18h00',
        'contact.form.name': 'Nom Complet',
        'contact.form.email': 'Adresse Email',
        'contact.form.phone': 'Numéro de Téléphone',
        'contact.form.service': 'Service d\'Intérêt',
        'contact.form.select_service': 'Sélectionnez un service',
        'contact.form.option_thai': 'Massage Thaï',
        'contact.form.option_aroma': 'Massage Aromathérapie',
        'contact.form.option_energy': 'Guérison Énergétique',
        'contact.form.option_consultation': 'Consultation Initiale',
        'contact.form.message': 'Message',
        'contact.form.placeholder': 'Parlez-nous de vos objectifs de bien-être ou de préoccupations spécifiques...',
        'contact.form.submit': 'Envoyer le Message',
        
        // Footer
        'footer.description': 'Votre sanctuaire pour la guérison holistique et le bien-être spirituel. Découvrez le chemin vers la paix intérieure et une santé optimale.',
        'footer.quick_links': 'Liens Rapides',
        'footer.link_home': 'Accueil',
        'footer.link_about': 'À Propos',
        'footer.link_services': 'Services',
        'footer.link_testimonials': 'Témoignages',
        'footer.link_contact': 'Contact',
        'footer.services_title': 'Services',
        'footer.service_thai': 'Massage Thaï',
        'footer.service_aroma': 'Aromathérapie',
        'footer.service_energy': 'Guérison Énergétique',
        'footer.service_consultation': 'Consultations',
        'footer.service_programs': 'Programmes de Bien-être',
        'footer.contact_info': 'Informations de Contact',
        'footer.address': '123 Avenue du Bien-être, Jardins Paisibles',
        'footer.copyright': '&copy; 2024 Edenitude. Tous droits réservés. | <a href="#" data-translate="footer.privacy">Politique de Confidentialité</a> | <a href="#" data-translate="footer.terms">Conditions d\'Utilisation</a>',
        'footer.privacy': 'Politique de Confidentialité',
        'footer.terms': 'Conditions d\'Utilisation'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.book': 'Book Now',
        
        // Hero Section
        'hero.title': 'Your Path to Wellness',
        'hero.subtitle': 'Alternative & Preventive Therapies',
        'hero.description': 'Discover the ancient wisdom of holistic healing through our carefully curated therapeutic services designed to restore balance, relieve tension, and nurture your well-being.',
        'hero.btn_services': 'Explore Our Services',
        'hero.btn_consultation': 'Book Consultation',
        
        // About Section
        'about.title': 'About Edenitude',
        'about.subtitle': 'A sanctuary for holistic healing and spiritual wellness',
        'about.wisdom_title': 'Embracing Ancient Wisdom',
        'about.description1': 'At Edenitude, we believe in the power of ancient healing practices combined with modern wellness approaches. Our mission is to guide you on a transformative journey toward optimal health and inner peace.',
        'about.description2': 'Each therapy session is carefully designed to address not just physical discomfort, but also emotional and spiritual well-being, creating a harmonious balance that promotes lasting wellness.',
        'about.feature1': 'Personalized Care',
        'about.feature2': 'Natural Healing',
        'about.feature3': 'Spiritual Balance',
        
        // Services Section
        'services.title': 'Our Healing Services',
        'services.subtitle': 'Therapeutic treatments designed to restore your natural balance',
        'services.thai.title': 'Thai Massage',
        'services.thai.price': 'From €65',
        'services.thai.description': 'Gentle techniques to relieve pain, improve mobility, and restore your body\'s natural equilibrium.',
        'services.thai.benefit1': 'Pain Relief',
        'services.thai.benefit2': 'Improved Mobility',
        'services.thai.benefit3': 'Body Rebalancing',
        'services.aromatherapy.title': 'Aromatherapy Massage',
        'services.aromatherapy.price': 'From €70',
        'services.aromatherapy.description': 'Powerful manual therapy targeting deep muscle tension and fascial restrictions for profound relaxation.',
        'services.aromatherapy.benefit1': 'Deep Relaxation',
        'services.aromatherapy.benefit2': 'Tension Release',
        'services.aromatherapy.benefit3': 'Fascial Work',
        'services.energy.title': 'Energy Healing',
        'services.energy.price': 'From €55',
        'services.energy.description': 'Chakra balancing and energy alignment to restore harmony between mind, body, and spirit.',
        'services.energy.benefit1': 'Energy Balance',
        'services.energy.benefit2': 'Chakra Alignment',
        'services.energy.benefit3': 'Spiritual Wellness',
        'services.learn_more': 'Learn More',
        
        // Testimonials Section
        'testimonials.title': 'Client Experiences',
        'testimonials.subtitle': 'Hear from those who have found their path to wellness',
        'testimonials.testimonial1.text': 'The Thai massage at Edenitude completely transformed my well-being. The therapist\'s intuitive touch and ancient techniques melted away years of tension and stress.',
        'testimonials.testimonial1.author': 'Sarah M.',
        'testimonials.testimonial1.role': 'Wellness Enthusiast',
        
        // Contact Section
        'contact.title': 'Begin Your Journey',
        'contact.subtitle': 'Ready to discover your path to wellness? Get in touch today',
        'contact.visit.title': 'Visit Our Sanctuary',
        'contact.visit.address': '123 Wellness Avenue<br>Peaceful Gardens, PC 12345',
        'contact.call.title': 'Call Us',
        'contact.email.title': 'Email Us',
        'contact.hours.title': 'Opening Hours',
        'contact.hours.schedule': 'Monday - Saturday: 9:00 AM - 8:00 PM<br>Sunday: 10:00 AM - 6:00 PM',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.phone': 'Phone Number',
        'contact.form.service': 'Interested Service',
        'contact.form.select_service': 'Select a service',
        'contact.form.option_thai': 'Thai Massage',
        'contact.form.option_aroma': 'Aromatherapy Massage',
        'contact.form.option_energy': 'Energy Healing',
        'contact.form.option_consultation': 'Initial Consultation',
        'contact.form.message': 'Message',
        'contact.form.placeholder': 'Tell us about your wellness goals or any specific concerns...',
        'contact.form.submit': 'Send Message',
        
        // Footer
        'footer.description': 'Your sanctuary for holistic healing and spiritual wellness. Discover the path to inner peace and optimal health.',
        'footer.quick_links': 'Quick Links',
        'footer.link_home': 'Home',
        'footer.link_about': 'About Us',
        'footer.link_services': 'Services',
        'footer.link_testimonials': 'Testimonials',
        'footer.link_contact': 'Contact',
        'footer.services_title': 'Services',
        'footer.service_thai': 'Thai Massage',
        'footer.service_aroma': 'Aromatherapy',
        'footer.service_energy': 'Energy Healing',
        'footer.service_consultation': 'Consultations',
        'footer.service_programs': 'Wellness Programs',
        'footer.contact_info': 'Contact Info',
        'footer.address': '123 Wellness Avenue, Peaceful Gardens',
        'footer.copyright': '&copy; 2024 Edenitude. All rights reserved. | <a href="#" data-translate="footer.privacy">Privacy Policy</a> | <a href="#" data-translate="footer.terms">Terms of Service</a>',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
    }
};

let currentLanguage = 'fr'; // Default to French

// ===== NAVIGATION & SCROLL EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Navigation elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('back-to-top');
    
    // Language switcher initialization
    initializeLanguageSwitcher();
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Scroll effects
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        // Navbar background change on scroll
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (scrollTop > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Update active navigation link based on current section
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }
    
    // Smooth scroll to sections
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = navbar.offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    };
    
    // Back to top functionality
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Handle nav link clicks for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });
});

// ===== TESTIMONIALS CAROUSEL =====
let currentTestimonial = 0;
const testimonials = [
    {
        text: "The Thai massage at Edenitude completely transformed my well-being. The therapist's intuitive touch and ancient techniques melted away years of tension and stress.",
        author: "Sarah M.",
        role: "Wellness Enthusiast"
    },
    {
        text: "After just one aromatherapy session, I felt renewed and balanced. The healing oils and expert massage technique created an unforgettable experience of deep relaxation.",
        author: "Michael R.",
        role: "Yoga Instructor"
    },
    {
        text: "The energy healing session was profound. I could feel the chakra alignment working through my entire being, bringing peace and clarity I hadn't experienced in years.",
        author: "Emma L.",
        role: "Meditation Teacher"
    }
];

function showTestimonial(index) {
    const testimonialElements = document.querySelectorAll('.testimonial');
    const navDots = document.querySelectorAll('.nav-dot');
    
    // Hide all testimonials
    testimonialElements.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active state from all nav dots
    navDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected testimonial
    if (testimonialElements[index]) {
        testimonialElements[index].classList.add('active');
    }
    
    // Update nav dot
    if (navDots[index]) {
        navDots[index].classList.add('active');
    }
    
    currentTestimonial = index;
}

// Auto-rotate testimonials
function autoRotateTestimonials() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Start auto-rotation
setInterval(autoRotateTestimonials, 5000);

// ===== FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
});

function handleFormSubmission(form) {
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!validateForm(data)) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
        
        // Reset button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateForm(data) {
    const errors = [];
    
    // Validate required fields
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name (at least 2 characters)');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.service) {
        errors.push('Please select a service');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (at least 10 characters)');
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (data.phone && !isValidPhone(data.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    // Show errors if any
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 7;
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas ${getNotificationIcon(type)}"></i>
            </div>
            <div class="notification-message">${message}</div>
            <button class="notification-close" onclick="closeNotification(this)">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles for notification
    addNotificationStyles();
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        closeNotification(notification.querySelector('.notification-close'));
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function closeNotification(closeBtn) {
    const notification = closeBtn.closest('.notification');
    notification.classList.remove('show');
    setTimeout(() => {
        notification.remove();
    }, 300);
}

function addNotificationStyles() {
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                max-width: 400px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                border-left: 4px solid;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                border-left-color: #28a745;
            }
            
            .notification-error {
                border-left-color: #dc3545;
            }
            
            .notification-warning {
                border-left-color: #ffc107;
            }
            
            .notification-info {
                border-left-color: #17a2b8;
            }
            
            .notification-content {
                display: flex;
                align-items: flex-start;
                padding: 16px;
                gap: 12px;
            }
            
            .notification-icon {
                color: inherit;
                font-size: 18px;
                margin-top: 2px;
            }
            
            .notification-success .notification-icon {
                color: #28a745;
            }
            
            .notification-error .notification-icon {
                color: #dc3545;
            }
            
            .notification-warning .notification-icon {
                color: #ffc107;
            }
            
            .notification-info .notification-icon {
                color: #17a2b8;
            }
            
            .notification-message {
                flex: 1;
                font-size: 14px;
                line-height: 1.4;
                color: #333;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #999;
                cursor: pointer;
                font-size: 14px;
                padding: 0;
                margin-left: 8px;
            }
            
            .notification-close:hover {
                color: #666;
            }
            
            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// ===== SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Simple fade-in animation for elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .about-text, .about-visual, .testimonial, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for animations
    addScrollAnimationStyles();
});

function addScrollAnimationStyles() {
    if (!document.getElementById('scroll-animation-styles')) {
        const styles = document.createElement('style');
        styles.id = 'scroll-animation-styles';
        styles.textContent = `
            .service-card,
            .about-text,
            .about-visual,
            .contact-item {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .service-card.animate-in,
            .about-text.animate-in,
            .about-visual.animate-in,
            .contact-item.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .service-card:nth-child(2) {
                transition-delay: 0.1s;
            }
            
            .service-card:nth-child(3) {
                transition-delay: 0.2s;
            }
            
            .contact-item:nth-child(2) {
                transition-delay: 0.1s;
            }
            
            .contact-item:nth-child(3) {
                transition-delay: 0.2s;
            }
            
            .contact-item:nth-child(4) {
                transition-delay: 0.3s;
            }
        `;
        document.head.appendChild(styles);
    }
}

// ===== LANGUAGE SWITCHER FUNCTIONALITY =====
function initializeLanguageSwitcher() {
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    
    if (langToggleBtn) {
        // Add click event listener to toggle button
        langToggleBtn.addEventListener('click', function() {
            toggleLanguage();
        });
    }
    
    // Set initial language state
    updateLanguageButton();
    translatePage();
}

function toggleLanguage() {
    // Switch between French and English
    const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    switchLanguage(newLanguage);
}

function switchLanguage(language) {
    if (language !== currentLanguage && translations[language]) {
        currentLanguage = language;
        
        // Update HTML lang attribute
        document.documentElement.lang = language;
        
        // Update page title and meta description
        updatePageMeta();
        
        // Translate all content
        translatePage();
        
        // Update language button state
        updateLanguageButton();
        
        // Store language preference
        localStorage.setItem('preferredLanguage', language);
        
        // Update testimonials content
        updateTestimonialsContent();
    }
}

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[currentLanguage][key];
        
        if (translation) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            } else {
                element.innerHTML = translation;
            }
        }
    });
}

function updateLanguageButton() {
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    const flagEmoji = document.getElementById('flag-emoji');
    
    if (langToggleBtn && flagEmoji) {
        // Show the flag of the language you can switch TO (not current language)
        if (currentLanguage === 'fr') {
            // Currently French, show English flag to switch to English
            flagEmoji.textContent = '🇬🇧';
            langToggleBtn.title = "Switch to English";
        } else {
            // Currently English, show French flag to switch to French
            flagEmoji.textContent = '🇫🇷';
            langToggleBtn.title = "Passer au français";
        }
    }
}

function updatePageMeta() {
    // Update page title
    if (currentLanguage === 'fr') {
        document.title = 'Edenitude - Votre Chemin vers le Bien-être';
        document.querySelector('meta[name="description"]').setAttribute('content',
            'Thérapies alternatives et préventives pour un bien-être holistique. Découvrez le massage thaï, l\'aromathérapie et les soins de guérison.');
    } else {
        document.title = 'Edenitude - Your Path to Wellness';
        document.querySelector('meta[name="description"]').setAttribute('content',
            'Alternative and preventive therapies for holistic wellness. Discover Thai massage, aromatherapy, and healing treatments.');
    }
}

function updateTestimonialsContent() {
    // Update the testimonials array with translated content
    if (currentLanguage === 'fr') {
        testimonials[0] = {
            text: "Le massage thaï chez Edenitude a complètement transformé mon bien-être. Le toucher intuitif du thérapeute et les techniques ancestrales ont fait fondre des années de tension et de stress.",
            author: "Sarah M.",
            role: "Passionnée de Bien-être"
        };
        testimonials[1] = {
            text: "Après une seule séance d'aromathérapie, je me suis sentie renouvelée et équilibrée. Les huiles cicatrisantes et la technique de massage experte ont créé une expérience inoubliable de relaxation profonde.",
            author: "Michael R.",
            role: "Instructeur de Yoga"
        };
        testimonials[2] = {
            text: "La séance de guérison énergétique était profonde. Je pouvais sentir l'alignement des chakras agir dans tout mon être, apportant une paix et une clarté que je n'avais pas ressenties depuis des années.",
            author: "Emma L.",
            role: "Professeure de Méditation"
        };
    } else {
        testimonials[0] = {
            text: "The Thai massage at Edenitude completely transformed my well-being. The therapist's intuitive touch and ancient techniques melted away years of tension and stress.",
            author: "Sarah M.",
            role: "Wellness Enthusiast"
        };
        testimonials[1] = {
            text: "After just one aromatherapy session, I felt renewed and balanced. The healing oils and expert massage technique created an unforgettable experience of deep relaxation.",
            author: "Michael R.",
            role: "Yoga Instructor"
        };
        testimonials[2] = {
            text: "The energy healing session was profound. I could feel the chakra alignment working through my entire being, bringing peace and clarity I hadn't experienced in years.",
            author: "Emma L.",
            role: "Meditation Teacher"
        };
    }
    
    // Refresh current testimonial display
    showTestimonial(currentTestimonial);
}

// Initialize language preference from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll listener with throttle
window.addEventListener('scroll', throttle(function() {
    // This will run at most once every 16ms (roughly 60fps)
    const scrollTop = window.pageYOffset;
    
    // Update navbar
    const navbar = document.getElementById('navbar');
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (scrollTop > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}, 16));

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
        
        // Enter/Space activates buttons and links
        if (e.key === 'Enter' || e.key === ' ') {
            const target = e.target;
            if (target.classList.contains('btn') || target.classList.contains('nav-dot')) {
                e.preventDefault();
                target.click();
            }
        }
    });
    
    // Add focus indicators for better accessibility
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Lazy load images when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Preload critical assets
function preloadCriticalAssets() {
    const criticalAssets = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap'
    ];
    
    criticalAssets.forEach(asset => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = asset;
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', preloadCriticalAssets);

console.log('🌸 Edenitude wellness website loaded successfully!');