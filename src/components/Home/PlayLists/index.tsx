import { PlayListsContainer, SPlayLists } from "./style"

import img from "../../../assets/Leo Season.jpg"
import axiosInstancia from "../../../api/axiosConfig"
import { Link } from "react-router-dom"
import { useAxios } from "../../../hooks/useAxios"

export const PlayLists = () => {
    
    const {data:playlists} = useAxios({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: "playList/lists"
    })
    console.log(playlists)
   

    return (
        <SPlayLists>
            <h1>Listas adionadas</h1>

            <PlayListsContainer>

                {playlists != null &&  playlists.map((playlist, index) => (
                    <div key={index}>
                        <Link to={`/home/playlist/${playlist._id}`}>
                            <img src={img} alt="Thumbnail playlist" />
                            <span>{playlist.title}</span>
                        </Link>
                    </div>
                ))}


            </PlayListsContainer>
        </SPlayLists>
    )
}
