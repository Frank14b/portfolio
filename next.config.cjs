/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    turbo: {
      resolveAlias: {
        // Turbopack does not support standard ESM import paths yet
        "./ResumeReaderComponent.js": "./app/(pages)/components/ResumeReaderComponent.tsx",
        /**
         * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
         * Module parse failed: Unexpected character '�' (1:0)" error
         */
        canvas: "./empty-module.ts",
      },
    },
  },
};

export default nextConfig;
