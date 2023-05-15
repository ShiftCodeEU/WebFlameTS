// vite.config.js
import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import inferno from "vite-plugin-inferno";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), inferno()],
  esbuild: {
    jsxInject: "import * as createElement from 'inferno-create-element';",
    jsx: "preserve",
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  build: {
    minify: true,
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: true,
    manifest: true
  }
});
