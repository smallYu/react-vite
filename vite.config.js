import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import htmlTemplate from 'vite-plugin-html-template-mpa';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import path from 'path';
import fs from 'fs';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const alias = {
  '@': path.resolve(__dirname, './src'),
  '&': path.resolve(__dirname, './src'),
};
// const rs = import.meta.glob('./src/pages/**', {
//   eager: true,
//   import: 'default'
// });

const getPathJson = (path) => {
  const dirInfo = fs.readdirSync(path);
  let resobj = {};
  dirInfo.forEach((item) => {
    const itemPath = `${path}/${item}`;
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      Object.assign(resobj, {
        [item]: {
          template: `src/pages/${item}/index.html`,
          title: item,
          entry: `src/pages/${item}/main.jsx`,
          inject: {
            data: {
              // injectScript: `<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script><script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>`,
              injectScript: '',
            },
          },
        },
      });
    }
  });
  // console.log(dirInfo, resobj)
  return resobj;
};
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8082,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        list: path.resolve(__dirname, `src/pages/list/index.html`),
        test: path.resolve(__dirname, `src/pages/test/index.html`),
      },
      output: {
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
      },
      external: ['react', 'react-dom'],
    },
  },
  plugins: [
    react(),
    // mpa({
    //   scanDir: 'src/pages',
    // }),
    htmlTemplate({
      pagesDir: 'src/pages',
      pages: getPathJson(path.resolve(__dirname, './src/pages')),
      // buildCfg: {
      //   moveHtmlTop: true,
      //   moveHtmlDirTop: false,
      //   buildPrefixName: '',
      //   htmlHash: true,
      // },
    }),
    // viteExternalsPlugin({
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    // }),
  ],
  resolve: {
    alias,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
