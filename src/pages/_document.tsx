import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { palette } from '@/styles/palette';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <App {...props} />
            ),
        });
      };

      const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        lang='ko'
      >
        <Head>
          <meta
            charSet='utf-8'
          />

          <meta
            httpEquiv='Content-Type'
            content='text/html; charset=utf-8'
          />

          <meta
            httpEquiv='Content-Type'
            content='text/xml; charset=utf-8'
          />

          <meta
            httpEquiv='X-UA-Compatible'
            content='IE=edge'
          />

          <meta
            name='referrer'
            content='no-referrer-when-downgrade'
          />

          <meta
            name='theme-color'
            content={palette.main}
          />

          <meta
            name='msapplication-TileColor'
            content={palette.main}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;