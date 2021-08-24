/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon as BaseSpeakerphoneIcon, XIcon as BaseXIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Flex, Button as RebassButton } from 'rebass'
import styled from 'styled-components'
import { ScreenReaderOnly } from '../../accessibility'

const BannerFrame = styled.div`
  background: rgb(79, 70, 229);
`

const BannerRow = styled.div`
  margin: 0 auto;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
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

const SpeakerphoneIconContainer = styled.span`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: rgb(55, 48, 163);
`

const SpeakerphoneIcon = styled(BaseSpeakerphoneIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`

const GetDAOContainer = styled.div`
  margin-top: 0.5rem;
  flex-shrink: 0;
  width: 100%;
  order: 3;

  @media (min-width: 640px) {
    margin-top: 0;
    order: 2;
    width: auto;
  }
`

const GetDAOLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: white;
  border: white 1px solid;
  border-radius: 0.375rem;
`;

const CloseButtonContainer = styled.div`
  flex-shrink: 0;
  order: 2;
  @media (min-width: 640px) {
    margin-left: 0.75rem;
    order: 3;
  }
`

const CloseButton = styled(RebassButton)`
  display: flex;
  padding: 0.5rem;
  background: transparent;

  :hover {
    background: rgba(99, 102, 241);
  }

  > * {
    user-select: none;
  }
`

const XIcon = styled(BaseXIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`

type HeaderBannerProps = {
    text: string;
    action: {
        text: string;
        link: string;
    },
    closeDisabled?: boolean;
}

export default function HeaderBanner({ text, action, closeDisabled }: HeaderBannerProps) {
  const [ isOpen, toggleSwitch ] = useState(true)

  if (!isOpen) {
      return <></>
  }

  return (
    <BannerFrame>
      <BannerRow>
        <Flex alignItems="center" justifyContent="space-between" flexWrap="wrap">
          <Flex flex="1 1 0%" alignItems="center" width="0">
            <SpeakerphoneIconContainer>
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </SpeakerphoneIconContainer>
            <p style={{ marginLeft: "0.75rem", color: "white" }}>
              <span className="inline">{text}</span>
            </p>
          </Flex>
          <GetDAOContainer>
            <GetDAOLink href={action.link}>
              { action.text }
            </GetDAOLink>
          </GetDAOContainer>
          { !closeDisabled &&
            <CloseButtonContainer>
                <CloseButton
                onClick={() => toggleSwitch(false) }
                type="button"
                >
                <ScreenReaderOnly>Dismiss</ScreenReaderOnly>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </CloseButton>
            </CloseButtonContainer>
        }
        </Flex>
      </BannerRow>
    </BannerFrame>
  )
}
