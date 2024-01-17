import React from "react"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    action?: () => void
}

export const Button = ({action, children, ...rest} : ButtonProps) => {
    return (

        <button onClick={action} className='a black w-100' {...rest}>
            {children}
        </button>
        )
}