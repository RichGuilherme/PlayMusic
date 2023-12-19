import { RotateDegPops } from "../../../@types/rotateProps";
import { SForm } from "../style"
import { Register } from "./style"
import { FcGoogle } from "react-icons/fc";

export const RegisterBack= ({isRotateCard}: RotateDegPops) => {

  return (
    <Register >
          <div>
            <h1>Bem Vindo </h1>
            <p>Acesse sua conta e se divirta com suas músicas</p>
          </div>

          <SForm action="">
            <label htmlFor="text">Username</label>
            <input type="text" placeholder="Escreva seu email" />

            <label htmlFor="text">Email</label>
            <input type="text" placeholder="Escreva seu email" />

            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="********" />

            <div>
              <input type="checkbox" />
              <label htmlFor="checkbox">Lembra de mim</label>
            </div>

            <button>
              Login
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
