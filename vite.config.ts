import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import svgx from '@svgx/vite-plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(), 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        svgx()
    ],
    resolve: {
        alias: {
            '@styles': '/src/app/styles',
            '@app': '/src/app',
            '@pages': '/src/pages',
            '@shared': '/src/shared',
            '@assets': '/src/shared/assets',
            '@widgets': '/src/widgets',
            '@features': '/src/features',
            '@entities': '/src/entities',
            '@store': '/src/shared/lib/store',
        },
    },
});
