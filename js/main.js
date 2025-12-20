/**
 * Portfolio Animations & Interactions
 * Handles scroll-triggered reveals and micro-interactions
 */

// ==================== SCROLL REVEAL ====================
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    
    // Intersection Observer for efficient scroll detection
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    reveals.forEach(reveal => observer.observe(reveal));
});

// ==================== SMOOTH LINK SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for valid anchor links
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== MICRO-INTERACTIONS ====================
// Button hover feedback
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    element.addEventListener('mouseup', function() {
        this.style.transform = '';
    });
});

// ==================== PERFORMANCE OPTIMIZATION ====================
// Prefers reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('active');
    });
}