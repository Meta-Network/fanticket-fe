import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

const FooterFrame = styled.footer`
  background: white;
  width: 100%;
  padding: 0 2rem;
`

const FooterInnerContainer = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

const FooterLink = styled.a`

`

const CopyrightText = styled.div`
  padding-top: 2.5rem;
  text-align: center;
  @media (min-width: 640px) {
    padding-top: 3rem;
  }
`

type FooterProps = {
    children?: Array<{
        name: string;
        link: string;
    }>;
}

export default function Footer({
    children = [],
  }: FooterProps) {
    return <FooterFrame>
        <FooterInnerContainer>
            <div>
                <Flex as="ul" alignItems="center" justifyContent="space-around" maxWidth="768px" marginLeft="auto" marginRight="auto">
                    <p>Related: </p>
                    {
                        children.map((item, idx) => <li key={idx} style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                            <a
                                href={item.link}
                                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                                {item.name}
                            </a>
                        </li>)
                    }
                </Flex>
            </div>
            <CopyrightText className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                ©️ Meta Network All Right Reserved.
            </CopyrightText>
        </FooterInnerContainer>
    </FooterFrame>
}
