// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  async redirects() {
    return [
      {
        source: '/donate',
        destination: '/c4b84f78ac5d4ded9ab380f1dfcbca8a#fabdc8b2aa904351a543b0b8a867a477',
        permanent: false,
      },
      {
        source: '/en/donate',
        destination: '/0fc82c3870dd455da34242bd2d692cad#c3b6093e5509494aa2748d08a04ce277',
        permanent: false,
      },
    ]
  },
})
