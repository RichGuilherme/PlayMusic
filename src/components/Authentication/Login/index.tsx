import { useState } from "react";
import { RotateDegPops } from "../../../@types/rotateProps";
import { SForm } from "../style"
import { Login } from "./style"
import { FcGoogle } from "react-icons/fc";
import axios from "axios";


export const LoginFront = ({ isRotateCard }: RotateDegPops) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [token, setToken] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/user/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                }
            )

            setToken(response.data)

        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status == 401) {
                setError('Usuário ou senha inválidos');
            }
        }

    }


    return (
        <Login>
            <div>
                <h1>Bem Vindo </h1>
                <p>Acesse sua conta e se divirta com suas músicas</p>
            </div>

            <SForm>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Escreva seu email"
                    required
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    placeholder="********"
                    required
                    onChange={(e) => setPassword(e.target.value)} />

                <div>
                    <input type="checkbox" />
                    <label htmlFor="checkbox">Lembra de mim</label>
                </div>

                <button 
                 onClick={(e) => handleLogin(e)}>
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
