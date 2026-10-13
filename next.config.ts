import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // دي بتخليه يخرج ملفات ثابتة تفتح في أي مكان
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
