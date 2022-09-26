import React from "react";
import Layout from '../components/Layout';
import TextIntro from "../components/TextIntro";
import LatestBlogPosts from "../components/LatestBlogPosts";

// markup
const IndexPage = ({ transitionStatus }) => {
  return (
    <Layout>
      <div className="container my-20 flex justify-center">
        <div className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-rajah max-w-3xl">
          <TextIntro />
          <br />
          Developer.
          <br />Creativity<br />
          Through Code
        </div>
      </div>

      <div className="container flex">
        <div className="md:w-1/2 ml-auto">
          
          <p className="text-rajah text-xl">
            Creating websites that fit the unique style & message to best reach
            your audience. Helping start-ups, small businesses, and agencies
            achieve high quality websites and exceptional user experience.
          </p>
        </div>
      </div>
      <LatestBlogPosts />
    </Layout>
  );
};

export default IndexPage