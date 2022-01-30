import React, { useEffect, useState } from "react";
import { useInterval } from 'react-use';
import styled, { keyframes } from "styled-components";

const TextIntro = () => {
  const textArray = ['Wordpress', 'React', 'Front-end'];
  const [items, setItems] = useState(textArray[2]);
  const [count, setCount] = useState(1);
  const [play, setPlay] = useState(false); // used to stop animation if not on screen.

  useInterval( 
    () => {
    setItems(textArray[0]);
    setCount(count + 1);

    if (count === 1) {
      setItems(textArray[1]);
      setCount(count + 1);
    }

    if (count === 2) {
      setItems(textArray[2]);
      setCount(0);
    }

  }, play ? 4000 : null); // stops animation when not visible

  useEffect(() => {
    function textArray() {
      const timer = setTimeout(() => {
        setItems(textArray[0]);
        setPlay(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
    textArray();
  }, []);

  return (
    <Wrapper>
      <span key={count}>{items}</span>
    </Wrapper>
  );
}

// call keyframes component from styled components
const animation = keyframes`
  0% { opacity: 0; transform: translateY(-50px); filter: blur(10px) }
  25% { opacity: 1; transform: translateY(0); filter: blur(0) }
  75% { opacity: 1; transform: translateY(0); filter: blur(0) }
  100% { opacity: 0; filter: blur(10px) }
`;
// tell wrapper which animation to use.
const Wrapper = styled.span`
  animation-name: ${animation};
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  display: inline-block;
  opacity: 0;
`;

export default TextIntro
