import { ReactNode } from "react"
import { ModalContainer, ModalDiv } from "./style"
import { FaArrowLeft } from "react-icons/fa6";

type ModalProps = {
    children: ReactNode
    handleClose: () => void
    isOpen: boolean
}

export const Modal = ({ children, handleClose, isOpen }: ModalProps) => {

    return (
        <>
            {isOpen && (
                <ModalDiv >
                    <ModalContainer>
                        <header>
                            <button
                                onClick={handleClose}>
                                <FaArrowLeft size={22} />
                            </button>
                        </header>
                        {children}
                    </ModalContainer>
                </ModalDiv>
            )}
        </>
    )
}
