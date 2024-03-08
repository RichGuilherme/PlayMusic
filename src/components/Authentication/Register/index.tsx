import { useState } from "react";
import { RotateDegPops } from "..";
import { ButtonForm, CheckboxContainer, FormsInputs, HeaderContainer, MessageError, SForm } from "../style"
import * as S from "./style"
import axiosInstancia from "../../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FcGoogle, } from "react-icons/fc";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";


const schemaRegister = z.object({
    username: z.string().min(5, "Username dever ter no mínino 5 caracteres"),
    email: z.string().email("Email invalido!"),
    password: z.string().min(4, "Senha curta demais")
})

type PropsForm = z.infer<typeof schemaRegister>

export const RegisterBack = ({ isRotateCard }: RotateDegPops) => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<PropsForm>({
        criteriaMode: "all",
        mode: 'all',
        resolver: zodResolver(schemaRegister),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        }
    })

    const handleRegisterSubmit = async (data: PropsForm) => {
        const email = data.email
        const password = data.password
        const username = data.username

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))

            await axiosInstancia.post('/user/register',
                JSON.stringify({ email, password, username }))

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
        <S.Register >
            <HeaderContainer>
                <h1>Bem Vindo</h1>
                <p>Crie uma conta agora é venha se divirta com suas músicas!</p>
            </HeaderContainer>

            <SForm onSubmit={handleSubmit(handleRegisterSubmit)}>
                <FormsInputs>
                    <label htmlFor="text">Username</label>
                    <input
                        type="text"
                        placeholder="Escreva seu email"
                        required
                        {...register("username")} />
                    {errors.username?.message && (
                        <MessageError>{errors.username?.message}</MessageError>
                    )}
                </FormsInputs>

                <FormsInputs>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Escreva seu email"
                        required
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
                        required
                        {...register("password")} />
                    {errors.password?.message && (
                        <MessageError>{errors.password?.message}</MessageError>
                    )}
                </FormsInputs>

                <CheckboxContainer>
                    <input type="checkbox" />
                    <label htmlFor="checkbox">Lembra de mim</label>
                </CheckboxContainer>


                <ButtonForm type="submit" disabled={isSubmitting} >
                    {isSubmitting ? "Loading..." : "Register"}
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
                Possui conta?
                <span onClick={() => isRotateCard(0)}>Entrar</span>
            </p>
        </S.Register>
    )
}
