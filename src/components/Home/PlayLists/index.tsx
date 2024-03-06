import { PlayListsContainer, SPlayLists } from "./style"

import img from "../../../assets/Leo Season.jpg"
import axiosInstancia from "../../../api/axiosConfig"
import { Link } from "react-router-dom"
import  useAxios  from "../../../hooks/useAxios"

interface Playlist {
    _id: string;
    title: string;
}

export const PlayLists = () => {

    const { data: playlists } = useAxios<Playlist[]> ({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: "playList/lists"
    })

    return (
        <SPlayLists>
            <h1>Listas adionadas</h1>

            <PlayListsContainer>

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


            </PlayListsContainer>
        </SPlayLists>
    )
}
