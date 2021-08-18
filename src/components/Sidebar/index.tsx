import { useRouter } from "next/dist/client/router";
import React, { ReactNode } from "react";
import { useMemo } from "react";

type MenuItem = {
    name: string;
    icon?: (...args: any[]) => ReactNode;
    url: string;
}
interface SidebarProps {
    children: ReactNode;
    menuItems: MenuItem[];
}

export default function Sidebar({ children, menuItems }: SidebarProps) {
    const router = useRouter()
    const computedMenus = useMemo(() => {
        return menuItems.map(item => {
            const isCurrentRoute = router.pathname === item.url
            const baseStyle = 'w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent'
            const style = `${baseStyle} ${isCurrentRoute ? 'text-black-400 border-l-4 border-purple-500' : 'text-gray-400'}`
            return { ...item, isCurrentRoute, style }
        })
    }, [menuItems])

    return <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
            <div className="h-screen hidden lg:block shadow-lg relative w-80">
                <div className="bg-white h-full dark:bg-gray-700">
                    <div className="flex items-center justify-start pt-6 ml-8">
                        <p className="font-bold dark:text-white text-xl">
                            Wallet
                        </p>
                    </div>
                    <nav className="mt-6">
                        <div>
                            { computedMenus.map(item => (
                                <a
                                    key={item.url}
                                    className={item.style} href={item.url}>
                                    <span className="text-left">
                                        {item.icon}
                                    </span>
                                    <span className="mx-2 text-sm font-normal">
                                        {item.name}
                                    </span>
                                </a>)
                            ) }
                        </div>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col w-full md:space-y-4 py-8">
                <div className="pb-24 px-4 md:px-6">
                    { children }
                </div>
            </div>
        </div>
    </main>
}