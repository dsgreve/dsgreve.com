import React from "react";
import { Link } from "gatsby";
import { getLatestBlogPosts } from "../hooks/getLatestBlogPosts";

const LatestBlogPosts = () => {
  const data = getLatestBlogPosts();
  console.log(data)

  return (
    <div>Latest blog posts</div>
  )

}

export default LatestBlogPosts;