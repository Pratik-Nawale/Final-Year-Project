import React from "react";
import styled from "styled-components";

export default function H1({ children, color, style }) {
  return (
    <Title color={color} style={style}>
      {children}
    </Title>
  );
}

const Title = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  line-height: 1.1;
  margin: 24px 0px;
  color: ${(props) => props.color || "white"};

  animation: fadeInLeft;
  animation-duration: 1.3s;
`;
