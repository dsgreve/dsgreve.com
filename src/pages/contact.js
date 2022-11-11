import React, { useEffect } from "react";
import Layout from "../components/Layout";

const Contact = ({ transitionStatus }) => {
  useEffect(() => {
    console.log("Contact", transitionStatus);
  }, [transitionStatus]);
  return (
    <Layout pageTitle="Get in touch">
      <div className="w-full h-full flex justify-center items-center realizzazioni">
        <div id="categories" className="w-full md:w-1/2">
          <p className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase">
            GET
          </p>
          <p className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase">
            in touch
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
