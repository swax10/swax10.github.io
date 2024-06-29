/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/multivet',
            destination: 'https://colab.research.google.com/drive/1A8puLHAugA62UxLJvCquXCYgXHvMIudd?usp=sharing',
            permanent: true,
          },
          {
            source: '/meco',
            destination: 'https://github.com/swax10/meco',
            permanent: true,
          }
        ]
      },
};

export default nextConfig;
