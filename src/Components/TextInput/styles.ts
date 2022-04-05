import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 0.5rem;

  label {
    color: ${(props) => props.theme?.colors?.white500 || "#B6B6B6"};
    font-size: 1.25rem;
  }

  input {
    padding: 1rem 1.2rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.white200};
    outline: hidden;
    outline-color: ${(props) => props.theme.colors.pink};
    border-radius: 10px;
    color: ${(props) => props.theme.colors?.white500 || "#B6B6B6"};
    font-size: 1rem !important;
    &::placeholder {
      color: ${(props) => props.theme.colors.white200};
    }
  }

  textarea {
    padding: 1rem 1.2rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.white200};
    outline: hidden;
    outline-color: ${(props) => props.theme.colors.pink};
    border-radius: 10px;
    color: ${(props) => props.theme?.colors?.white500 || "#B6B6B6"};
    font-size: 1rem !important;
    &::placeholder {
      color: ${(props) => props.theme.colors.white200};
    }
  }
`;
