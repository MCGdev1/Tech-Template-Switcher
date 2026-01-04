/**
 * Main Application Logic
 * Handles global interactions, scroll effects, and animations.
 */

document.addEventListener('DOMContentLoaded', async () => {
  // ---------------------------------------------------------
  // 0. Component Loader
  // ---------------------------------------------------------
  // Injects the Navbar and Footer into placeholders.
  await loadComponent('navbar-placeholder', 'components/navbar.html');
  await loadComponent('footer-placeholder', 'components/footer.html');

  // Highlight active link
  setActiveLink();

  // ---------------------------------------------------------
  // 1. Navigation Bar Scroll Effect
  // ---------------------------------------------------------
  // Adds a semi-transparent background and reduces padding when
  // the user scrolls down to create a "sticky" compact effect.
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.backgroundColor = 'rgba(10, 9, 8, 0.95)';
      } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.backgroundColor = 'transparent';
      }
    });
  }

  // ---------------------------------------------------------
  // 2. Intersection Observer for Reveal Animations
  // ---------------------------------------------------------
  // Detects when elements enter the viewport and triggers a
  // 'reveal-active' class to animate them in (fade up).
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Offset to trigger slightly before/after
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Select elements to animate: Cards, Headers, Hero
  const revealElements = document.querySelectorAll('.stat-card, .feature-card, .section-header, .hero-content');
  revealElements.forEach(el => {
    el.classList.add('reveal-init'); // Set initial hidden state
    observer.observe(el);
  });

  // ---------------------------------------------------------
  // 3. Mouse Parallax Effect
  // ---------------------------------------------------------
  // Moves the background "lava blob" slightly based on mouse position
  // to create a dynamic, depth-based feel.
  const lavaBlob = document.querySelector('.lava-blob');
  if (lavaBlob) {
    document.addEventListener('mousemove', (e) => {
      // Normalize coordinates (0 to 1)
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // Apply translation scale
      lavaBlob.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.2)`;
    });
  }

  // ---------------------------------------------------------
  // 4. Smooth Scrolling
  // ---------------------------------------------------------
  // fallback for smooth scrolling on anchor links if CSS 
  // scroll-behavior is not supported or for custom control.
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

/**
 * Loads a HTML component into a specific element ID.
 * @param {string} elementId - The ID of the container element.
 * @param {string} componentPath - The path to the HTML component file.
 */
async function loadComponent(elementId, componentPath) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const response = await fetch(componentPath);
    if (response.ok) {
      const html = await response.text();
      element.innerHTML = html;
    } else {
      console.error(`Failed to load ${componentPath}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error loading ${componentPath}:`, error);
  }
}

/**
 * Sets the active state for the current page in the navbar.
 */
function setActiveLink() {
  const path = window.location.pathname;
  const page = path.split("/").pop().replace('.html', '') || 'index';

  // Default to 'home' if page is empty or index
  const activeKey = (page === 'index' || page === '') ? 'home' : page;

  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.dataset.link === activeKey) {
      link.style.color = 'var(--primary-color)';
    } else {
      link.style.color = ''; // Reset others
    }
  });
}

// ---------------------------------------------------------
// 5. Dynamic Style Injection
// ---------------------------------------------------------
// Injects the necessary CSS for the reveal animations. 
// This ensures the animation logic works even if external CSS fails,
// and keeps the animation definitions close to the JS logic.
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
    /* Staggered delays for grid items */
    .feature-card:nth-child(2) { transition-delay: 0.1s; }
    .feature-card:nth-child(3) { transition-delay: 0.2s; }
    .feature-card:nth-child(4) { transition-delay: 0.3s; }
    .feature-card:nth-child(5) { transition-delay: 0.4s; }
    .feature-card:nth-child(6) { transition-delay: 0.5s; }
`;
document.head.appendChild(style);
