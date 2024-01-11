import { ReactNode, createContext, useState } from 'react'

interface childrenProps {
    children: ReactNode
}

type IdContextType = {
    idUser: string
    setIdUser: React.Dispatch<React.SetStateAction<string>>
    idMusic: idMusicData[]
    setIdMusic: React.Dispatch<React.SetStateAction<string>>
}

type idMusicData = {
    _id: string,
    user_id: string,
    title: string,
    artist: string,
    duration: number,
    thumbnail: string,
    storage_url: string,
}

export const IdContext = createContext<IdContextType>({
    idUser: "",
    setIdUser: () => { },
    idMusic: [],
    setIdMusic: () => { },
})


export function IdContextProvider({ children }: childrenProps) {
    const [idUser, setIdUser] = useState('')
    const [idMusic, setIdMusic] = useState([])

    return (

        <IdContext.Provider value={{ idUser, setIdUser, idMusic, setIdMusic}}>
            {children}
        </IdContext.Provider >

    )

}