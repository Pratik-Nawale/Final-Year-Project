import React from "react";
import styled from "styled-components";
import bg from "../assets/img_1.jpg";
import { servicesData } from "../data/localData";
import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import WithBarTitle from "./reusable/WithBarTitle";

export default function Services() {
  return (
    <Container>
      <InnerContainer>
        <Box>
          <WithBarTitle title="Our Services for you" />
          <Header>
            <H1 style={{ width: "50%", fontSize: 40 }}>
              PUSH YOUR LIMITS FORWARD WE OFFER TO YOU
            </H1>
            <Button>More Services</Button>
          </Header>
          <Cards>
            {servicesData?.map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <Card item={_} />
                </React.Fragment>
              );
            })}
          </Cards>
        </Box>
      </InnerContainer>
    </Container>
  );
}

export function Card({ item }) {
  return (
    <MyCard>
      <Icon>{item.icon}</Icon>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </MyCard>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;

const InnerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 75%;
  height: 75%;
`;

const Header = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const MyCard = styled.div`
  width: 30%;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #212025;
`;

const Icon = styled.span`
  font-size: 40px;
`;
const Title = styled.h3`
  font-size: 30px;
  text-align: center;
  margin: 30px 0px;
  font-weight: 400;
`;
const Description = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 200;
`;
