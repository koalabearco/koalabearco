module.exports = {
    siteMetadata: {
        title: 'Koala Bear Co.',
        siteUrl: 'https://www.koalabear.co',
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Koala Bear Co.',
                short_name: 'Koala Bear Co.',
                start_url: '/index.html',
                background_color: '#ffffff',
                theme_color: '#00d1b2',
                display: 'standalone',
                icons: [
                    {
                        src: `/icons/icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/icons/icon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-purgecss`
    ]
};