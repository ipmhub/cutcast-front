import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  max-height: -webkit-fill-available;

  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .login {
    padding: 1rem;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    > p {
      color: ${(props) => props.theme.colors.white500};
      margin: auto;
    }
    > section {
      h1 {
        font-size: 2.5rem;
        line-height: 47px;
      }
      > p {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.white500};
      }
    }
  }

  .sign-with-google {
    background: #fff;
    border-radius: 10px;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: filter 0.5s;
    img {
      height: 20px;
      width: 20px;
    }
    > p {
      color: rgba(0, 0, 0, 0.54);
    }
    &:hover {
      filter: brightness(0.8);
    }
  }

  .gradient-purple-bottom-left {
    background: linear-gradient(116.14deg, #ef4584 15.14%, #4285f4 86.85%);
    width: 25rem;
    height: 25rem;
    max-width: 30vw;
    max-height: 30vw;
    border-radius: 1000px;
    position: fixed;
    left: -5%;
    bottom: calc(-30vw / 3);
    z-index: -1;
  }

  .gradient-orange-top-left {
    background: linear-gradient(116.14deg, #ef4584 15.14%, #fac924 86.85%);
    transform: rotate(104.2deg);
    width: 15rem;
    height: 15rem;
    max-width: 25vw;
    max-height: 25vw;
    border-radius: 1000px;
    position: fixed;
    left: -5%;
    top: calc(-30vw / 5);
    z-index: -1;
  }
  .gradient-orange-top-right {
    background: linear-gradient(116.14deg, #ef4584 15.14%, #fac924 86.85%);
    transform: rotate(104.2deg);
    width: 15rem;
    height: 15rem;
    max-width: 25vw;
    max-height: 25vw;
    border-radius: 1000px;
    position: fixed;
    right: -8%;
    top: calc(-30vw / 4);
    z-index: -1;
  }

  .gradient-black-bottom-left {
    background: linear-gradient(180deg, #151515 0%, #21212b 100%);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    transform: rotate(-152.62deg);
    width: 20rem;
    height: 20rem;
    max-width: 30vw;
    max-height: 30vw;
    border-radius: 1000px;
    position: fixed;
    left: -5%;
    bottom: calc(20vw / 5);
    z-index: -1;
  }
  .gradient-black-top-right {
    background: linear-gradient(180deg, #151515 0%, #21212b 100%);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    transform: rotate(-152.62deg);
    width: 10rem;
    height: 10rem;
    max-width: 30vw;
    max-height: 30vw;
    border-radius: 1000px;
    position: fixed;
    right: -2%;
    top: calc(10vw / 5);
    z-index: -1;
  }
`;
