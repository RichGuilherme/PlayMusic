import { MdPlayCircleFilled, MdDeleteForever } from "react-icons/md";

import { HiPlus } from "react-icons/hi";
import * as S from "./style";

import axiosInstancia from "../../../../api/axiosConfig";

import { SecondForMin } from "../../../../utils/SecondForMin";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { activePlay, playPause, setActiveSong, songData } from "../../../../redux/features/playerSlice";
import { RootState } from "../../../../redux/store";
import { HiPauseCircle } from "react-icons/hi2";
import { PopMusicDelete } from "../../../modal/PopDeleteMusic";
import { BsThreeDots } from "react-icons/bs";
import { Modal } from "../../../modal";
import { useParams } from "react-router-dom";

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


export const SongList = () => {
    const { currentIndex, isPlaying, activeSong, currentSongs } = useSelector((state: RootState) => state.player)
    const [data, setData] = useState<{ musics: MusicData[] } | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [idMusicDelete, setIdMusicDelete] = useState("")
    const { IdPlaylist } = useParams()


    const dispatch = useDispatch()

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleDeleteMusic = (idMusic: string) => {
        setIdMusicDelete(idMusic)
        setIsOpen(true)
    }

    const handleMusic = (index: number, song: songData) => {
        dispatch(setActiveSong({ song, data, i: index }))
        dispatch(activePlay(true))

    }


    const handlePlayPause = () => {

        dispatch(playPause(!isPlaying))
    }



    const fetchData = async () => {
        try {
            const res = await axiosInstancia.get(`music/musics/${IdPlaylist}`)
            setData(res.data)

            // Atualizar o state do activeSong com a primeira música, para ativação imediata
            if (res.data.musics.length !== 0) {
                if (activeSong._id == "") {
                    dispatch(setActiveSong({ song: res.data.musics[0], data: res.data, i: 0 }))
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }


    useEffect(() => {
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSongs])

    return (
        <S.SectionListSong>
            <S.ListEdit>
                <div>
                    <div onClick={() => handlePlayPause()}>
                        {isPlaying ?
                            <HiPauseCircle
                                size={62} />
                            :
                            <MdPlayCircleFilled
                                size={62} />
                        }
                    </div>

                    <div>
                        <BsThreeDots size={27} />
                    </div>
                </div>

                <div>
                    <HiPlus size={37} />
                </div>
            </S.ListEdit>

            <S.ContainerPlayList>
                <S.HeaderList>
                    <div>
                        <div>
                            <div>
                                <span>#</span>
                            </div>

                            <div>
                                <span>Title</span>
                            </div>
                        </div>

                        <div>
                            <span>Artista</span>
                        </div>

                        <div>
                            <span>Duration</span>
                        </div>
                    </div>
                </S.HeaderList>

                <S.Musics>
                    {data?.musics?.map((data, index: number) => (
                        <S.CardMusic
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

                            <span>{data.artist}</span>

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

                        </S.CardMusic>
                    ))}


                </S.Musics>

                <Modal isOpen={isOpen} handleClose={handleCloseModal}>
                    <PopMusicDelete
                        idMusicDelete={idMusicDelete}
                        setIsOpen={setIsOpen} />
                </Modal>


            </S.ContainerPlayList>
        </S.SectionListSong>
    )
}
