import styled from "styled-components";

export const Container = styled.div`
  > main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: -webkit-fill-available;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 600px;
      h2 {
        margin-top: -10px;
      }
      p {
        margin-top: -5px;

        text-align: center;
        max-width: 300px;
      }
      button {
        margin-top: 5rem;
        min-width: 300px;
      }
    }
  }

  .gradient-purple-bottom-left {
    background: linear-gradient(116.14deg, #ef4584 15.14%, #4285f4 86.85%);
    width: 25rem;
    height: 25rem;
    max-width: 40vw;
    max-height: 40vw;
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
    max-width: 30vw;
    max-height: 30vw;
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
    max-width: 35vw;
    max-height: 35vw;
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
    max-width: 35vw;
    max-height: 35vw;
    border-radius: 1000px;
    position: fixed;
    right: -2%;
    top: calc(10vw / 5);
    z-index: -1;
  }
`;
