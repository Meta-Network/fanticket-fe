import React, { useState } from 'react'
import Head from 'next/head'
import NavigationBar from '../components/Header/NavigationBar'
import HeaderBanner from '../components/Header/Banner'
import Modal from '../components/Modal/Modal'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import FeatureSections from '../components/FeatureSection'
import LandingSection from '../components/LandingSection'
import { Flex } from 'rebass'

export default function Home() {
  const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: GlobeAltIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: ScaleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Mobile notifications',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AnnotationIcon,
    },
  ]
  const [modalV, setModalV] = useState(false)
  return (
      <Flex as="main" flex="1 1 0%" alignItems="center" justifyContent="center" flexDirection="column" width="100%" textAlign="center">
        <LandingSection />
        <button
            type="button"
            className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white"
            onClick={() => setModalV(true)}> Open Modal </button>

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

        <FeatureSections
          title="Social Token made easy?"
          description="We host wallets and tokens for you, so that you do not need a Wallet apps or Browser extensions."
          titleLabel="Fan Ticket">
          { features }
        </FeatureSections>
      </Flex>
  )
}
