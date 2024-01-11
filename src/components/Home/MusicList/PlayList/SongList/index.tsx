import { MdPlayCircleFilled } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { CardMusic, ContainerPlayList, HeaderList, ListEdit, Musics, SSongList } from "./style";
import imgCard from "../../../../../assets/Leo Season.jpg"
import { useAxios } from "../../../../../hooks/useAxios";
import axiosInstancia from "../../../../../api/axiosConfig";
import { SecondForMin } from "../../../../../utils/SecondForMin";
import { useContext, useState } from "react";
import { IdContext } from "../../../../../context/idContext";


export const SongList = () => {
    const { setIdMusic } = useContext(IdContext)
    const [indexCardMusic, setIndexCardMusic] = useState<string | number>("")
    const [data, loading, error] = useAxios({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: "http://localhost:4000/music/getMusics"
    })
    
    const handleCardMusic = (index: number, data: any) => {
        setIdMusic(data)
        setIndexCardMusic(index)
    }
   
    return (
        <SSongList>
            <ListEdit>
                <div>
                    <span>
                        <MdPlayCircleFilled size={62} />
                    </span>

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
                            $primary={`${indexCardMusic}`}
                            onClick={() => handleCardMusic(index, data)}>
                            <div>
                                <span>{index + 1}</span>
                                <div>
                                    <img src={data.thumbnail} alt="Image do card" />
                                    <a href="#" id={`${index}`}>{data.title}</a>
                                </div>
                            </div>

                            <span>{data.artist}</span>

                            <div>
                                <span>{SecondForMin(Math.floor(data.duration))}</span>
                                <BsThreeDots size={20} />
                            </div>

                        </CardMusic>
                    ))}

                </Musics>

            </ContainerPlayList>
        </SSongList>
    )
}
