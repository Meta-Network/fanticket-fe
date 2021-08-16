import React from 'react'
import Head from 'next/head'
import NavigationBar from '../components/Header/NavigationBar'
import HeaderBanner from '../components/Header/Banner'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBanner 
        text={{ short: 'AirDropping 🪂 DAO now', long: 'We are giving $DAO for free now' }}
        action={{ link: '/dashboard', text: 'Get $DAO' }}
      />
      <NavigationBar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
          Meta Network All Right Reserved.
      </footer>
    </div>
  )
}
