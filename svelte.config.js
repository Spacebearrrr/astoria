import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter(),
		// Other options...
	  },
  preprocess: sveltePreprocess({
    scss: {
      // Add any SCSS options here
      includePaths: ['src'],
    },
    // You can add more preprocessors if needed, like PostCSS, Less, etc.
  }),
  // other Svelte configuration options...
};
