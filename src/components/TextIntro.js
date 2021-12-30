import React from "react";
import styled, { keyframes } from "styled-components";

const TextIntro = () => {
  return (
    <Wrapper>
      Frontend Developer, Based in Michigan ✋
    </Wrapper>
  );
}

const introAnitmation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const Wrapper = styled.span`
  opacity: 0;
  animation-name: ${introAnitmation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
`

export default TextIntro
