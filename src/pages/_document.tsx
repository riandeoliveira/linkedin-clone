import { Head, Html, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Clone da página de perfil do LinkedIn." />
        <meta name="keywords" content="React, Next.js, TypeScript" />
        <meta name="author" content="Rian Oliveira" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
