import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout as AntLayout } from 'antd'

const Layout = ({ children, title, description, keywords, article }) => (
  <AntLayout className="bg-transparent min-h-screen">
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
      {article && <meta property="og:type" content="article" />}
      {article && article.title && <meta property="og:title" content={article.title} />}
      {article && article.description && (
        <meta property="og:description" content={article.description} />
      )}
    </Helmet>
    {children}
  </AntLayout>
)

export default Layout
