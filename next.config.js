/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Cloudflare Pages compatibility
  output: 'export',
  
  // Disable image optimization for static export (use Cloudflare Images in production)
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes for clean URLs
  trailingSlash: true,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize for production
  poweredByHeader: false,
  
  // Compress output
  compress: true,
};

module.exports = nextConfig;
