import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Ioasys Books</title>
          <meta name="description" content="Ioasys Books, Leitura, Livros" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes"
          />

          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500;600;800&display=swap"
            rel="stylesheet"
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
