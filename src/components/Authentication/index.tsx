import { useState } from "react";
import { ContainerForm, SAuthentication } from "./style"
import { LoginFront } from "./Login";
import { RegisterBack } from "./Register";

export const Authentication = () => {
  const [rotateCard, isRotateCard] = useState(0)

  return (
    <SAuthentication >
      <ContainerForm style={{transform: `rotateY(${rotateCard}deg)`}}>
        <LoginFront isRotateCard={isRotateCard}/>

        <RegisterBack isRotateCard={isRotateCard}/>
      </ContainerForm>
    </SAuthentication>
  )
}
