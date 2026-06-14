import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/poly-life-core/' // <--- اسم مخزن خودت رو اینجا بذار
})