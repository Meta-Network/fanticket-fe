import React from "react"
import { RecoilRoot } from "recoil"


const Providers: React.FC = ({ children }) => (
    <RecoilRoot>
        {children}
    </RecoilRoot>
)
export default Providers
