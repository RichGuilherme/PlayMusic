import { ContainerMenus, Profile, SSideBar, SwitchButton } from "./style";
import Cookies from 'js-cookie'

import { BsMoon, } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { MdLogout, MdPlaylistPlay } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../../modal";
import { AddMusic } from "../../modal/addMusic";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import axiosInstancia from "../../../api/axiosConfig";

interface UserData {
    username: string
    email: string
    imagProfile: string
}


export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const { IdPlaylist } = useParams()


    const { data: userData } = useAxios<UserData>({
        axiosInstance: axiosInstancia,
        method: "GET",
        url: "user/getDataUser"
    })

    const handleLogout = () => {
        navigate("/authentication")
        Cookies.remove('token')
    }

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleUserSetting = () => {
        navigate("/home/user")
    }


    return (
        <>
            <SSideBar>
                <Profile>
                    <img src={userData?.imagProfile || "../src/assets/default-profile.jpeg"}
                        alt="profile" />
                    <h1>{userData?.username}</h1>
                </Profile>

                <ContainerMenus>
                    <div>
                        <div>
                            <FaHeart />
                            <p>Favorite</p>
                        </div>

                        <div onClick={() => navigate("/home/playlists")}>
                            <MdPlaylistPlay />
                            <p>Playlist</p>
                        </div>
                    </div>

                    <div>

                        <div
                            style={{ display: `${IdPlaylist ? "flex" : "none"}` }}
                            onClick={handleOpenModal}>
                            <HiPlus />
                            <p>Add Music</p>
                        </div>
                    </div>

                    <div>
                        <div onClick={handleLogout}>
                            <MdLogout />
                            <p>Logout</p>
                        </div>

                        <div>
                            <BsMoon />
                            <p>Dark Mode</p>


                            <SwitchButton>
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </SwitchButton>
                        </div>

                        <div onClick={handleUserSetting}>
                            <AiOutlineSetting />
                            <p>Setting</p>
                        </div>
                    </div>
                </ContainerMenus>

                <Modal isOpen={isOpen} handleClose={handleCloseModal}>
                    <AddMusic />
                </Modal>

            </SSideBar>

        </>

    )
}
