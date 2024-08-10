/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.githubusercontent.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "media.licdn.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "instagram.fcgk27-1.fna.fbcdn.net",
                port: "",
                pathname: "**",
            }
        ],
    },
};

export default nextConfig;
