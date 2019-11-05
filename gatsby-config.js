module.exports = {
  siteMetadata: {
    title: `Eddie's Portfolio`,
    description: `Thinh Le (Eddie) - teacher turned developer seeking for a job in front-end web development.`,
    author: `@Thinh Le (Eddie)`,
    siteUrl: `https://eddie-thinhle.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
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
