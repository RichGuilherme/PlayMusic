import { useDispatch, useSelector } from "react-redux";
import axiosInstancia from "../../../../../../api/axiosConfig";
import { MunuPop } from "./style"
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { setActiveSong } from "../../../../../../redux/features/playerSlice";
import { RootState } from "../../../../../../redux/store";

type popDeleteProps = {
    idMusicDelete: string
    setIsOpen: (any: boolean) => void
} 


export const PopMusicDelete = ({idMusicDelete, setIsOpen}:popDeleteProps) => {
    const { currentIndex, activeSong } = useSelector((state: RootState) => state.player)
    const dispatch = useDispatch()

    const handleConfirmDelete = () => {
        axiosInstancia.delete(`music/delete/?musicId=${idMusicDelete}`)
        .then(res => {
            dispatch(setActiveSong({song: activeSong, data: res.data, i: currentIndex}))
        })
        .catch(error => {
            console.log(error)
        })

        setIsOpen(false)
    }

    return (
        <>
            <MunuPop>
                <p>Tem certeza que quer deletar a música?</p>
                
                <div>
                    <button onClick={handleConfirmDelete}>
                        <IoMdCheckmark size={23} />
                        Sim
                    </button>

                    <button onClick={() => setIsOpen(false)}>
                        <IoMdClose size={23} />
                        Fechar
                    </button>
                </div>
            </MunuPop>
        </>
    )
}
