const nextConfig = {
  pageExtensions: ["js", "jsx"],
  images: { unoptimized: true },
  trailingSlash: true,

  async redirects() {
    return [
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
    ]
  },
};

module.exports = nextConfig;
