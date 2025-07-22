import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: true, // Optional if you're using server actions
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default withFlowbiteReact(nextConfig);
