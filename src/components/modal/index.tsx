import { ReactNode } from "react"
import { ModalContainer, ModalDiv } from "./style"
import { FaArrowLeft } from "react-icons/fa6";

type ModalProps = {
    children: ReactNode
    handleClose: () => void
    show: boolean
}

export const Modal = ({ children, handleClose, show }: ModalProps) => {

    return (
        <ModalDiv $block={show ? "block" : "none"}>
            <ModalContainer>
                <button
                    onClick={handleClose}>
                    <FaArrowLeft size={22} />
                </button>
                {children}
            </ModalContainer>
        </ModalDiv>
    )
}
