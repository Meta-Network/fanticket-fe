import React from "react"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"
import preset from '@rebass/preset'

const Providers: React.FC = ({ children }) => (
    <RecoilRoot>
        <ThemeProvider theme={preset}>
            {children}
        </ThemeProvider>
    </RecoilRoot>
)
export default Providers
