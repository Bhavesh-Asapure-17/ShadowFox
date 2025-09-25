
// Particle.js configuration
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#4cd1ff"
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
            "random": false,
        },
        "size": {
            "value": 3,
            "random": true,
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#4cd1ff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
        }
    },
    "retina_detect": true
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-fade-in-down', {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.2,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.from('.animate-fade-in-up', {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.from('.animate-fade-in', {
    duration: 1,
    opacity: 0,
    delay: 1.2,
    ease: 'power3.out'
});


// Section animations
const sections = ['#about', '#skills', '#experience', '#projects', '#contact'];
sections.forEach(section => {
    gsap.from(`${section} > div > *`, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black', 'bg-opacity-50', 'backdrop-blur-sm', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-black', 'bg-opacity-50', 'backdrop-blur-sm', 'shadow-lg');
    }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});