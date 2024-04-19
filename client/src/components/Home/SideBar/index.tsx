import * as S from "./style";
import Cookies from '../../../../node_modules/@types/js-cookie'

import { BsMoon, } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { MdLogout, MdPlaylistPlay } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../../modal";
import { AddMusic } from "../../modal/addMusic";
import { useState } from "react";

import axiosInstancia from "../../../api/axiosConfig";
import { PopCreatePlaylist } from "../../modal/PopCreatePlaylist";
import { useApiHook } from "../../../hooks/useAxios";

interface UserData {
    username: string
    email: string
    imagProfile: string
}


export const SideBar = () => {
    const [isAddMusicModalOpen, setAddMusicModalOpen] = useState(false)
    const [isCreatePlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false)
    const navigate = useNavigate()

    const { IdPlaylist } = useParams()


    const { data: userData } = useApiHook <UserData>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: "user/getDataUser"
    })

    const handleLogout = () => {
        navigate("/authentication")
        Cookies.remove('token')
    }

    const openAddMusicModal = () => {
        setAddMusicModalOpen(true)
    }

    const closeAddMusicModal = () => {
        setAddMusicModalOpen(false)
    }

    const openCreatePlaylistModal = () => {
        setCreatePlaylistModalOpen(true)
    }

    const closeCreatePlaylistModal = () => {
        setCreatePlaylistModalOpen(false)
    }

    const goToUserSettings = () => {
        navigate("/home/user")
    }


    return (
        <>
            <S.SideBar>
                <S.Profile>
                    <img src={userData?.imagProfile || "../src/assets/default-profile.jpeg"}
                        alt="profile" />
                    <h1>{userData?.username}</h1>
                </S.Profile>

                <S.ContainerMenus>
                    <S.SelectItems>
                        <div>
                            <FaHeart />
                            <p>Favorite</p>
                        </div>

                        <div onClick={() => navigate("/home/playlists")}>
                            <MdPlaylistPlay />
                            <p>Playlist</p>
                        </div>
                    </S.SelectItems>

                    <S.SelectItems>
                        <div
                            style={{ display: `${IdPlaylist ? "flex" : "none"}` }}
                            onClick={openAddMusicModal}>
                            <HiPlus />
                            <p>Add música</p>
                        </div>

                        {!IdPlaylist &&
                            <div
                                onClick={openCreatePlaylistModal}>
                                <HiPlus />
                                <p>Criar playlist</p>
                            </div>}

                    </S.SelectItems>

                    <S.SelectItems>
                        <div onClick={handleLogout}>
                            <MdLogout />
                            <p>Logout</p>
                        </div>

                        <div>
                            <BsMoon />
                            <p>Dark Mode</p>

                            <S.SwitchButton>
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </S.SwitchButton>
                        </div>

                        <div onClick={goToUserSettings}>
                            <AiOutlineSetting />
                            <p>Setting</p>
                        </div>
                    </S.SelectItems>
                </S.ContainerMenus>

                <Modal isOpen={isAddMusicModalOpen} handleClose={closeAddMusicModal}>
                    <AddMusic />
                </Modal>

                <Modal isOpen={isCreatePlaylistModalOpen} handleClose={closeCreatePlaylistModal}>
                    <PopCreatePlaylist setIsOpen={setCreatePlaylistModalOpen}/>
                </Modal>

            </S.SideBar>

        </>

    )
}
