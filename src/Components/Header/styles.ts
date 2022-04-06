import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.secondary_background};
  position: fixed;
  width: 100vw;
  top: 0;
  main {
    > div {
      position: relative;
      z-index: 1;
      background-color: ${(props) => props.theme.colors.secondary_background};

      display: flex;
      padding: 0.8rem 0rem;

      justify-content: space-between;
      align-items: center;
      .icons {
        width: 25px;
        height: 25px;
        cursor: pointer;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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
  }

  .dropdown {
    position: relative;

    animation-duration: 1s;
    animation-name: slidein-header;
    padding-bottom: 1rem;

    z-index: 0;
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.5rem;
      border-radius: 0.3rem;
      max-width: 300px;
      cursor: pointer;
      > section {
        display: flex;
        align-items: center;
        background-color: ${(props) => props.theme.colors.pink};

        justify-content: center;
        border-radius: 0.3rem;
        padding: 0.5rem;
      }

      &:hover {
        background-color: #ffffff20;
      }
    }
  }

  @keyframes slidein-header {
    from {
      margin-top: -140px;
      height: 0%;
    }

    to {
      margin-top: 0%;
      height: 100%;
    }
  }
`;
