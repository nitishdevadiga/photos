// Add `.is-visible` to elements as they enter the viewport.
// Uses IntersectionObserver — light, instant, no lag.

export const initReveal = (): void => {
  const targets = document.querySelectorAll<HTMLElement>('.feat, .arc, .section-head, h2, .lede, .meta');
  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach((el) => observer.observe(el));
};
