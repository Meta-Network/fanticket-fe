import React, { useMemo } from "react";

interface NumberInputProps extends Omit<React.ComponentProps<'input'>, 'className' | 'number'> {
    isFullWidth?: boolean;
}

export function NumberInput(props: NumberInputProps) {
    const computedClassName = useMemo(() => {
        let className = 'focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded sm:text-sm border-gray-300'
        if (props.isFullWidth) className += 'w-full '
        return className;
    }, [props])
    return <input 
        className={computedClassName}
        type="number"
        {...props} />
}