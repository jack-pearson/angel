import { defineConfig, loadEnv } from 'vite';

export default defineConfig(async ({ mode }) => {
  const envFilePath = process.cwd().split('/').slice(0, -3).join('/');
  const env = loadEnv(mode, envFilePath, '') as unknown as { VUE_DOCS_PORT: number };
  return {
    server: {
      host: true,
      port: env.VUE_DOCS_PORT,
    },
  };
});
