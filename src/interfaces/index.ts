import { ButtonHTMLAttributes, ReactNode } from "react";

export default interface IProductProps {
    id?: string | undefined,
    title: string,
    description: string,
    imageURL: string,
    price: string,
    colors: string[],
    category: {
        name: string,
        imageURL: string
    },
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className: string,
    width?: 'w-full' | 'w-fit'
}

export interface IImageProps {
    imageUrl: string,
    alt: string,
    className: string
}

export interface IColorProps {
    className: string
}

export interface IModalProps {
    isOpen: boolean,
    closeModal: () => void,
    title: string,
    children: ReactNode
}

export interface IFormProps {
    id: string,
    name: string,
    label: string,
    type: string
}