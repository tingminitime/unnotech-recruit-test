import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }
  return  defineConfig({
    plugins: [vue()],
    base: process.env.VITE_REPO,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@api': fileURLToPath(new URL('./src/service/api', import.meta.url)),
        '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // Remove console
          drop_console: true,
          drop_debugger: true,
        },
        parse: {
          html5_comments: false,
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name]-[hash].js`,
          chunkFileNames: `assets/[name]-[hash].js`,
          assetFileNames: `assets/[name]-[hash].[ext]`,
        }
      }
    }
  })
}


