const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Suppress hydration warnings from browser extensions
  onError: (err, req, res) => {
    // Custom error handling
  },
};