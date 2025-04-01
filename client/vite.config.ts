import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react(), tailwindcss()],
	server: {
		proxy: {
			'/api': process.env.VITE_LOCALHOST || 'http://localhost:5001', // Use Vercel env in prod
		},
	},
});
