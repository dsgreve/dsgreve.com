import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Dale Greve">
      <h2 className="text-3xl first-line:mb-6">Creativity Through Code</h2>
      <StaticImage
        className="border-4 rounded-2xl image-bounce"
        alt="Example code"
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=280&q=80"
      />
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
