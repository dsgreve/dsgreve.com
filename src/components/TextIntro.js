import React from "react";
import styled, { keyframes } from "styled-components";

const TextIntro = () => {
  const frontEndArray = "Front-End".split("")

  return (
    <>
      <SingleText>
        {frontEndArray.map((item, index) => (
          <span key={index}>{item}</span>
        ))}{" "}
      </SingleText>
      <Wrapper>Developer,<br/> Based in Michigan ✋</Wrapper>
    </>
  );
}

const introAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); filter: blur(10px) }
  100% { opacity: 1; transform: translateY(0); filter: blur(0) }
`;

const singleAnimation = keyframes`
  0% { opacity: 0; filter: blur(10px) }
  100% { opacity: 1; filter: blur(0) }
`;

const Wrapper = styled.span`
  display: inline-block;
  opacity: 0;
  animation-name: ${introAnimation};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;

const SingleText = styled.span`
  display: inline-block;
  span {
    opacity: 0;
    animation-name: ${singleAnimation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  span:nth-child(1) {
    animation-delay: 1.5s;
  }
  span:nth-child(2) {
    animation-delay: 1.7s;
  }
  span:nth-child(3) {
    animation-delay: 1.9s;
  }
  span:nth-child(4) {
    animation-delay: 2.1s;
  }
  span:nth-child(5) {
    animation-delay: 2.3s;
  }
  span:nth-child(6) {
    animation-delay: 2.5s;
  }
  span:nth-child(7) {
    animation-delay: 2.5s;
  }
  span:nth-child(8) {
    animation-delay: 2.5s;
  }
  span:nth-child(9) {
    animation-delay: 2.5s;
  }
`;

export default TextIntro
