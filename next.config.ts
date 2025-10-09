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
				source: '/public/:slug*', // ✅ 여러 세그먼트 매칭
				destination: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/public/:slug*`, // ✅ 백엔드로 프록시
			},
		];
	},
};

export default nextConfig;
