import React, { useEffect, useRef } from "react";
import Layout from '../components/Layout';
import TextIntro from "../components/TextIntro";
import gsap from "gsap";

// markup
const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {
    gsap.to('.hometex', {
      autoAlpha: 1,
      duration: 1,
    });
  }, []) //First Time Site is opened;

  useEffect(() =>{
    if (transitionStatus === 'entering') {
      gsap.to('.hometex', {
        autoAlpha: 1,
        duration: 1, // if entering the page make .hometex visible
      })
    }

    if (transitionStatus === 'exiting') {
      gsap.to('.hometex', {
        autoAlpha: 0,
        duration: 1, // if entering the page make .hometex visible
      })
    }
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
        x: -200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.from(odd, {
        duration: 0.5,
        x: 200 * direction,
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
        x: -200 * direction,
        opacity: 0,
        delay: 0.05,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      });

      gsap.to(odd, {
        duration: 0.5,
        x: 200 * direction,
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
    <Layout>
      <div className="container">
        <div className="text-8xl uppercase font-black text-rajah max-w-4xl">
          <TextIntro />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage