// ===== LANGUAGE TRANSLATION SYSTEM =====
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.team': 'Qui sommes-nous',
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
        
        // Team Section
        'team.title': 'Qui sommes-nous ?',
        'team.subtitle': 'Rencontrez nos thérapeutes passionnées',
        'team.chloe.name': 'Chloé',
        'team.chloe.description': 'Forte de 20 ans d\'expérience en tant que thérapeute et de plus de 20 ans de formation en médecines traditionnelles et alternatives du corps, je mets à votre disposition mon savoir-faire et ma passion pour comprendre vos besoins et vous offrir une séance de détente et de relaxation unique.',
        'team.michele.name': 'Michèle',
        'team.michele.description': 'Thérapeute en énergétique depuis plus de 10 ans, spécialisée dans les mémoires transgénérationnelles.',
        'team.philosophy.text1': 'Nous vous offrons une parenthèse pour écouter votre corps et votre cœur, une pause pour vous reconnecter à vous-même.',
        'team.philosophy.text2': 'L\'équipe d\'Edenitude, puisant dans les meilleures connaissances des médecines traditionnelles, complémentaires et intégratives, vous propose une approche alternative, holistique et préventive de votre santé.',
        'team.philosophy.text3': 'Chaque séance est personnalisée selon vos besoins du moment, un instant unique, ici et maintenant, au rythme de votre respiration et de votre corps.',
        
        // Services Section
        'services.title': 'Nos Services de Guérison',
        'services.subtitle': 'Traitements thérapeutiques conçus pour restaurer votre équilibre naturel',
        'services.thai.title': 'Thaï massage',
        'services.thai.price': 'À partir de €65',
        'services.thai.description': 'Des techniques douces pour soulager vos douleurs, améliorer votre mobilité et restaurer l\'équilibre de votre corps.',
        'services.thai.benefit1': 'Soulagement des douleurs',
        'services.thai.benefit2': 'Amélioration de la mobilité',
        'services.thai.benefit3': 'Rééquilibrage corporel',

        'services.huiles.title': 'Massages aux huiles',
        'services.huiles.price': 'À partir de €70',
        'services.huiles.description': 'Thérapie manuelle puissante et précise visant à libérer les capacités du corps. Travail profond des muscles et des fascias.',
        'services.huiles.benefit1': 'Relaxation profonde',
        'services.huiles.benefit2': 'Libération des tensions',
        'services.huiles.benefit3': 'Travail des fascias',

        'services.energetiques.title': 'Soins énergétiques',
        'services.energetiques.price': 'À partir de €75',
        'services.energetiques.description': 'Harmonisez vos énergies vitales pour retrouver un bien-être global, réduire le stress et stimuler votre pouvoir d\'autoguérison.',
        'services.energetiques.benefit1': 'Réduction du stress',
        'services.energetiques.benefit2': 'Harmonisation énergétique',
        'services.energetiques.benefit3': 'Stimulation autoguérison',

        'services.pieds.title': 'Massage des pieds',
        'services.pieds.price': 'À partir de €60',
        'services.pieds.description': 'Libération subtile et profonde des pieds et des jambes ainsi que des organes qui lui sont interconnectés.',
        'services.pieds.benefit1': 'Amélioration circulation',
        'services.pieds.benefit2': 'Détente profonde',
        'services.pieds.benefit3': 'Connexion énergétique',

        'services.toksen.title': 'Tok Sen',
        'services.toksen.price': 'À partir de €80',
        'services.toksen.description': 'Technique ancestrale Lanna. La vibration profonde et rythmique dans le corps libère muscles, articulations et fascias. Recrée de l\'espace et de la circulation énergétique.',
        'services.toksen.benefit1': 'Libération musculaire',
        'services.toksen.benefit2': 'Amélioration mobilité',
        'services.toksen.benefit3': 'Circulation énergétique',

        'services.hotherbals.title': 'Hot herbals',
        'services.hotherbals.price': 'À partir de €85',
        'services.hotherbals.description': 'Travail profond des sen lines pour rééquilibrer les flux énergétiques, sanguins et lymphatiques. Libère les blocages physiques et redonne au corps son amplitude de mouvement.',
        'services.hotherbals.benefit1': 'Rééquilibrage énergétique',
        'services.hotherbals.benefit2': 'Amélioration circulation',
        'services.hotherbals.benefit3': 'Libération blocages',

        'services.amatarot.title': 'Amatarot',
        'services.amatarot.price': 'À partir de €90',
        'services.amatarot.description': 'Technique ancestrale issue des médecines traditionnelles qui agit en profondeur sur les tendons, les muscles, les fascias et les nerfs. Régénération et libération des tissus.',
        'services.amatarot.benefit1': 'Régénération tissulaire',
        'services.amatarot.benefit2': 'Travail profond',
        'services.amatarot.benefit3': 'Libération nerveuse',

        'services.abdominal.title': 'Massage Abdominal',
        'services.abdominal.price': 'À partir de €95',
        'services.abdominal.description': 'Massage profond, détoxifiant et énergisant. Équilibre l\'ensemble du système corporel et émotionnel.',
        'services.abdominal.benefit1': 'Détoxification',
        'services.abdominal.benefit2': 'Équilibre émotionnel',
        'services.abdominal.benefit3': 'Régénération système digestif',
        'services.learn_more': 'En Savoir Plus',
        
        // Testimonials Section
        'testimonials.title': 'Expériences Clients',
        'testimonials.subtitle': 'Écoutez ceux qui ont trouvé leur chemin vers le bien-être',
        'testimonials.testimonial1.text': 'Le massage thaï chez Edenitude a complètement transformé mon bien-être. Le toucher intuitif du thérapeute et les techniques ancestrales ont fait fondre des années de tension et de stress.',
        'testimonials.testimonial1.author': 'Sarah M.',
        'testimonials.testimonial1.role': 'Passionnée de Bien-être',
        'testimonials.testimonial_author_role': 'Client',
        
        // Contact Section
        'contact.title': 'Commencez Votre Voyage',
        'contact.subtitle': 'Prêt à découvrir votre chemin vers le bien-être ? Contactez-nous dès aujourd\'hui',
        'contact.visit.title': 'Visitez Notre Sanctuaire',
        'contact.visit.address': '134 Domaine D\'Alzone<br>20166 Porticcio',
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
        'footer.link_team': 'Qui sommes-nous',
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
        'footer.address': '134 Domaine D\'Alzone, 20166 Porticcio',
        'footer.copyright': '&copy; 2024 Edenitude. Tous droits réservés.',
        'footer.privacy': 'Politique de Confidentialité',
        'footer.terms': 'Conditions d\'Utilisation'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.team': 'Who we are',
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

        // Team Section
        'team.title': 'Who we are?',
        'team.subtitle': 'Meet our passionate therapists',
        'team.chloe.name': 'Chloé',
        'team.chloe.description': 'With 20 years of experience as a therapist and over 20 years of training in traditional and alternative body medicine, I put my expertise and passion at your disposal to understand your needs and offer you a unique session of relaxation and well-being.',
        'team.michele.name': 'Michèle',
        'team.michele.description': 'Energy therapist for over 10 years, specialized in transgenerational memories.',
        'team.philosophy.text1': 'We offer you a pause to listen to your body and your heart, a break to reconnect with yourself.',
        'team.philosophy.text2': 'The Edenitude team, drawing from the best knowledge of traditional, complementary and integrative medicines, offers you an alternative, holistic and preventive approach to your health.',
        'team.philosophy.text3': 'Each session is personalized according to your needs of the moment, a unique moment, here and now, at the rhythm of your breathing and your body.',

        // Services Section
        'services.title': 'Our Healing Services',
        'services.subtitle': 'Therapeutic treatments designed to restore your natural balance',
        'services.thai.title': 'Thai Massage',
        'services.thai.price': 'From €65',
        'services.thai.description': 'Gentle techniques to relieve pain, improve mobility, and restore your body\'s balance.',
        'services.thai.benefit1': 'Pain Relief',
        'services.thai.benefit2': 'Improved Mobility',
        'services.thai.benefit3': 'Body Rebalancing',

        'services.huiles.title': 'Oil Massages',
        'services.huiles.price': 'From €70',
        'services.huiles.description': 'Powerful and precise manual therapy aimed at unleashing the body\'s capabilities. Deep work on muscles and fascia.',
        'services.huiles.benefit1': 'Deep Relaxation',
        'services.huiles.benefit2': 'Tension Release',
        'services.huiles.benefit3': 'Fascial Work',

        'services.energetiques.title': 'Energy Healing',
        'services.energetiques.price': 'From €75',
        'services.energetiques.description': 'Harmonize your vital energies to regain overall well-being, reduce stress, and stimulate your self-healing power.',
        'services.energetiques.benefit1': 'Stress Reduction',
        'services.energetiques.benefit2': 'Energy Harmonization',
        'services.energetiques.benefit3': 'Self-healing Stimulation',

        'services.pieds.title': 'Foot Massage',
        'services.pieds.price': 'From €60',
        'services.pieds.description': 'Subtle and deep release of the feet and legs, as well as their interconnected organs.',
        'services.pieds.benefit1': 'Improved Circulation',
        'services.pieds.benefit2': 'Deep Relaxation',
        'services.pieds.benefit3': 'Energy Connection',

        'services.toksen.title': 'Tok Sen',
        'services.toksen.price': 'From €80',
        'services.toksen.description': 'Ancient Lanna technique. Deep and rhythmic vibration in the body releases muscles, joints, and fascia. Creates space and energetic circulation.',
        'services.toksen.benefit1': 'Muscle Release',
        'services.toksen.benefit2': 'Improved Mobility',
        'services.toksen.benefit3': 'Energy Circulation',

        'services.hotherbals.title': 'Hot Herbals',
        'services.hotherbals.price': 'From €85',
        'services.hotherbals.description': 'Deep work on the sen lines to rebalance energetic, blood, and lymphatic flows. Releases physical blockages and restores the body\'s range of motion.',
        'services.hotherbals.benefit1': 'Energy Rebalancing',
        'services.hotherbals.benefit2': 'Improved Circulation',
        'services.hotherbals.benefit3': 'Blockage Release',

        'services.amatarot.title': 'Amatarot',
        'services.amatarot.price': 'From €90',
        'services.amatarot.description': 'Ancient technique from traditional medicines that acts deeply on tendons, muscles, fascia, and nerves. Tissue regeneration and nerve release.',
        'services.amatarot.benefit1': 'Tissue Regeneration',
        'services.amatarot.benefit2': 'Deep Work',
        'services.amatarot.benefit3': 'Nerve Release',

        'services.abdominal.title': 'Abdominal Massage',
        'services.abdominal.price': 'From €95',
        'services.abdominal.description': 'Deep, detoxifying, and energizing massage. Balances the entire bodily and emotional system.',
        'services.abdominal.benefit1': 'Detoxification',
        'services.abdominal.benefit2': 'Emotional Balance',
        'services.abdominal.benefit3': 'Digestive System Regeneration',
        'services.learn_more': 'Learn More',
        
        // Testimonials Section
        'testimonials.title': 'Client Experiences',
        'testimonials.subtitle': 'Hear from those who have found their path to wellness',
        'testimonials.testimonial1.text': 'The Thai massage at Edenitude completely transformed my well-being. The therapist\'s intuitive touch and ancient techniques melted away years of tension and stress.',
        'testimonials.testimonial1.author': 'Sarah M.',
        'testimonials.testimonial1.role': 'Wellness Enthusiast',
        'testimonials.testimonial_author_role': 'Client',
        
        // Contact Section
        'contact.title': 'Begin Your Journey',
        'contact.subtitle': 'Ready to discover your path to wellness? Get in touch today',
        'contact.visit.title': 'Visit Our Sanctuary',
        'contact.visit.address': '134 Domaine D\'Alzone<br>20166 Porticcio',
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
        'footer.link_team': 'Who we are',
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
        'footer.address': '134 Domaine D\'Alzone, 20166 Porticcio',
        'footer.copyright': '&copy; 2024 Edenitude. All rights reserved.',
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
            // Special handling for testimonials section which has min-height: 100vh
            if (sectionId === 'testimonials') {
                // For testimonials, scroll to center since content is vertically centered
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            } else {
                // For other sections, use normal top scrolling with scroll-padding-top
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
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
let allTestimonials = []; // This will store the reviews from the JSON
let allTestimonialsEnglish = []; // This will store the English reviews from the JSON

document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...

    // Load testimonials
    loadTestimonials();
});

