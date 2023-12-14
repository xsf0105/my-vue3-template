import { createVitePlugins } from './config/vite/plugins';
import { resolve } from 'path';
import { ConfigEnv, UserConfigExport } from 'vite';

// import { viteMockServe } from 'vite-plugin-mock';

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir);
};

// https://vitejs.dev/config/
export default function ({ command }: ConfigEnv): UserConfigExport {
  const isProduction = command === 'build';
  const root = process.cwd();

  return {
    root,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    server: {
      host: true,
      hmr: true,
    },
    plugins: createVitePlugins(isProduction),
  };
}
