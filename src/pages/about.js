import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>
          Front-end Developer buidling exceptional user experiences.
        </p>
      </Layout>
    </main>
  );
};
export const Head = () => (
  <>
    <title>About DSG | Web Artisan</title>
    <meta name="description" content="Your description" />
  </>
);
export default AboutPage;
