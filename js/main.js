/**
 * Portfolio Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  reveals.forEach((reveal) => observer.observe(reveal));
});


  // SMOOTH LINK SCROLL
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// MICRO-INTERACTIONS
document.querySelectorAll('a, button').forEach((element) => {
  element.addEventListener('mousedown', function () {
    this.style.transform = 'scale(0.98)';
  });

  element.addEventListener('mouseup', function () {
    this.style.transform = '';
  });

  element.addEventListener('mouseleave', function () {
    this.style.transform = '';
  });
});

// PREFERS REDUCED MOTION
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.scrollBehavior = 'auto';
  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.add('active');
  });
}
