/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for GitHub Pages
    basePath: '/Portfolio', // Match your repository name
    images: {
        unoptimized: true, // Required for static export
    },
};

module.exports = nextConfig;
