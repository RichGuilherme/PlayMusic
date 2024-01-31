import { MdPlayCircleFilled } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { CardMusic, ContainerPlayList, HeaderList, ListEdit, Musics, SSongList } from "./style";

import axiosInstancia from "../../../../../api/axiosConfig";

import { SecondForMin } from "../../../../../utils/SecondForMin";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { activePlay, playPause, setActiveSong, songData } from "../../../../../redux/features/playerSlice";
import { RootState } from "../../../../../redux/store";
import { HiPauseCircle } from "react-icons/hi2";


export const SongList = () => {
    const { currentIndex, isPlaying, activeSong } = useSelector((state: RootState) => state.player)
    const [data, setData] = useState(null)
    const dispatch = useDispatch()


    const handleCardMusic = (index: number, song: songData) => {
        dispatch(setActiveSong({ song, data, i: index }))
        dispatch(activePlay(true))
    }

    const handlePlayPause = () => {
        dispatch(playPause(!isPlaying))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstancia.get("music/getMusics")
                setData(res.data)

                // Atualizar o state do activeSong com a primeira música, para ativação imediata
                if (activeSong.title == "") {
                    dispatch(setActiveSong({ song: res.data.musics[0], data: res.data, i: 0 }))
                }

            } catch (error) {
                console.error("Error fetching data:", error)
            }
        };

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])



    return (
        <SSongList>
            <ListEdit>
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
            </ListEdit>

            <ContainerPlayList>
                <HeaderList>
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
                </HeaderList>

                <Musics>
                    {data?.musics?.map((data, index: number) => (
                        <CardMusic
                            key={index}
                            $ColorIndex={`${currentIndex}`}
                            $ColorIndex2={`${currentIndex}`}
                            onDoubleClick={() => handleCardMusic(index, data)}>
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

                                <div>
                                    <BsThreeDots size={20} />
                                </div>
                            </div>

                        </CardMusic>
                    ))}

                </Musics>

            </ContainerPlayList>
        </SSongList>
    )
}
