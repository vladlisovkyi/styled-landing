import React from "react";
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem 5%;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  text-align: center;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>All rights reserved</p>
    </StyledFooter>
  );
};

export default Footer;
