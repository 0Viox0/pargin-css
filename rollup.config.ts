import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/main.ts', // Your entry point
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs', // CommonJS for Node
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm', // ES Modules for browsers
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(), // Resolves node_modules
        commonjs(), // Converts CommonJS to ES6
        typescript({
            // TypeScript compilation
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist/types',
        }),
    ],
    external: ['lodash'], // Example of external dependencies
};
