import React from "react";
import Layout from '../components/Layout';
import TextIntro from "../components/TextIntro";
//import BrowserDsk from "../assets/Browser__desktop";
//import GradientCircle from "../assets/Gradient__circle";


// markup
const IndexPage = ({ transitionStatus }) => {
  return (
    <Layout>
      <div className="container my-20 flex justify-center">
        <div className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-rajah max-w-3xl">
          <TextIntro />
          <br />
          Developer,
          <br /> Based in
          <br />
          Michigan&nbsp;<span className="rotate-12">✋</span>
        </div>
      </div>
      <div className="container flex">
        <div className="md:w-1/2 ml-auto">
          <p className="text-rajah text-xl">
            I create websites and apps using modern development techniques that
            are user friendly and blazing fast. I am usually working with
            agencies, startups, brands, associations and other freelancers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage