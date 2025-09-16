import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	transpilePackages: ['msw'],
	experimental: {
		serverActions: {
			bodySizeLimit: '10mb',
		},
	},
	images: {
		domains: [
			'picsum.photos', // Faker Image
			'avatars.githubusercontent.com', // Faker Avatar
			'lh3.googleusercontent.com', // Google Avatar
		],
	},
	async rewrites() {
		return [
			{
				source: '/upload/:slug',
				destination: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/upload/:slug`,
			},
		];
	},
};

export default nextConfig;
