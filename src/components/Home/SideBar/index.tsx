import imageProfile from "../../../assets/imageProfile.jpeg";
import { ContainerMenus, Profile, SSideBar } from "./style";

import { BsMoon, } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";


export const SideBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = async () => {
            try {
                const responser = await axios.get("http://localhost:4000/user/getUser/", {
                    headers: {
                        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDY2MDUyOWQ2MjIyMzM2MzBiMTMiLCJpYXQiOjE3MDI5MzQzNDYsImV4cCI6MTcwMjkzNzk0Nn0.fqxzov-45AZJTF2z3y6ihN33gwYxYx5yXvC2UPk25-Q"
                    },
                    params: {
                        userId: "6571d660529d622233630b13"
                    }
                })

                console.log(responser.data)
                } catch (erro) {
                  console.log(erro)
                }
        }

        user()
    }, [])

    return (
        <SSideBar>
            <Profile>
                <img src={imageProfile}
                    alt="profile" />
                <h1>Richard Guilherme</h1>
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
                        <MdLogout />
                        <p>Logout</p>
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
