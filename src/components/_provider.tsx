import React from "react"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"
import preset from '@rebass/preset'
import { GlobalStyle } from "../theme"

const Providers: React.FC = ({ children }) => (
    <>
        <GlobalStyle />
        <RecoilRoot>
            <ThemeProvider theme={preset}>
                {children}
            </ThemeProvider>
        </RecoilRoot>
    </>
)
export default Providers
