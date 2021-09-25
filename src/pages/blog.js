import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Blog ({ data }) {
  return (
    <Layout>
      <Seo title="blog" />
      <h1>My wordpress blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map(node => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt}} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
  `