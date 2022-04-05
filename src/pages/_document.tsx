import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
// eslint-disable-next-line react/display-name
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // eslint-disable-next-line react/display-name
      ctx.renderPage = () =>
        // eslint-disable-next-line react/display-name
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <title>CutCast</title>

            <link rel="preconnect" href="https://fonts.googleapis.com" />

            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
              rel="stylesheet"
            ></link>
            <meta
              name="description"
              content="Otimize seu tempo e foque no que é importante. Cutcast é a ferramenta certa para você"
            />

            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="515" />
            <meta property="og:image:height" content="515" />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
