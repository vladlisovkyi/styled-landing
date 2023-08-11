import React from "react";
import styled from "styled-components";

const Card = ({ name, price, img, description }) => {
  return (
    <StyledCard>
      <img src={img} alt="product" loading="lazy" />
      <div>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <p>${price}</p>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  background: var(--white);
  border-radius: 0.25rem;
  padding: 1rem 0.5rem;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 340px;
    border-radius: 0.75rem;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    opacity: 0;
    z-index: 10;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    h3 {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    h4 {
      margin: 1rem;
      color: #7a7a7a;
      font-size: 0.9rem;
    }
    p {
      margin-top: 2rem;
      color: var(--primary);
      font-weight: 700;
    }
  }
  &:hover {
    & > div {
      /* transform: translateY(0); */
      opacity: 1;
    }
  }
  transition: all 0.5s ease-in-out;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export default Card;
