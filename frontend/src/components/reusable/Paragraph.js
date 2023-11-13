import React from "react";
import styled from "styled-components";

export default function Paragraph({ children, color }) {
  return <Title color={color}>{children}</Title>;
}

const Title = styled.p`
  font-size: 18px;
  font-weight: 100;
  line-height: 1.6;
  color: ${(props) => props.color || "#212025"};
`;
