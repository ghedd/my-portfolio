module.exports = {
  siteMetadata: {
    title: `Eddie's Portfolio`,
    description: `Eddie (Thịnh Lê) is a passionate learner who is excited to land his next job as a front-end web developer. He has been trained to catch up with modern front-end technologies such as HTML/CSS, JavaScript and React-Redux. Find out more about Eddie.`,
    author: `Eddie (Thinh Le) @gatsbyjs`,
  },
  plugins: [
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
  // NOTE: The above code makes use of JSON data
  // for vewing page static data via JSON file
}
