import React from 'react';

type FooterProps = {
    children?: Array<{
        name: string;
        link: string;
    }>;
}
  
export default function Footer({ 
    children = [],
  }: FooterProps) {
    return <footer className="bg-white dark:bg-gray-800 w-full py-8">
        <div className="max-w-screen-xl mx-auto px-4">
            <div>
                <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-around items-center">
                    <p>Related: </p>
                    {
                        children.map((item, idx) => <li className="my-2" key={idx}>
                            <a 
                                href={item.link}
                                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                                {item.name}
                            </a>
                        </li>)
                    }
                </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                ©️ Meta Network All Right Reserved.
            </div>
        </div>
    </footer>
}
