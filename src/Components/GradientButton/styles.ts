import styled from "styled-components";

export const Container = styled.button`
  background: linear-gradient(116.14deg, #ef4584 15.14%, #fac924 86.85%);
  border-radius: 9px;
  padding: 1.125rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;
  border: none;
  &:hover {
    filter: brightness(0.8);
  }
`;
