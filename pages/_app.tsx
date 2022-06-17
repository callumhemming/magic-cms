import '../styles/globals.css'
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Banner from "../components/Banner"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Banner>

  <Component {...pageProps} />
      </Banner>
  </NextUIProvider>
  )
}

export default MyApp
