// Add `.is-visible` to elements as they enter the viewport.
// Photos use clip-path for a cinematic reveal; everything else uses opacity+translate.
//
// IMPORTANT: We add the .reveal-clip class via JS (not in HTML) so that:
// 1. Photos render normally if JS fails or is disabled (graceful degradation)
// 2. Photos already in viewport on first paint don't flash hidden

export const initReveal = (): void => {
  const photoTargets = document.querySelectorAll<HTMLElement>('.feat, .arc');
  const textTargets = document.querySelectorAll<HTMLElement>('.section-head, h2, .lede, .meta, .about-text, .facts');

  if (!('IntersectionObserver' in window)) {
    return;
  }

  // Helper: is element currently in the viewport?
  const inViewport = (el: HTMLElement): boolean => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  };

  // For photos: add .reveal-clip ONLY if they're below the fold.
  // Photos already on screen show immediately (no flash, no race).
  photoTargets.forEach((el) => {
    if (!inViewport(el)) {
      el.classList.add('reveal-clip');
    } else {
      el.classList.add('reveal-clip', 'is-visible');
    }
  });

  textTargets.forEach((el) => {
    if (!inViewport(el)) {
      el.classList.add('reveal');
    } else {
      el.classList.add('reveal', 'is-visible');
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

  [...photoTargets, ...textTargets].forEach((el) => observer.observe(el));
};