async function loadTestimonials() {
    try {
        const responseFrench = await fetch('reviews.json');
        const dataFrench = await responseFrench.json();
        allTestimonials = dataFrench; // reviews.json directly contains the array of reviews

        const responseEnglish = await fetch('reviews_english.json');
        const dataEnglish = await responseEnglish.json();
        allTestimonialsEnglish = dataEnglish; // reviews_english.json directly contains the array of reviews

        renderTestimonials();
        // Start auto-rotation only after testimonials are loaded
        setInterval(autoRotateTestimonials, 5000);
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

function renderTestimonialStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>'; // Use far for empty stars if needed, or just omit
        }
    }
    return starsHtml;
}

function renderTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-carousel .testimonials-container');
    const prevArrow = document.querySelector('.testimonials-carousel .prev-arrow');
    const nextArrow = document.querySelector('.testimonials-carousel .next-arrow');
    
    testimonialsContainer.innerHTML = '';

    allTestimonials.forEach((review, index) => {
        // Determine the review text based on the current language
        const reviewText = currentLanguage === 'fr' ? review.review : allTestimonialsEnglish[index].review;

        // Create testimonial element
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        if (index === 0) {
            testimonialDiv.classList.add('active');
        }

        testimonialDiv.innerHTML = `
            <div class="testimonial-content">
                <div class="stars">
                    ${renderTestimonialStars(review.rating)}
                </div>
                <p class="testimonial-text">"${reviewText}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="author-info">
                        <h4>${review.reviewer}</h4>
                        <span>${review.date}</span>
                    </div>
                </div>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });

    // Add event listeners for arrows
    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', () => showTestimonial(currentTestimonial - 1));
        nextArrow.addEventListener('click', () => showTestimonial(currentTestimonial + 1));
    }

    // Initialize the first testimonial
    showTestimonial(0);
}

function showTestimonial(index) {
    const testimonialElements = document.querySelectorAll('.testimonials-carousel .testimonial');
    // Ensure index is within bounds
    if (index < 0) {
        index = testimonialElements.length - 1; // Loop to the last testimonial
    } else if (index >= testimonialElements.length) {
        index = 0; // Loop to the first testimonial
    }

    // Hide all testimonials
    testimonialElements.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Show selected testimonial
    if (testimonialElements[index]) {
        testimonialElements[index].classList.add('active');
    }
    
    currentTestimonial = index;
}

// Auto-rotate testimonials
function autoRotateTestimonials() {
    showTestimonial(currentTestimonial + 1);
}

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
    // This function is now responsible for re-rendering the dynamically loaded testimonials
    // when the language changes.
    renderTestimonials();
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