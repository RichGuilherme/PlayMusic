import { useState } from "react";
import { RotateDegPops } from "..";

import { ButtonForm, CheckboxContainer, FormsInputs, HeaderContainer, MessageError, SForm } from "../style"
import * as S from "./style"

import { FcGoogle } from "react-icons/fc";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import axiosInstancia from "../../../api/axiosConfig";
import axios from "axios";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";


const schemaLogin = z.object({
    email: z.string().min(1, "Preencha o campo").email(),
    password: z.string().min(1, "Preencha o campo")
})

type PropsForm = z.infer<typeof schemaLogin>


export const LoginFront = ({ isRotateCard }: RotateDegPops) => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<PropsForm>({
        mode: "onSubmit",
        resolver: zodResolver(schemaLogin)
    })


    const handleLoginSubmit = async (data: PropsForm) => {
        const email = data.email
        const password = data.password

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))

            await axiosInstancia.post('/user/login',
                JSON.stringify({ email, password }))

            navigate("/home")

        } catch (error) {
            if (axios.isAxiosError(error)) {

                setError("root", {
                    message: error?.response?.data.error || "Erro desconhecido",
                })
            }
        }

    }


    return (
        <S.Login>
            <HeaderContainer>
                <h1>Bem Vindo </h1>
                <p>Acesse sua conta e se divirta com suas músicas</p>
            </HeaderContainer>

            <SForm onSubmit={handleSubmit(handleLoginSubmit)}>
                <FormsInputs>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Escreva seu email"
                        {...register("email")} />
                    {errors.email?.message && (
                        <MessageError>{errors.email?.message}</MessageError>
                    )}
                </FormsInputs>

                <FormsInputs>
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
                        {...register("password")} />
                    {errors.password?.message && (
                        <MessageError>{errors.password?.message}</MessageError>
                    )}
                </FormsInputs>

                <CheckboxContainer>
                    <input type="checkbox" />
                    <label htmlFor="checkbox">Lembra de mim</label>
                </CheckboxContainer>

                <ButtonForm type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Loading..." : "Login"}
                </ButtonForm>
            </SForm>

            <a href="http://localhost:4000/user/auth/google">
                <FcGoogle size={28} />
                Entra com o Google
            </a>
            
            {errors.root?.message && (
                <MessageError>{errors.root?.message}</MessageError>
            )}

            <p>
                Não possui conta?
                <span onClick={() => isRotateCard(180)}>Criar conta</span>
            </p>
        </S.Login>

    )
}
