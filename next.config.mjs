/** @type {import('next').NextConfig} */
const nextConfig = {

    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        igonoreDuringBuilds: true,
    }
};

export default nextConfig;
