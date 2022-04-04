import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: [`.svelte`, `.md`],

	preprocess: [mdsvex({ extension: `.md` }), preprocess()],

	kit: {
		// paths: {
		// 	base: dev ? '' : '/some_base_path',
		// },
		adapter: adapter(),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}

};

export default config;
