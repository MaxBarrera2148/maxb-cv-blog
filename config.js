module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Blog by Marat Dospolov',
  keywords:
    'account surfer, trello bookmark, trello, productivity, javascript, Marat Dospolov, choosy windows, browser selector',
  subtitle: 'Developer. Optimizer. Learner.',
  copyright: '© 2020 | Kyiv, Ukraine',
  disqusShortname: 'dospolov',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-6589522-7',
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'CV',
      path: '/cv'
    }
  ],
  author: {
    name: 'Marat Dospolov',
    photo: '/photo.jpg',
    bio: 'Marketer. Optimizer. Learner.',
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
