/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { serverActions: true },
	env: { DATABASE_URL: process.env.DATABASE_URL },
	images: { domains: ['images.clerk.dev'] },
}

module.exports = nextConfig
