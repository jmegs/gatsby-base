const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })]
      }
    },
    {
      // tell webpack where to allow you to import modules from an absolute
      // project path rather than relative ../../ paths.
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components')
      }
    },
    {
      // enable mdx – a cool blend of markdown and JSX
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    }
  ]
}
