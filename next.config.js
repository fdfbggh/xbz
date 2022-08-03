/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'via.placeholder.com',
      'localhost',
      '127.0.0.1',
      'asia.ajung.site',
      'www.asiaimport.com.br',
      'into-the-program.com',
      'grodbzf5x83i.compat.objectstorage.sa-saopaulo-1.oraclecloud.com'
    ]
  },
  env: {
    APP_URL: process.env.APP_URL,
  },
}

module.exports = nextConfig
