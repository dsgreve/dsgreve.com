import React from "react";

function GradientCircle(props) {
  return (
    <div>
      <svg
        width="300"
        height="299"
        viewBox="0 0 300 299"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="150" r="150" fill="url(#paint0_linear_2_3)" />
        <defs>
          <linearGradient
            id="paint0_linear_2_3"
            x1="150"
            y1="0"
            x2="150"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9AC53" />
            <stop offset="1" stop-color="#F62E97" stop-opacity="0.983594" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default GradientCircle;
