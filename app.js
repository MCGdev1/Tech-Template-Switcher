document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '1rem 0';
      navbar.style.backgroundColor = 'rgba(10, 9, 8, 0.95)';
    } else {
      navbar.style.padding = '1.5rem 0';
      navbar.style.backgroundColor = 'transparent';
    }
  });

  // Intersection Observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply reveal classes to sections and cards
  const revealElements = document.querySelectorAll('.stat-card, .feature-card, .section-header, .hero-content');
  revealElements.forEach(el => {
    el.classList.add('reveal-init');
    observer.observe(el);
  });

  // Add mouse parallax effect to the hero blob
  const lavaBlob = document.querySelector('.lava-blob');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    lavaBlob.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.2)`;
  });

  // Smooth scroll for nav links (already handled by CSS but for robustness)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add reveal styles dynamically to avoid FOUC or if CSS is not loaded
const style = document.createElement('style');
style.textContent = `
    .reveal-init {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .reveal-active {
        opacity: 1;
        transform: translateY(0);
    }
    .feature-card:nth-child(2) { transition-delay: 0.1s; }
    .feature-card:nth-child(3) { transition-delay: 0.2s; }
    .feature-card:nth-child(4) { transition-delay: 0.3s; }
    .feature-card:nth-child(5) { transition-delay: 0.4s; }
    .feature-card:nth-child(6) { transition-delay: 0.5s; }
`;
document.head.appendChild(style);
