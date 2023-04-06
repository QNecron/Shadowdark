import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Umbral Tools",
    siteUrl: "https://umbraltools.com/"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-netlify", "gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: "Umbral Tools",
      short_name: "Umbral Tools",
      start_url: "/",
      background_color: "#222222",
      theme_color: "#222222",
      display: "minimal-ui",
      "icon": "src/images/d20.png"
    },
    resolve: "gatsby-plugin-google-fonts",
    options: {
      fonts: [
        "Oswald\:300",
        "Montserrat\:400,400i,700" // you can also specify font weights and styles
      ],
      display: "swap"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
