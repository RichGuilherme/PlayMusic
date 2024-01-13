import { ReactNode, createContext, useState } from 'react'

interface childrenProps {
    children: ReactNode
}

type IdContextType = {
    idUser: string
    setIdUser: React.Dispatch<React.SetStateAction<string>>
}


export const IdContext = createContext<IdContextType>({
    idUser: "",
    setIdUser: () => { },
})


export function IdContextProvider({ children }: childrenProps) {
    const [idUser, setIdUser] = useState('')

    return (

        <IdContext.Provider value={{ idUser, setIdUser}}>
            {children}
        </IdContext.Provider >

    )

}