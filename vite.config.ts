import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-plugin-tsconfig-paths";

// Vite config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
