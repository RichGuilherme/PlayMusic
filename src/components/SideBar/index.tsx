import { useState } from "react";

import imageProfile from "../../assets/imageProfile.jpeg";
import { ContainerMenus, Profile, SSideBar } from "./style";

import { BsGridFill, BsMoon, } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";


export const SideBar = () => {
    const [isRegisted, setIsRegisted] = useState(true)

    return (
        <SSideBar>
            <Profile>
                {isRegisted ? (
                    <>
                        <img src={imageProfile}
                            alt="profile" />
                        <h1>Richard Guilherme</h1>
                    </>
                ) :
                    (
                        <>
                            <img
                                alt="profile" />
                            <h1>
                                Login / Sign up <MdKeyboardArrowRight size={29} />
                            </h1>
                        </>
                    )}
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
                    
                    <div>
                        <HiPlus />
                        <p>Add PlayList</p>
                    </div>
                </div>

                <div>
                    <div>
                        {isRegisted ?
                            <>
                                <MdLogout />
                                <p>Logout</p>
                            </>
                            :
                            <>
                                <MdLogout />
                                <p>Login / Sign up</p>
                            </>
                        }
                    </div>

                    <div>
                        <BsMoon />
                        <p>Dark Mode</p>

                        <label htmlFor=""></label>
                        <input type="radio" name="" id="" />
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
