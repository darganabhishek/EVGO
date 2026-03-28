const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                services: resolve(__dirname, 'services.html'),
                sustainability: resolve(__dirname, 'sustainability.html'),
                contact: resolve(__dirname, 'contact.html'),
                careers: resolve(__dirname, 'careers.html'),
                privacy: resolve(__dirname, 'privacy-policy.html'),
                terms: resolve(__dirname, 'terms.html'),
                process: resolve(__dirname, 'process.html'),
                reviews: resolve(__dirname, 'reviews.html'),
                home_relocation: resolve(__dirname, 'services/home-relocation.html'),
                office_relocation: resolve(__dirname, 'services/office-relocation.html'),
                intercity_moves: resolve(__dirname, 'services/intercity-moves.html'),
                ev_logistics: resolve(__dirname, 'services/ev-logistics.html'),
                two_wheeler: resolve(__dirname, 'services/two-wheeler.html'),
                three_wheeler: resolve(__dirname, 'services/three-wheeler.html'),
                four_wheeler: resolve(__dirname, 'services/four-wheeler.html'),
                logistics: resolve(__dirname, 'services/logistics.html'),
            },
        },
    },
})
