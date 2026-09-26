(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) return;

  const hero = document.querySelector('[data-motion="hero"]');
  const media = document.querySelector('[data-parallax-media]');
  const copy = document.querySelector('[data-parallax-copy]');
  const style = document.createElement('style');
  style.textContent = `
    @media (prefers-reduced-motion: no-preference) {
      .motion-ready [data-hero-reveal] { animation: hero-enter .55s both; }
      .motion-ready [data-hero-reveal]:nth-child(2) { animation-delay: .06s; }
      .motion-ready [data-hero-reveal]:nth-child(3) { animation-delay: .12s; }
      .motion-ready [data-hero-reveal]:nth-child(4) { animation-delay: .18s; }
      @keyframes hero-enter { from { opacity:0; transform:translateY(14px); clip-path:inset(0 0 18% 0); } to { opacity:1; transform:translateY(0); clip-path:inset(0); } }
      .motion-ready [data-reveal].is-visible { animation: section-enter .38s both; }
      @keyframes section-enter { from { opacity:.65; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
      .motion-ready [data-reveal].is-visible [data-reveal-item] { animation: card-enter .36s both; animation-delay:calc(min(var(--i), 9) * 42ms); }
      @keyframes card-enter { from { opacity:.7; transform:translateY(9px); } to { opacity:1; transform:translateY(0); } }
      .motion-ready .is-visible [data-crimson-wipe] { animation: crimson-pulse .34s both; }
      @keyframes crimson-pulse { 0% { transform:scaleX(0); } 65% { transform:scaleX(1); } 100% { transform:scaleX(.22); } }
    }`;
  document.head.appendChild(style);
  document.documentElement.classList.add('motion-ready');

  document.querySelectorAll('[data-reveal-item]').forEach((item, i) => {
    item.style.setProperty('--i', i % 8);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px 40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach((item) => observer.observe(item));
  } else {
    document.querySelectorAll('[data-reveal]').forEach((item) => item.classList.add('is-visible'));
  }

  if (!hero || !media || !copy) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    if (reduce.matches || window.innerWidth <= 480) {
      media.style.transform = '';
      copy.style.transform = '';
      return;
    }
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const limit = window.innerWidth < 1024 ? 12 : 24;
    const progress = Math.max(-1, Math.min(1, -rect.top / Math.max(rect.height, 1)));
    media.style.transform = `translate3d(0,${(progress * limit).toFixed(1)}px,0)`;
    copy.style.transform = `translate3d(0,${(-progress * limit * .4).toFixed(1)}px,0)`;
  };
  const queue = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  reduce.addEventListener('change', () => {
    if (reduce.matches) {
      media.style.transform = '';
      copy.style.transform = '';
      document.documentElement.classList.remove('motion-ready');
    } else {
      document.documentElement.classList.add('motion-ready');
      queue();
    }
  });
  queue();
})();
