import * as S from "./style"

import img from "../../../assets/Leo Season.jpg"
import axiosInstancia from "../../../api/axiosConfig"
import { Link } from "react-router-dom"
import { useApiHook } from "../../../hooks/useAxios";


interface Playlist {
    _id: string;
    title: string;
}

export const PlayLists = () => {

    const { data: playlists } = useApiHook<Playlist[]> ({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: "playList/lists"
    })


    return (
        <S.SectionPlaylist>
            <h1>Listas adionadas</h1>

            <S.PlayListsContainer>

                {playlists != null &&
                    playlists.map((playlist: Playlist, index: number) => (
                        <div key={index}>
                            <Link to={`/home/playlist/${playlist._id}`}>
                                <img src={img} alt="Thumbnail playlist" />
                                <span>
                                    {playlist.title.charAt(0).toUpperCase() + playlist.title.substring(1)}
                                </span>
                            </Link>
                        </div>
                    ))}


            </S.PlayListsContainer>
        </S.SectionPlaylist>
    )
}
