import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Header } from '../components/header/Header'
import { store } from '../redux/app/store'
import './../styles/reset.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />

      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;