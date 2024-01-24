import { useState } from "react";
import { RotateDegPops } from "../../../@types/rotateProps";
import { SForm } from "../style"
import { Login } from "./style"
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axiosInstancia from "../../../api/axiosConfig";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import axios from "axios";


export const LoginFront = ({ isRotateCard }: RotateDegPops) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axiosInstancia.post('/user/login',
                JSON.stringify({ email, password }))

            localStorage.setItem("email", response.data.email)
            localStorage.setItem("userName", response.data.username)


            navigate("/home")

        } catch (error) {
            if(axios.isAxiosError(error)){
                setError(error.response?.data.error)
                console.log(error)
            }
        }

    }


    return (
        <Login>
            <div>
                <h1>Bem Vindo </h1>
                <p>Acesse sua conta e se divirta com suas músicas</p>
            </div>

            <SForm onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Escreva seu email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <span>{`${error}`}</span>

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
                    Login
                </button>
            </SForm>

            <button >
                <FcGoogle size={28} />
                Entra com o Google
            </button>

            <p>
                Não possui conta?
                <span onClick={() => isRotateCard(180)}>Criar conta</span>
            </p>
        </Login>

    )
}
