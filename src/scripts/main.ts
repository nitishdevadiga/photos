import { initLightbox } from './lightbox.ts';
import { initMoodFilter } from './filter.ts';
import { initReveal } from './reveal.ts';
import { initCursor } from './cursor.ts';
import { initTilt } from './tilt.ts';

const initScroll = (): void => {
  const onScroll = (): void => {
    document.body.classList.toggle('scrolled', window.scrollY > 80);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
};

const start = (): void => {
  initCursor();
  initTilt();
  initLightbox();
  initMoodFilter();
  initReveal();
  initScroll();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
