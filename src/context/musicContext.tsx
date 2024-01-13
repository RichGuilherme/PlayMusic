import { ReactNode, createContext, useEffect, useState } from 'react'

interface childrenProps {
    children: ReactNode
}

type dataMusicData = {
    _id: string,
    user_id: string,
    title: string,
    artist: string,
    duration: number,
    thumbnail: string,
    storage_url: string,
}

type IdContextType = {
    musicCurrent: dataMusicData[]
    setMusicCurrent: React.Dispatch<React.SetStateAction<dataMusicData[]>>
    currentIndex: number | null
    setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>
    dataListMusic: object
    setDataListMusic: React.Dispatch<React.SetStateAction<object>>
}


export const MusicContext = createContext<IdContextType>({
    musicCurrent: [],
    setMusicCurrent: () => { },
    currentIndex: 0,
    setCurrentIndex: () => { },
    dataListMusic: {},
    setDataListMusic: () => { }
})


export function MusicContextProvider({ children }: childrenProps) {
    const [musicCurrent, setMusicCurrent] = useState<dataMusicData[]>([])
    const [currentIndex, setCurrentIndex] = useState<number | null>(0)
    const [dataListMusic, setDataListMusic] = useState({})

    useEffect(() => {
        if (dataListMusic && dataListMusic.musics) {
            const totalMusics = dataListMusic.musics.length;

            if (totalMusics > 1) {
                let randomNumber;

                do {
                    randomNumber = Math.floor(Math.random() * totalMusics);
                } while (randomNumber === currentIndex);

                console.log(randomNumber);

                const dataTeste = dataListMusic.musics[randomNumber];
            
            }
            // console.log(dataTeste)
        }

        // console.log(currentIndex)
    }, [currentIndex, dataListMusic])

    return (
        <MusicContext.Provider value={{
            musicCurrent,
            setMusicCurrent,
            currentIndex,
            setCurrentIndex,
            dataListMusic,
            setDataListMusic
        }}>
            {children}
        </MusicContext.Provider >

    )

}