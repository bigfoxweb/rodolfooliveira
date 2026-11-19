import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  const base =
    command === 'serve'
      ? '/'
      : mode === 'production'
        ? '/clientes/rodolfo/'
        : '/'

  return {
    base,
    plugins: [react()],
    build: {
      assetsDir: 'assets',
    },
  }
})