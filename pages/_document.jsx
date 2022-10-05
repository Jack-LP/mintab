import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Manrope:200,300,regular,500,600,700,800&display'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Space+Mono:regular,italic,700,700italic&display'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
