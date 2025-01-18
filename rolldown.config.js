import { defineConfig } from 'rolldown'
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default defineConfig({
  input: 'src/main.js',
  output: {
    dir: 'dist',
  },
  external: [
    /node_modules/,
  ],
  plugins: [nodeResolve()]
})
