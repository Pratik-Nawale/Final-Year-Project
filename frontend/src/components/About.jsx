import React from "react";
import styled from "styled-components";
import bg from "../assets/img_9.webp";
import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import H2 from "./reusable/H2";
import Paragraph from "./reusable/Paragraph";
import WithBarTitle from "./reusable/WithBarTitle";

export default function About() {
  return (
    <Container>
      <Left>
        <Image src={bg} alt="Gym Background" />
      </Left>
      <Right>
        <WithBarTitle title="About AI-FITNESS and Sports in AI" />
        <H1 color="#2c234d">
          TRANSFORMATIVE FITNESS EXPERIENCES POWERED BY AI AND SPORTS ANALYTICS!
        </H1>

        <H2>
          AI-FITNESS and Sports in AI offer versatile and convenient solutions
          for your fitness journey. Choose from a range of layouts and elements,
          tailored to your preferences, with endless customization options.
          Achieve your fitness goals with pixel-perfect precision.
        </H2>

        <Paragraph>
          Experience the flexibility of AI-FITNESS and the analytical insights
          of Sports in AI. Our multipurpose layouts adapt to your needs,
          providing a seamless and purposeful fitness experience.
        </Paragraph>

        <Button style={{ marginTop: 30 }}>Join Us</Button>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  width: 45%;
`;

const Image = styled.img`
  width: 70%;
  height: 80%;
`;
