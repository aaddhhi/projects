document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     Hero load-in sequence
     ------------------------------------------------------------------- */
  const revealItems = document.querySelectorAll('.hero .reveal-item');
  revealItems.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.7s cubic-bezier(.22,1,.36,1) ${i * 90}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${i * 90}ms`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }));
  });

  /* ---------------------------------------------------------------------
     Scroll-reveal for sections
     ------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.readme, .skill-group, .project-card, .timeline-item, .section-title, .section-eyebrow, .titleblock'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach(el => io.observe(el));

  /* ---------------------------------------------------------------------
     Crosshair cursor tracker (hero only, desktop only, motion allowed)
     ------------------------------------------------------------------- */
  const crosshair = document.getElementById('crosshair');
  const hero = document.querySelector('.hero');
  const coordX = document.getElementById('coordX');
  const coordY = document.getElementById('coordY');
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (!reduceMotion && isFinePointer && hero && crosshair) {
    hero.addEventListener('mouseenter', () => crosshair.classList.add('active'));
    hero.addEventListener('mouseleave', () => crosshair.classList.remove('active'));
    hero.addEventListener('mousemove', (e) => {
      crosshair.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (coordX && coordY) {
        coordX.textContent = `X ${String(Math.round(e.clientX)).padStart(3, '0')}`;
        coordY.textContent = `Y ${String(Math.round(e.clientY)).padStart(3, '0')}`;
      }
    });
  }

  /* ---------------------------------------------------------------------
     Status bar: active section, scroll %, live coords, clock
     ------------------------------------------------------------------- */
  const statSection = document.getElementById('statSection');
  const statScroll = document.getElementById('statScroll');
  const statCoord = document.getElementById('statCoord');
  const statTime = document.getElementById('statTime');

  const sections = document.querySelectorAll('section[id], .hero');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && statSection) {
        const id = entry.target.id || 'top';
        statSection.textContent = `§ ${id.toUpperCase()}`;
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => sectionObserver.observe(s));

  function updateScrollStat() {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.round((scrolled / max) * 100) : 0;
    if (statScroll) statScroll.textContent = `SCROLL ${pct}%`;
  }
  window.addEventListener('scroll', updateScrollStat, { passive: true });
  updateScrollStat();

  if (isFinePointer) {
    window.addEventListener('mousemove', (e) => {
      if (statCoord) {
        statCoord.textContent = `X ${String(Math.round(e.clientX)).padStart(3, '0')} · Y ${String(Math.round(e.clientY)).padStart(3, '0')}`;
      }
    });
  } else if (statCoord) {
    statCoord.textContent = '';
  }

  function updateClock() {
    if (!statTime) return;
    const now = new Date();
    statTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  updateClock();
  setInterval(updateClock, 30000);

  /* ---------------------------------------------------------------------
     Mobile nav toggle
     ------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'fixed';
      navLinks.style.top = '64px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#F7F8F6';
      navLinks.style.padding = '24px';
      navLinks.style.borderBottom = '1px solid #DEE1E4';
      navLinks.style.gap = '20px';
    });
  }

  /* ---------------------------------------------------------------------
     Footer year / revision marker
     ------------------------------------------------------------------- */
  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});