import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h2>Welcome to my Gatsby site!</h2>
        <p>Built following the Gatsby Tutorial!</p>
        <StaticImage alt="Comic panels of man buying hpnosis book" src="https://pbs.twimg.com/media/E6AbLx5VUAQCiUk?format=jpg&name=large" />
      </Layout>
      
    </main>
  )
}

export default IndexPage