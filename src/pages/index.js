import React from "react";
import Layout from '../components/Layout';

// markup
const IndexPage = ({ transitionStatus }) => {
  return (
    <Layout>
      <div className="container my-20 flex flex-col justify-center">
        <h1 className="text-xl2 md:text-4xl lg:text-6xl font-bold text-white max-w-3xl mb-4">
          Front-end Developer
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-purple-400 max-w-3xl">
          Creativity Through Code
        </h2>
      </div>

      <div className="container flex">
        <div className="md:w-1/2">
          <p className="text-white text-xl">
            Creating amazing web and product experiences.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage