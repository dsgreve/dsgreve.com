import React from "react";
import styled from "styled-components";

const TextIntro = () => {
   return (
    <Wrapper>
      <span>Front-end</span>
    </Wrapper>
  );
}


// tell wrapper which animation to use.
const Wrapper = styled.span`
  animation-name: intro;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  display: inline-block;
  opacity: 0;
`;

export default TextIntro
