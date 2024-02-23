import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  devServer: {
    headers: {
      "Cross-Origin-Opener-Policy": "unsafe-none",
    },
  },

  plugins: [react()],
});
