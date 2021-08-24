import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";

const Frame = styled.div`
  background: rgb(49, 46, 129);
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: left;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.25;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`

const ContentInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 10;
`

const DiscoverLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: white;
  border: white 1px solid;
  border-radius: 0.375rem;
`;

export default function LandingSection() {
  return <Frame>
    <Image src="https://www.tailwind-kit.com/images/landscape/5.svg" />
    <Mask />
    <ContentContainer>
      <ContentInnerContainer>
        <span className="font-bold uppercase text-yellow-400">
          Fan Ticket
        </span>
        <h1 style={{ fontSize: "4.5rem" }}>
          Social Token
          <br />
          made simple.
        </h1>
        <DiscoverLink>
          Discover
        </DiscoverLink>
      </ContentInnerContainer>
    </ContentContainer>
  </Frame>
}
