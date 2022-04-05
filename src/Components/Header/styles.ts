import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.secondary_background};

  > div {
    display: flex;
    max-width: 1472px;
    padding: 0.8rem 2rem;
    margin: 0 auto;

    justify-content: space-between;
    align-items: center;
    .icons {
      width: 25px;
      height: 25px;
      cursor: pointer;
      &:hover {
        background-color: "#ffffff20";
      }
    }

    div {
      display: flex;
      gap: 1rem;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        border-radius: 333333px;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;
