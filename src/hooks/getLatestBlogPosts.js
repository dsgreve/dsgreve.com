import { useStaticQuery, graphql } from "gatsby";

export const getLatestBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostsQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }
  `);

  return data;
}