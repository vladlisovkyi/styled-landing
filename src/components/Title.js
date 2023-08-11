import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
    margin-top: 2rem;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
    border-radius: 0.5rem;
   margin-top: 0.5rem;
  }
  .title {
    color: blue;
  }
  .box {
    height: 10px;
    border: var(--mainBorder);
  }
`;

export default Title;
