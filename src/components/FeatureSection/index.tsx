/* This example requires Tailwind CSS v2.0+ */
import { SVGProps } from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  background: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const FeaturesContainer = styled.div`
  margin-top: 2.5rem;
`

const FeatureIconContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background: rgb(99, 102, 241);
  color: white;
  border-radius: 0.375rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
`

const FeatureNameContainer = styled.p`
  margin-left: 4rem;
`
const FeatureDescriptionContainer = styled.dd`
  margin-top: 0.5rem;
  margin-left: 4rem;
`

type FeatureSectionParams = {
    titleLabel?: string;
    title: string;
    description: string;
    children: Array<{
        name: string;
        description: string;
        icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    }>
}


export default function FeatureSections({
    titleLabel = "",
    title,
    description,
    children = []
}: FeatureSectionParams) {
  return (
    <Frame>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{ titleLabel }</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            { title }
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            { description }
          </p>
        </div>

        <FeaturesContainer>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {children.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <FeatureIconContainer className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon aria-hidden="true" width="1.5rem" height="1.5rem" />
                  </FeatureIconContainer>
                  <FeatureNameContainer>{feature.name}</FeatureNameContainer>
                </dt>
                <FeatureDescriptionContainer className="mt-2 ml-16 text-base text-gray-500">{feature.description}</FeatureDescriptionContainer>
              </div>
            ))}
          </dl>
        </FeaturesContainer>
      </div>
    </Frame>
  )
}
