import React from "react";

export function Input(props: React.ComponentProps<'input'>) {
    return <input 
        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300"
        {...props} />
}