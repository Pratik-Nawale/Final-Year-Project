import React from "react";
import styled from "styled-components";
import bg from "../assets/img_3.jpg";
import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import WithBarTitle from "./reusable/WithBarTitle";
import { FaPlay } from "react-icons/fa";
import Header from "./Header";
// import myVd from "../assets/vd_1.mp4";

export default function Banner() {
  return (
    <Main>
      {/* <Video poster={bg} autoplay playsinline muted loop>
        <source
          src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4"
          type="video/mp4"
        />
      </Video> */}
      <Header />

      <Container>
        <RightBox>
          <WithBarTitle title="WITH SHRAVAN MEENA" />
          <H1>Build Perfect body shape for good and healthy life.</H1>
          <Button animation="fadeInLeft">Became a member</Button>
        </RightBox>
        <LeftBox>
          <Circle>
            <CircleButton>
              <FaPlay />
            </CircleButton>
          </Circle>
        </LeftBox>
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const RightBox = styled.div`
  width: 50%;

  padding: 0px 100px;
`;

const Circle = styled.div`
  border: 2px solid red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 120px;
  padding: 2px;
  animation: zoomIn;
  animation-duration: 2s;
`;

const CircleButton = styled.button`
  outline: none;
  background-color: red;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;
