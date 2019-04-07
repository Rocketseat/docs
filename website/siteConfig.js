/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Rocketseat',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logo-rocketseat.svg',
    infoLink: 'https://www.rocketseat.com.br',
    pinned: true
  }
]

const siteConfig = {
  algolia: {
    apiKey: 'c8e36ac20fe699654da4aeda3e2bc4e9',
    indexName: 'Rocketseat Docs',
    placeholder: 'Buscar',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Noto+Sans:400,700',
    'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
  ],

  title: 'Rocketseat Docs', // Title for your website.
  tagline: 'Documentação oficial dos projetos da Rocketseat',
  //url: 'https://rocketseat.com.br', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://rocketseat.github.io',
  baseUrl: '/docs/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'rocketseat',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: 'comunidade', label: 'Comunidade' }
    // { doc: 'ambiente-react-native/ambiente/introducao', label: 'Docs' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo-white.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#7159c1',
    secondaryColor: '#6C4FBB'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Rocketseat`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dracula'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://unpkg.com/feather-icons',
    '/js/script.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logo-rocketseat.svg',
  twitterImage: 'img/logo-rocketseat.svg'

  //docsSideNavCollapsible: true

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
}

module.exports = siteConfig
