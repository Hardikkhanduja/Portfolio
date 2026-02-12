/**
 * Portfolio - Cursor tracking, scroll animations, smooth scroll
 */

(function () {
  'use strict';

  // Mark page as loaded (for entrance animations)
  window.addEventListener('load', () => {
    document.body.classList.add('is-loaded');
  }, { once: true });

  // --- Custom Cursor ---
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursor);

  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  cursorGlow.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursorGlow);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function animateCursor() {
    cursorX = lerp(cursorX, mouseX, 0.25);
    cursorY = lerp(cursorY, mouseY, 0.25);
    glowX = lerp(glowX, mouseX, 0.08);
    glowY = lerp(glowY, mouseY, 0.08);

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hide default cursor when custom cursor is active (desktop only)
  const supportsHover = window.matchMedia('(hover: hover)').matches;
  if (supportsHover) {
    document.body.classList.add('custom-cursor-active');
  }

  // Cursor hover scale on links/buttons
  const interactive = 'a, button, [role="button"]';
  document.querySelectorAll(interactive).forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });

  // Ripple effect for primary CTA buttons (lightweight, delegated)
  function createRipple(e) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    target.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  }

  document.querySelectorAll('.btn-primary').forEach((el) => {
    el.classList.add('ripple-container');
    el.addEventListener('click', createRipple);
  });

  // --- Smooth scroll for nav buttons ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#') {
        if (this.id === 'to-top' || this.classList.contains('to-top-link')) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      e.preventDefault();
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // --- Navbar active state (current section) ---
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const sectionIds = navLinks
    .map((a) => a.getAttribute('href'))
    .filter((h) => h && h !== '#' && h.startsWith('#'));

  const sections = sectionIds
    .map((id) => document.querySelector(id))
    .filter(Boolean);

  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        // Choose the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const activeId = `#${visible.target.id}`;
        navLinks.forEach((a) => {
          a.classList.toggle('is-active', a.getAttribute('href') === activeId);
        });
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((s) => navObserver.observe(s));
  }

  // --- Parallax for decorative HK logo (lightweight, transform-only) ---
  const heroLogoFrame = document.querySelector('.hero-logo-frame');
  if (heroLogoFrame && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const offset = Math.max(-18, Math.min(18, y * 0.03));
        heroLogoFrame.style.transform = `translateY(${offset}px)`;
        ticking = false;
      });
    }, { passive: true });
  }

  // --- Scroll-triggered animations (Latest Works) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.style.animationDelay = `${index * 0.12}s`;
      el.classList.add('scroll-visible');
      observer.unobserve(el);
    });
  }, observerOptions);

  document.querySelectorAll('.work-card').forEach((card) => observer.observe(card));
  document.querySelectorAll('.section-heading').forEach((el) => observer.observe(el));
  document.querySelectorAll('.mern-card').forEach((el) => observer.observe(el));
  document.querySelectorAll('.testimonial-card').forEach((el) => observer.observe(el));

  // --- About Me popup ---
  const aboutBtn = document.getElementById('about-me-btn');
  const navAboutBtn = document.getElementById('nav-about-btn');
  const aboutModal = document.getElementById('about-modal');
  const aboutBackdrop = document.getElementById('about-modal-backdrop');
  const aboutClose = document.getElementById('about-modal-close');

  function openAboutModal() {
    if (!aboutModal) return;
    aboutModal.classList.add('is-open');
    aboutModal.setAttribute('aria-hidden', 'false');
    if (aboutBtn) aboutBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('modal-open');
    aboutClose?.focus();
  }

  function closeAboutModal() {
    if (!aboutModal) return;
    aboutModal.classList.remove('is-open');
    aboutModal.setAttribute('aria-hidden', 'true');
    if (aboutBtn) aboutBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('modal-open');
    aboutBtn?.focus();
  }

  aboutBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    openAboutModal();
  });
  
  navAboutBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    openAboutModal();
  });
  
  aboutBackdrop?.addEventListener('click', closeAboutModal);
  aboutClose?.addEventListener('click', closeAboutModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && aboutModal?.classList.contains('is-open')) {
      closeAboutModal();
    }
  });
})();
