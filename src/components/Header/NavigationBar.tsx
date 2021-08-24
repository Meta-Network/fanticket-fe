/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon as BaseBellIcon, MenuIcon as BaseMenuIcon, XIcon as BaseXIcon } from '@heroicons/react/outline'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { ScreenReaderOnly } from '../../accessibility'

const NavigationBarRow = styled.div`
  margin: 0 auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  max-width: 80rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const MenuIcon = styled(BaseMenuIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`
const XIcon = styled(BaseXIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`
const BellIcon = styled(BaseBellIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`

const NavigationBarContentContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 640px) {
    align-items: stretch;
    justify-content: start;
  }
`

const BaseLogo = styled.img`
  height: 2rem;
  width: auto;
`

const Logo = styled(BaseLogo)`
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
`
const LogoWithText = styled(BaseLogo)`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`

const NavigationItemContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    margin-left: 1.5rem;
  }
`

const BaseLinkItem = styled.a`
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
`

const LinkItem = styled(BaseLinkItem)`
  color: rgb(209, 213, 219);

  :hover {
    background: rgb(55, 65, 81);
    color: white;
  }
`
const ActiveLinkItem = styled(BaseLinkItem)`
  background: rgb(17, 24, 39);
  color: white;
`

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 640px) {
    margin-left: 1.5rem;
    padding-right: 0;
  }
`

const AvatarContainer = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`

interface NavBarProps {
  navigations: { name: string; href: string }[]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationBar({ navigations }: NavBarProps) {
  const router = useRouter();

  const computedNavigation = useMemo(() => {
    return navigations.map(n => {
      const current = router.pathname === n.href;
      return {...n, current}
    })
  }, navigations)
  return (
    <Disclosure as="nav" style={{ background: "rgb(31, 41, 55)" }}>
      {({ open }) => (
        <>
          <NavigationBarRow>
            <Flex height="4rem" alignItems="center" justifyContent="space-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" style={{ display: "none" }}>
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <ScreenReaderOnly>Open main menu</ScreenReaderOnly>
                  {open ? (
                    <XIcon aria-hidden="true" />
                  ) : (
                    <MenuIcon aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <NavigationBarContentContainer>
                <Flex alignItems="center" flexShrink={0}>
                  <Logo
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <LogoWithText
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </Flex>
                <NavigationItemContainer>
                  <div className="flex space-x-4">
                    {computedNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        passHref>
                        {item.current ? <ActiveLinkItem aria-current="page">{item.name}</ActiveLinkItem> : <LinkItem>{item.name}</LinkItem>}
                      </Link>
                    ))}
                  </div>
                </NavigationItemContainer>
              </NavigationBarContentContainer>
              <UserInfoContainer>
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <ScreenReaderOnly>View notifications</ScreenReaderOnly>
                  <BellIcon aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <ScreenReaderOnly>Open user menu</ScreenReaderOnly>
                      <AvatarContainer
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </UserInfoContainer>
            </Flex>
          </NavigationBarRow>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {computedNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                >
                  <a
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
