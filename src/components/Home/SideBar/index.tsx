import imageProfile from "../../../assets/imageProfile.jpeg";
import { ContainerMenus, Profile, SSideBar, SwitchButton } from "./style";
import Cookies from 'js-cookie'

import { BsMoon, } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export const SideBar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/authentication")
        Cookies.remove('token')
    }

    return (
        <SSideBar>
            <Profile>
                <img src={imageProfile}
                    alt="profile" />
                <h1>{localStorage.getItem("userName")}</h1>
            </Profile>

            <ContainerMenus>
                <div>

                    <div>
                        <FaHeart />
                        <p>Favorite</p>
                    </div>
                </div>

                <div>
                    <div>
                        <HiPlus />
                        <p>Add Music</p>
                    </div>
                </div>

                <div>
                    <div onClick={() => handleLogout()}>
                        <MdLogout />
                        <p>Logout</p>
                    </div>

                    <div>
                        <BsMoon />
                        <p>Dark Mode</p>


                        <SwitchButton>
                            <input type="checkbox" />
                                <span className= "slider"></span>
                        </SwitchButton>
                    </div>

                    <div>
                        <AiOutlineSetting />
                        <p>Setting</p>
                    </div>
                </div>
            </ContainerMenus>
        </SSideBar>
    )
}
