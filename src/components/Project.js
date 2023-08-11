import React from "react";
import { styled } from "styled-components";

const StyledProject = styled.section`
  display: flex;
  flex-direction: ${(p) => (p.direction === "row" ? "row" : "row-reverse")};
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
  padding: 3rem 5%;
  background-color: ${(p) => (p.bg ? p.bg : "#fff")};

  img {
    max-width: 50%;
    max-height: 520px;
    border-radius: 1rem;
  }
  p {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }
`;

const Project = ({ children, direction, bg }) => {
  return (
    <StyledProject direction={direction} bg={bg}>
      {children}
    </StyledProject>
  );
};

export default Project;
