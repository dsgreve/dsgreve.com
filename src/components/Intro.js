import React from "react";
import ReactDOM from "react-dom";
//import { StaticImage } from "gatsby-plugin-image"
import DgOutlined from "../assets/dg_outlined"
import DgFilled from "../assets/dg_filled";

const Intro = () => {

  return (
    <div id="introText" className="bg-white w-screen">
      <DgOutlined
        ref={(el) => (textRefs.current[0] = el)}
        className="opacity-50"
      />
      <DgOutlined ref={(el) => (textRefs.current[1] = el)} />
      <DgOutlined ref={(el) => (textRefs.current[2] = el)} />
      <DgFilled
        ref={(el) => (textRefs.current[3] = el)}
        className="opacity-50"
      />
      <DgOutlined ref={(el) => (textRefs.current[4] = el)} />
      <DgOutlined ref={(el) => (textRefs.current[5] = el)} />
      <DgOutlined ref={(el) => (textRefs.current[6] = el)} />
    </div>
  );
}

export default Intro