import { ReactNode } from "react";

export default interface ImodalProps {
    isOpen: boolean,
    closeModal: () => void,
    title: string,
    children: ReactNode
}