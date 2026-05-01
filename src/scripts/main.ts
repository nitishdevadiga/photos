import { initLightbox } from './lightbox.ts';
import { initMoodFilter } from './filter.ts';
import { initReveal } from './reveal.ts';

const start = (): void => {
  initLightbox();
  initMoodFilter();
  initReveal();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
