require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Max`,
    siteTitleAlt: `Wo Street`,
    siteUrl: `https://blog.maxwowo.com`,
    siteDescription: `Max's blog`,
    siteLanguage: `en`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/maxwowo`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/maxwo`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Max`,
        short_name: `Max`,
        siteHeadline: `Max's blog`,
        description: `Max's blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/public/page-data/*': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
          '/public/**/*.html': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
          '/sw.js': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
        },
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
