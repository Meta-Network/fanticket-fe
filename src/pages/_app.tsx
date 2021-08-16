import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'tailwindcss/tailwind.css'
import HeaderBanner from '../components/Header/Banner'
import NavigationBar from '../components/Header/NavigationBar'
import Providers from '../components/_provider'

function MyApp({ Component, pageProps }: AppProps) {
  return <Providers>
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBanner 
        text='We are giving $DAO for free now. Go and Claim your $DAO now!'
        action={{ link: '/dashboard', text: 'Get $DAO' }}
      />
      <NavigationBar />
      
      {/* inject page content here */}
      <Component {...pageProps} />

      <footer className="flex items-center justify-center w-full h-24 border-t">
          Meta Network All Right Reserved.
      </footer>
    </div>
  </Providers>
}

export default MyApp
