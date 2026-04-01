// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.remove('ph-x');
            mobileBtn.querySelector('i').classList.add('ph-list');
        });
    });
}


// Advanced Scroll Reveal with Staggering
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.15, // 15% viewport visibility as requested
    rootMargin: "0px"
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Auto-Stagger Grids (Services, Process) - Testimonials handled by Carousel now
const grids = document.querySelectorAll('.services-grid, .process-steps, .hero-stats');
grids.forEach(grid => {
    const children = grid.children;
    Array.from(children).forEach((child, index) => {
        child.classList.add('reveal-up'); // Ensure it animates
        child.style.transitionDelay = `${index * 0.3}s`; // 300ms delay between steps as requested
        revealObserver.observe(child);
    });
});

// Parallax Effect
const heroBg = document.querySelector('.hero-bg img');
if (heroBg) {
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        if (scrollValue < 800) {
            heroBg.style.transform = `translateY(${scrollValue * 0.4}px) scale(${1 + scrollValue * 0.0005})`;
        }
    });
}

// Magnetic Button Effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`; // Slight lift/move
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});

// Float Animation for specific elements
document.querySelectorAll('.stat-card, .step-icon').forEach((el, index) => {
    el.style.animation = `float 3s ease-in-out infinite`;
    el.style.animationDelay = `${index * 0.5}s`;
});

// Testimonial Auto-Slider
const slides = document.querySelectorAll('.testimonial-slide');
if (slides.length > 0) {
    let currentSlide = 0;

    // Initialize first slide
    slides[0].classList.add('active');

    setInterval(() => {
        // Exit current
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('exit');

        // Setup next
        currentSlide = (currentSlide + 1) % slides.length;

        // Enter next (remove exit class first if it had it from previous loop)
        slides[currentSlide].classList.remove('exit');
        slides[currentSlide].classList.add('active');

    }, 4000); // 4 seconds as requested
}

// Custom EV Cursor Follower
const cursorFollower = document.createElement('div');
cursorFollower.classList.add('cursor-follower');
cursorFollower.innerHTML = '<i class="ph-fill ph-truck-trailer"></i>';
document.body.appendChild(cursorFollower);


let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth follow effect
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursorFollower.style.left = `${cursorX}px`;
    cursorFollower.style.top = `${cursorY}px`;

    // Rotate to face the cursor
    const deltaX = mouseX - cursorX;
    const deltaY = mouseY - cursorY;

    // Default angle is 0deg (Front/Right)
    let angle = 0;

    // If moving significantly, calculate angle from movement
    if (Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5) {
        angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
    }

    cursorFollower.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

    requestAnimationFrame(animateCursor);
}

// Initialize B2B Slider
const b2bSlider = new Swiper('.b2b-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Only enable animateCursor on non-touch devices
if (window.matchMedia("(pointer: fine)").matches) {
    animateCursor();
}
