import React from "react";
import { GiGymBag } from "react-icons/gi";
import styled from "styled-components";

export default function Logo() {
  return (
    <Box>
      <Img>
        <GiGymBag />
      </Img>
      <Title>FITNESS</Title>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Img = styled.p`
  font-size: 22px;
  color: white;
  background: red;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
const Title = styled.p`
  font-size: 36px;
  color: white;
`;
