import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nitishdevadiga.github.io',
  base: '/photos',
  output: 'static',
  build: {
    assets: 'assets',
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
