import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { Header } from '../components/header/Header'
import { store } from '../redux/app/store'
import './../styles/reset.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />

      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;