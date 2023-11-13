import React from "react";
import styled from "styled-components";

export default function H2({ children, color }) {
  return <Title color={color}>{children}</Title>;
}

const Title = styled.h4`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.6;
  margin: 20px 0px;
  color: ${(props) => props.color || "#212025"};
`;
