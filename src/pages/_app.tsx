import type { AppProps /*, AppContext */ } from 'next/app'
import React from 'react'
import 'tailwindcss/tailwind.css'
import Providers from '../components/_provider'

function MyApp({ Component, pageProps }: AppProps) {
  return <Providers>
    <Component {...pageProps} />
  </Providers>
}

export default MyApp
