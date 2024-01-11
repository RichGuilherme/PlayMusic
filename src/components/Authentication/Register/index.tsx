import { useState } from "react";
import { RotateDegPops } from "../../../@types/rotateProps";
import { SForm } from "../style"
import { Register } from "./style"
import axiosInstancia from "../../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle, } from "react-icons/fc";


export const RegisterBack = ({ isRotateCard }: RotateDegPops) => {
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsarname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstancia.post('/user/register',
                JSON.stringify({ email, password, username }))

            localStorage.setItem("email", response.data.email)
            localStorage.setItem("userName", response.data.username)
            navigate("/authentication")

        } catch (error) {
            console.log('Usuário ou senha inválidos', error.response.data);

        }

    }
    return (
        <Register >
            <div>
                <h1>Bem Vindo </h1>
                <p>Acesse sua conta e se divirta com suas músicas</p>
            </div>

            <SForm onSubmit={(e) => handleRegister(e)}>
                <label htmlFor="text">Username</label>
                <input
                    type="text"
                    placeholder="Escreva seu email"
                    required
                    onChange={(e) => setUsarname(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Escreva seu email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">
                    Senha
                    {showPassword ?
                        <div onClick={() => setShowPassword(!showPassword)}>
                            <BsEye
                                size={22} />
                        </div>
                        :
                        <div onClick={() => setShowPassword(!showPassword)}>
                            <BsEyeSlash
                                size={22} />
                        </div>
                    }
                </label>

                <input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="********"
                    required
                    onChange={(e) => setPassword(e.target.value)} />

                <div>
                    <input type="checkbox" />
                    <label htmlFor="checkbox">Lembra de mim</label>
                </div>

                <button type="submit" >
                    Register
                </button>
            </SForm>

            <button>
                <FcGoogle size={28} />
                Entra com o Google
            </button>

            <p>
                Possui conta?
                <span onClick={() => isRotateCard(0)}>Entrar</span>
            </p>
        </Register>
    )
}
