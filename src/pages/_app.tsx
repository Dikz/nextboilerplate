import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Simple Boilerplate" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
