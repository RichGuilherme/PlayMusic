
import { useNavigate } from "react-router-dom"
import axiosInstancia from "../../../api/axiosConfig"

import { IoMdCheckmark, IoMdClose } from "react-icons/io"
import { MunuPop } from "../style"

type CreatePlaylistProps = {
  setIsOpen: (any: boolean) => void
}

export const PopCreatePlaylist = ({ setIsOpen }: CreatePlaylistProps) => {
  const navigation = useNavigate()

  const handleConfirmCreate = () => {
    axiosInstancia.post(`playlist/create`)
      .then(value => {
        navigation(`playlist/${value.data._id}`)
      })
      .catch(error => {
        console.log(error)
      })

    setIsOpen(false)
  }

  return (
    <MunuPop>
      <p>Criar nova playlist?</p>

      <div>
        <button onClick={handleConfirmCreate}>
          <IoMdCheckmark size={23} />
          Sim
        </button>

        <button onClick={() => setIsOpen(false)}>
          <IoMdClose size={23} />
          Fechar
        </button>
      </div>
    </MunuPop>
  )
}
