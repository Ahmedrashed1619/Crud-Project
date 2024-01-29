import { ButtonHTMLAttributes, ReactNode } from "react";

export default interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className: string,
    width?: 'w-full' | 'w-fit'
}