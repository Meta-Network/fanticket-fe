import { ArrowRightIcon, HomeIcon } from "@heroicons/react/outline";
import React, {  } from "react";
import Sidebar from "../../components/Sidebar";

export default function WalletPageSidebar({ children }: React.ComponentProps<any>) {
    return <Sidebar
            menuItems={[
                {
                    name: 'My Wallet',
                    url: '/wallet',
                    icon: HomeIcon
                },
                {
                    name: 'Transfer',
                    url: '/wallet/transfer',
                    icon: ArrowRightIcon
                },
            ]}
            >
                {children}
    </Sidebar>
}