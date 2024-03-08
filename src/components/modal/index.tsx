import { ReactNode } from "react"
import * as S from "./style"
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
                <S.ModalDiv >
                    <S.ModalContainer>
                        <header>
                            <button
                                onClick={handleClose}>
                                <FaArrowLeft size={22} />
                            </button>
                        </header>
                        {children}
                    </S.ModalContainer>
                </S.ModalDiv>
            )}
        </>
    )
}
