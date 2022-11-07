import React from "react"

export const  Button = ({type, children, onClick}) => (
    <button type={type === undefined ? "button": type} className='dark:bg-[var(--color-primary-container-dark)] bg-[var(--color-secondary-container-light)] w-40 font-bold rounded-sm dark:text-[var(--color-primary-dark)] text-[var(--color-primary-light)]'  onClick={onClick}>{children}</button>
)