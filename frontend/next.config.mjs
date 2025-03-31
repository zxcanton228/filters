/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/:path*`,
			},
		]
	},
}

export default nextConfig
