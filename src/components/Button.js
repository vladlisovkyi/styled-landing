import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: 12px 26px;
  border-radius: 0.75rem;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--button);
  outline: none;
  border: none;
  transition: all 200ms ease-in;
  color: #fff;
  cursor: pointer;
  &.mt5rem {
    margin-top: 5rem;
  }
  &:hover {
    background: var(--button-hover);
  }
`;

const Button = ({ title, onClick, classes }) => {
  return (
    <StyledButton className={classes} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;
