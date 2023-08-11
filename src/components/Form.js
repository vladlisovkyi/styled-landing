import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";

const StyledForm = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;
  border: 3px solid #e1ebfa;
  border-radius: 5px;
  background: #f2f6fc;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: gray;
    font-size: 0.8rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid transparent;
    border-radius: 12px;
    outline: none;
    margin-top: 0.25rem;
    transition: all 150ms ease-in;

    &:focus {
      border-color: var(--primary);
    }
  }

  textarea {
    resize: vertical;
    height: 100px;
  }
`;

const Form = () => {
  return (
    <>
      <Title title={"Contact Us"} />
      <StyledForm>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Your email"
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Your message"
        ></textarea>

        <Button title={"Submit"} />
      </StyledForm>
    </>
  );
};

export default Form;
