module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Blog by Max Barrera',
  keywords:
    'marketing freelancer, seo expert, content writer',
  subtitle: 'Digital marketer, specializing in SEO.',
  copyright: '© 2020 | Cancun, Mexico',
  disqusShortname: 'Max',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-6589522-7',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'Resume',
      path: '/cv'
    }
  ],
  author: {
    name: 'Max Barrera',
    photo: '/headshot-white-bg.png',
    bio: 'Digital marketer, specializing in SEO.',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'MaxBarrera2148',
      twitter: '',
      linkedin: 'maxb-2148',
      telegram: '',
      instagram: '',
      facebook: '',
      email: 'm.a.barrera6248@gmail.com',
      rss: '/rss.xml'
    }
  }
}
