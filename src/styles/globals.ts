import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
scroll-behavior: smooth;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    font-size: min(16px) !important;
  }

  ::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: transparent;

  border-radius: 33333px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 33333px;

  background: rgba(255, 255, 255, 0.5);
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.colors.text};

}
.ReactModal__Content {
  opacity: 0 !important;
  transition: all 500ms ease-in-out;
  /* transform: translateX(-300px) !important; */
}

.ReactModal__Content--after-open {
  opacity: 1 !important;
}

.ReactModal__Content--before-close {
  opacity: 0 !important;

}

  html {

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea , button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;

  }

h1{
  font-size: 2rem;

}
h2{
  font-size: 1.5rem;

}
h3{
  font-size: 1.25rem;

}
h4{
  font-size: 1.125rem;

}



  p{
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
    font-size: 1rem;

  }
  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
