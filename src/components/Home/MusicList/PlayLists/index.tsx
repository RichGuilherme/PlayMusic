import { PlayListsContainer, SPlayLists } from "./style"

import img from "../../../../assets/Leo Season.jpg"
import { useEffect, useState } from "react"
import axiosInstancia from "../../../../api/axiosConfig"
import { Link } from "react-router-dom"

export const PlayLists = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const Playlist = async () => {
            try {
                const response = await axiosInstancia.get("/playlist/getlistsUser/")

                const playlistsData = response.data.map((playlist) => ({
                    ...playlist,
                    title: playlist.title,
                    id: playlist._id
                }));

                setPlaylists(playlistsData);
            } catch (erro) {
                console.log(erro)
            }
        }

        Playlist()
    }, [])

    return (
        <SPlayLists>
            <h1>Listas adionadas</h1>

            <PlayListsContainer>

                {playlists.map((playlist, index) => (
                    <div key={playlist._id}>
                        <Link to={`/home/${playlist._id}`}>
                            <img src={img} alt="Thumbnail playlist" />
                            <span>{playlist.title}</span>
                        </Link>
                    </div>
                ))}


            </PlayListsContainer>
        </SPlayLists>
    )
}
