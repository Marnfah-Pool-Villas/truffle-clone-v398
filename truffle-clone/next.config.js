const nextConfig = {
  distDir: 'out',
  allowedDevOrigins: [
    'builder.io',
    'https://builder.io',
    '*.fly.dev',
    'e5fdd11587534640ab84596faaf47bce-2e1a48e0-0808-4133-9129-94138a.fly.dev',
    'https://e5fdd11587534640ab84596faaf47bce-2e1a48e0-0808-4133-9129-94138a.fly.dev',
    'e5fdd11587534640ab84596faaf47bce-d61babbe-826f-4152-b835-218f3c.fly.dev',
    'https://e5fdd11587534640ab84596faaf47bce-d61babbe-826f-4152-b835-218f3c.fly.dev'
  ],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
