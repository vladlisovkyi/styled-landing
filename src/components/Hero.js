import React from "react";
import { styled } from "styled-components";
import Button from "./Button";

const StyledHero = styled.section`
  min-height: 100vh;
  width: 100%;
  background: url("/assets/images/hero.jpg") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > h3 {
    font-size: 3.5rem;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <h3>We make difficult things look easy</h3>
      <Button classes={'mt5rem'} title={'See our projects'}/>
    </StyledHero>
  );
};

export default Hero;
