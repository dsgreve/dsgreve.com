import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import gsap from "gsap";

const AboutPage = ({ transitionStatus }) => {
  useEffect(() => {
    console.log("About", transitionStatus);
  }, [transitionStatus]);

  let textRefs = useRef([]);
  const textfly = (textRefs, direction) => {
    let even = [];
    let odd = [];
    textRefs.forEach((idx, i) => {
      if (i % 2 === 0) {
        even.push(idx);
      } else {
        odd.push(idx);
      }
    });
    if (direction === 1) {
      gsap.from(even, {
        duration: 0.5,
        y: -200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.from(odd, {
        duration: 0.5,
        y: 200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });
    }
    if (direction === -1) {
      gsap.to(even, {
        duration: 0.5,
        y: -200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.to(odd, {
        duration: 0.5,
        y: 200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });
    }
  };

  useEffect(() => {
    textfly(textRefs.current, 1);
  }, []);
  useEffect(() => {
    if (transitionStatus === "exiting") {
      textfly(textRefs.current, -1);
    }
  }, [transitionStatus]);

  return (
    <Layout pageTitle="About Me">
      <div className="w-full h-full flex justify-center items-center realizzazioni">
        <div id="categories" className="w-full md:w-1/2">
          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
          >
            I'm
          </p>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
          >
            are
          </p>
          <p
            ref={(el) => (textRefs.current[2] = el)}
            className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
          >
            here
          </p>
          <p
            ref={(el) => (textRefs.current[3] = el)}
            className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
          >
            to
          </p>
          <p
            ref={(el) => (textRefs.current[4] = el)}
            className="list-none text-6xl md:text-6xl lg:text-8xl font-bold relative overflow-hidden uppercase transform phrase"
          >
            code
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
