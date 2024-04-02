import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from 'vite'
// import federation from '@originjs/vite-plugin-federation'
// import react from '@vitejs/plugin-react'
// import ExternalTemplateRemotesPlugin from 'external-remotes-plugin'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'hostApp',
//       remotes: {
//         // orderApp: 'http://localhost:5474/assets/remoteEntry.js',
//         componentBank: 'http://localhost:5555/assets/remoteEntry.js',

//       },
//       shared: ['react','react-dom']
//     }),
//     new ExternalTemplateRemotesPlugin(),
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: false,
//     cssCodeSplit: false
//   }
// })
