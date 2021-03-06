import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Flex } from 'rebass'
import Footer from '../components/Footer'
import HeaderBanner from '../components/Header/Banner'
import NavigationBar from '../components/Header/NavigationBar'
import Providers from '../components/_provider'

function MyApp({ Component, pageProps }: AppProps) {
  return <Providers>
    <Flex flexDirection="column" justifyContent="center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBanner
        text='We are giving $DAO for free now. Go and Claim your $DAO now!'
        action={{ link: '/dashboard', text: 'Get $DAO' }}
      />
      <NavigationBar
        navigations={[
            { name: 'Home', href: '/', },
            { name: 'Wallet', href: '/wallet', },
            { name: 'Transfer', href: '/wallet/transfer', },
            { name: 'Token', href: '/token', },
            { name: 'Swap', href: '/swap', },
            { name: 'DApps', href: '/dapp', },
        ]}
        />

      {/* inject page content here */}
      <Component {...pageProps} />

      <Footer>{[
        {
          name: 'About',
          link: '/about'
        },
        {
          name: 'FAQ',
          link: '/faq'
        },
        {
          name: 'Meta CMS',
          link: '#'
        },
        {
          name: 'Meta Network',
          link: '#'
        },
        ]}</Footer>
    </Flex>
  </Providers>
}

export default MyApp
