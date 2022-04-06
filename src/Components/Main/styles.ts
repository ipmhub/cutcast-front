import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1472px;
  padding: 0px 32px;

  @media (max-width: 1280px) {
    max-width: 1280px;
    padding: 0px 32px;
  }

  @media (max-width: 1024px) {
    max-width: 1024px;
    padding: 0px 24px;
  }
  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0px 16px;
  }
  @media (max-width: 360px) {
    max-width: 360px;
    padding: 0px 16px;
  }
`;
