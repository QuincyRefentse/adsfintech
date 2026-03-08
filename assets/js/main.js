// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Counter animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const startCounting = (counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        
        if (count < target) {
            const increment = Math.ceil(target / speed);
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target + '+';
        }
    };
    
    updateCount();
};

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('#about');
let counted = false;

window.addEventListener('scroll', () => {
    if (aboutSection && !counted) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            counters.forEach(counter => startCounting(counter));
            counted = true;
        }
    }
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentSlide = 0;

const showSlide = (index) => {
    testimonials.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
};

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = testimonials.length - 1;
        }
        showSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= testimonials.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// Auto slide testimonials
setInterval(() => {
    if (testimonials.length > 0) {
        currentSlide++;
        if (currentSlide >= testimonials.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
}, 5000);

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you within 24 hours.');
        
        // Reset form
        this.reset();
    });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        }
    });
}

// Back to top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Particles.js configuration
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#8B7355'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#8B7355',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.service-card, .feature-item, .about-content, .contact-wrapper, .resonance-card, .timeline-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);