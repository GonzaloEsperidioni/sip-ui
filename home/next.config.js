const { BACKOFFICE_URL } = process.env

module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/backoffice',
        destination: `${BACKOFFICE_URL}/backoffice`,
      },
      {
        source: '/backoffice/:path*',
        destination: `${BACKOFFICE_URL}/backoffice/:path*`,
      },
    ]
  },
}