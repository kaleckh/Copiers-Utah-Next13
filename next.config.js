const nextConfig = {
  pageExtensions: ["js", "jsx"],
  images: { unoptimized: true },
  trailingSlash: true,

  async redirects() {
    return [
      // First redirect
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'copiersutah.com',
          },
        ],
        destination: 'https://www.copiersutah.com',
        permanent: true,
      },
      // Second redirect
      {
        source: '/old-page',
        has: [
          {
            type: 'host',
            value: 'https://copiersutah.com',
          },
        ],
        destination: 'https://www.copiersutah.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
