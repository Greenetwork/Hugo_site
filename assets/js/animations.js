document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--i', index);
        entry.target.style.visibility = 'visible';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.service-card, .animate-fade-in').forEach((el) => {
    el.style.visibility = 'hidden';
    observer.observe(el);
  });
}); 