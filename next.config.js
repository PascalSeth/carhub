/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["api.unsplash.com",'www.regcheck.org.uk','images.unsplash.com','www.carimagery.com']
        ,
        dangerouslyAllowSVG: true,

    }
}

module.exports = nextConfig
