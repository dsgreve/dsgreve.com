import * as React from "react";
import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-triangle">
        <polygon points="0,0 100,0 50,100" />
      </svg>
      <div class="introDecor introDiagonalGroup1">
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
        <div class="introDiagonal"></div>
      </div>
      <h2 className="text-3xl mb-6">Hey There!</h2>
      <h1 className="text-6xl  mb-6">I'm Dale</h1>
      <p className="text-2xl">
        I create Websites that are fast loading, accessible, and easy to use.
      </p>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
  <>
    <title>About DSG | Web Artisans</title>
    <meta name="description" content="Personal portfolio site of Dale Greve" />
  </>
);

// Step 3: Export your component
export default IndexPage;
