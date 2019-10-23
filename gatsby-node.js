exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (res.err) {
    reporter.panic("Oops, something went wrong while loading your porjects...")
    return
  }
  const projects = res.data.allProjectsJson.edges
  projects.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: { slug },
    })
  })
}
