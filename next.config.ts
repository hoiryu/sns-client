import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	transpilePackages: ['msw'],
	images: {
		domains: [
			'picsum.photos', // Faker Image
			'avatars.githubusercontent.com', // Faker Avatar
			'lh3.googleusercontent.com', // Google Avatar
		],
	},
};

export default nextConfig;
