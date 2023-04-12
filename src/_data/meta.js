module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Carlos Guedes',
  siteDescription:
    'I am Carlos Guedes, a principal full-stack software developer with over 15 years of experience in developing web applications. My expertise includes front-end development, back-end development, and database design. Explore my website to view my portfolio, read my blog, and get in touch with me to learn more about how I can help you with your software development needs.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Carlos Guedes',
  authorEmail: 'cguedes@gmail.com',
  authorWebsite: 'https://cguedes.net',
  themeColor: '#eae9e8', //  Manifest: defines the default theme color for the application
  themeBgColor: '#323647', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '@cguedes', // i.e. @site - twitter profile of the site
    twitterCreator: '@cguedes', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'My Web Development Blog',
    description:
      'I am Carlos Guedes, a principal full-stack software developer with over 15 years of experience in developing web applications. My expertise includes front-end development, back-end development, and database design. Explore my website to view my portfolio, read my blog, and get in touch with me to learn more about how I can help you with your software development needs.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Carlos Guedes',
    street: '',
    city: 'Lisboa',
    state: 'Portugal',
    zip: '',
    mobileDisplay: '',
    mobileCall: ' ',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
}
