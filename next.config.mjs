/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['13.51.85.192'], // For backward compatibility
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '13.51.85.192',
          port: '1337',
          pathname: '/uploads/**',
        },
        // Add additional patterns if needed, e.g., for HTTPS or staging environments
        // {
        //   protocol: 'https',
        //   hostname: '13.51.85.192',
        //   port: '1337',
        //   pathname: '/uploads/**',
        // }
      ],
    },
  };
  
  export default nextConfig;