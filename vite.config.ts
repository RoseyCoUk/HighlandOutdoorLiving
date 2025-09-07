import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          // Split analytics into separate chunk
          analytics: [
            './src/lib/analytics.ts',
            './src/lib/analytics-service.ts',
            './src/lib/real-ga4-api.ts',
            './src/lib/search-console-api.ts',
            './src/hooks/useAnalytics.ts',
            './src/hooks/useGA4Events.ts'
          ],
          // Split admin components
          admin: [
            './src/components/admin/AdminLayout.tsx',
            './src/components/admin/AdminDashboard.tsx',
            './src/components/admin/LeadsPage.tsx',
            './src/components/admin/AdminSettings.tsx',
            './src/components/admin/AdminGuide.tsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'esbuild',
  },
  server: {
    port: 5173,
    host: true,
  },
});
