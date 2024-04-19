import { useEffect, useState } from 'react'
import { CardMusic, List } from '../style'
import { SecondForMin } from '../../../../../utils/SecondForMin'
import { MdDeleteForever } from 'react-icons/md'
import axiosInstancia from '../../../../../api/axiosConfig'
import { useDispatch, useSelector } from "react-redux";
import { activePlay, setActiveSong, songData } from "../../../../../redux/features/playerSlice";
import { RootState } from "../../../../../redux/store";
import { useApiHook } from '../../../../../hooks/useAxios'
import { useParams } from 'react-router-dom'

interface MusicsListProp {
    setIdMusicDelete: (any: string) => void
    setIsOpen: (any: boolean) => void
    IdPlaylist?: string
}

interface MusicData {
    _id: string
    user_id: string
    title: string
    artist: string
    duration: number
    thumbnail: string
    storage_url: string
    __v: number
}

export const Musics = ({ setIdMusicDelete, setIsOpen, IdPlaylist }: MusicsListProp) => {
    const { currentIndex } = useSelector((state: RootState) => state.player)
  
    const dispatch = useDispatch()
   

    const handleDeleteMusic = (idMusic: string) => {
        setIdMusicDelete(idMusic)
        setIsOpen(true)
    }

    const handleMusic = (index: number, song: songData) => {
        dispatch(setActiveSong({ song, data: data?.musics, i: index }))
        dispatch(activePlay(true))
    }

    const { data: dataMusics } = useApiHook<MusicData[]>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: `music/musics/${IdPlaylist}`
    })



    // useEffect(() => {
    //     const controller = new AbortController()

    //     const fetchData = async () => {
    //         try {
    //             const res = await axiosInstancia.get(`music/musics/${IdPlaylist}`, {
    //                 signal: controller.signal
    //             })
    //             setData(res.data)

    //             // Atualizar o state do activeSong com a primeira música, para ativação imediata
    //             if (res.data.musics.length !== 0) {
    //                 if (activeSong._id == "") {
    //                     dispatch(setActiveSong({ song: res.data.musics[0], data: res.data, i: 0 }))
    //                 }
    //             }

    //             console.log(res.data)
    //         } catch (error) {
    //             console.error("Error fetching data:", error)
    //         }
    //     }

    //     fetchData()

    //     return () => {
    //         controller.abort()
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return (
        <List>
            {dataMusics?.musics.map((data, index: number) => (
                
                <CardMusic
                    key={index}
                    $ColorIndex={`${currentIndex}`}
                    $ColorIndex2={`${currentIndex}`}
                    onDoubleClick={() => handleMusic(index, data)}>
                     
                    <div>
                        <span id={`${index}`}>
                            {index + 1}
                        </span>

                        <div>
                            <img src={data.thumbnail} alt="Image do card" />
                            <a href="#"
                                id={`${index}`}>
                                {data.title}
                            </a>
                        </div>
                    </div>

                    <span>teste</span>

                    <div>
                        <span>
                            {SecondForMin(Math.floor(data.duration))}
                        </span>

                        <button
                            onClick={() => handleDeleteMusic(data._id)}>
                            <span></span>
                            <MdDeleteForever size={20} />
                        </button>
                    </div>

                </CardMusic>
            ))}
        </List>
    )
}
