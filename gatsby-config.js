module.exports = {
  siteMetadata: {
    title: `teddlecodes`,
    description: `Thinh (Eddie) Le - teacher turned developer seeking for a job in front-end web development.`,
    author: `@Thinh (Eddie) Le`,
    siteUrl: `https://teddlecodes.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-172648624-1",
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -100,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `./src/data`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00c9ff`,
        theme_color: `#00c9ff`,
        display: `minimal-ui`,
        icon: `src/data/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-altair-graphql`,
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
