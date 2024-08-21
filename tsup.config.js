// @ts-check
import { defineConfig } from 'tsup'

export default defineConfig([
    {
        keepNames: true, // very important, else instance of check will not work.
        minifyIdentifiers: false,
        dts: true, // Generate .d.ts files
        minify: 'terser', // Minify output
        terserOptions: {
            keep_classnames: true,
            keep_fnames: true,
        },
        sourcemap: 'inline', // Generate sourcemaps
        treeshake: true, // Remove unused code
        splitting: false, // Split output into chunks
        clean: true, // Clean output directory before building
        outDir: "build", // Output directory
        entry: [
            'src/index.ts'
        ], // Entry point(s)
        format: ['cjs','esm'], // Output format(s)
        target: ['chrome91', 'firefox90', 'edge91', 'safari15', 'ios15', 'opera77'],
        external: ['react', 'react-dom', 'swiper', 'styled-components'],
        injectStyle: false,
    },
])