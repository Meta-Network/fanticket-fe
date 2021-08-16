import React, { useState } from 'react'
import Head from 'next/head'
import NavigationBar from '../components/Header/NavigationBar'
import HeaderBanner from '../components/Header/Banner'
import Modal from '../components/Modal/Modal'

export default function Home() {
  const [modalV, setModalV] = useState(true)
  return (
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

        <Modal 
          visible={modalV} setVisiable={setModalV}
          title="R U sure to Deactivate account?"
          description={`Are you sure you want to deactivate your account? All of your data will be permanently removed.
                        This action cannot be undone.`}
        >
          {(cancelRef) => <>
            <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setModalV(false)}
            >
                  Deactivate
            </button>
            <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setModalV(false)}
                  ref={cancelRef}
            >
                  Cancel
            </button>
          </>}
        </Modal>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
          Meta Network All Right Reserved.
      </footer>
    </div>
  )
}
