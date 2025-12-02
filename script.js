<script>
/* =========================================
   1. Smooth Scrolling for Anchor Links
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!' || !href) return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });

            // Update URL without jumping
            history.pushState(null, null, href);
        }
    });
});

/* =========================================
   2. Navbar: Solid Background + Shadow on Scroll
   ========================================= */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(12px)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    }
});

/* =========================================
   3. Subtle Fade-In Animation on Scroll (Lightweight AOS alternative)
   ========================================= */
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .job-listing, .course-box, .project-card, .about-grid > div');

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 80) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles — hidden until in view
document.querySelectorAll('.service-card, .job-listing, .course-box, .project-card, .about-grid > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// Trigger animation
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

/* =========================================
   4. Contact Form Submission (Client-side only – for demo)
   ========================================= */
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameField = this.querySelector('input[placeholder="Your Name"]') || this.querySelector('input[name="name"]');
        const name = nameField ? nameField.value.trim() : 'Valued Client';

        // Simple success feedback
        alert(`Thank you${name ? ', ' + name : ''}! Your message has been sent.\nWe will get back to you within 24 hours.`);

        this.reset();
    });
});

/* =========================================
   5. Preloader Fade-In (Optional – elegant touch)
   ========================================= */
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';

    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
</script>
