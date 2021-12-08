// Error - next/image Un-configured Host
// https://nextjs.org/docs/messages/next-image-unconfigured-host

// next.config.js
module.exports = {
    images: {
      domains: ['rb.gy'],
    },
}

// restart the sever, because i have changed a configuration file.