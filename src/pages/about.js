import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>Hi There! This page was build with gatsby.</p>
      </Layout>
    </main>
  );
};
export const Head = () => (
  <>
    <title>About DSG | Web Artisans</title>
    <meta name="description" content="Your description" />
  </>
);
export default AboutPage;
