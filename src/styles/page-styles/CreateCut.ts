import styled from "styled-components";

export const Container = styled.div`
 

 form{
   margin-top: 6rem;
   overflow-x: hidden;
   label{
    white-space: nowrap;
   }

 }
  
  .youtube-link-container {
    margin: 0.5rem 0;
    width: 100%;
    display: flex;
    gap: 1rem;
    border: 1px solid ${(props) => props.theme.colors.white200};
    border-radius: 9px;
    padding: 1rem 1rem;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
    }
    input {
      background-color: transparent;
      border: none;
      width: 100%;
      outline: none;
      color: #fff;
    }
  }

  .container-buttons{
      margin-left: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      max-width: 300px;
      gap: 3rem;
      button{
          width: 60%;
      }
  }

  .cut {
      margin-top: 1.5rem;
      animation-duration: 1s;
    animation-name: slidein;
    > div {
        margin-top: 0.5rem;
      background-color: ${(props) => props.theme.colors.secondary_background};
      padding: 1rem 1rem;
      display: flex;

      border-radius: 15px;
      gap: 1rem;

      textarea{
        height: 100%;
        resize: none;
        }
      > section {
        width: 100%;
      }
      > section:first-child {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        > div {
          display: flex;
          justify-content: space-between;
        }
      }
      > section:last-child {
        >div{
            height: 100%;
            max-width: 100%;
        }
      }

    }
  }

  @keyframes slidein {
    from {
      margin-left: 90vw;
    }

    to {
      margin-left: 0px;
    }
  }

  @media (max-width: 768px) {
      
    .cut {
      > div {
        flex-direction: column;
        align-items: center;
        > section:last-child {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      
    }
  }
`;
