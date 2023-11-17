import { FcGoogle } from "react-icons/fc"
import { BiLogoFacebook } from "react-icons/bi"

export const PropCadaster = () => {
    return (
        <div>
            <h1>Login / Sign up</h1>
            <p>Para poder adicionar e criar suas próprias playlist faça login</p>

            <div>
                <button >
                    <FcGoogle />
                    Login com Facebook
                </button>

                <button >
                    <BiLogoFacebook />
                    Login com Facebook
                </button>
            </div>

        </div>
    )
}
