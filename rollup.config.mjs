import resolve from '@rollup/plugin-node-resolve';
import { terser } from '@rollup/plugin-terser';
export default {
  input: 'src/domlife.js',
  output: [
    { file: 'dist/domlife.esm.js', format: 'esm', sourcemap: true },
    { file: 'dist/domlife.iife.js', format: 'iife', name: 'DOMLife', sourcemap: true }
  ],
  plugins: [resolve(), terser()]
};
