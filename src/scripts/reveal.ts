// Add `.is-visible` to elements as they enter the viewport.
// Simple, reliable: opacity + slight translate. No clip-path tricks.

export const initReveal = (): void => {
  const targets = document.querySelectorAll<HTMLElement>(
    '.feat, .arc, .section-head, h2, .lede, .meta, .about-text, .facts'
  );

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Helper: is element currently in the viewport?
  const inViewport = (el: HTMLElement): boolean => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  };

  // Add reveal class. Items already in view get .is-visible immediately.
  targets.forEach((el) => {
    el.classList.add('reveal');
    if (inViewport(el)) {
      el.classList.add('is-visible');
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
};
