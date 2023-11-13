import React from "react";
import styled, { keyframes } from "styled-components";

export default function Button({ children, style, animation }) {
  return (
    <BTN className="slide" style={style} animation={animation}>
      {children}
    </BTN>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const BTN = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  padding: 25px;
  background-color: red;
  color: white;
  cursor: pointer;
  animation: ${(props) => props.animation || fadeIn};
  animation-duration: 1s; /* Adjust the duration as needed */
  border-radius: 10px;

  &:hover {
    animation: ${scaleIn} 0.3s ease; /* Adjust the duration and easing as needed */
  }
`;
