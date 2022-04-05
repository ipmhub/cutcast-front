import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import dark from "../styles/theme/dark";
import GlobalStyle from "../styles/globals";
import { AuthContextProvider } from "../Context/AuthContext";

var getTheme = dark;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div id="root">
      <ThemeProvider theme={dark}>
        <AuthContextProvider>
          <GlobalStyle />

          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
