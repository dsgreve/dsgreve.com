import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h2>Welcome to my Gatsby site!</h2>
        <p>Built following the Gatsby Tutorial!</p>
        <StaticImage 
        alt="Fishing flys in case" 
        src="../images/fishing-flys.jpg" 
        />
      </Layout>
      
    </main>
  )
}

export default IndexPage