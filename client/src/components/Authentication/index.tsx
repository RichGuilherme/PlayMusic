import { useState } from "react";
import { ContainerForm, SAuthentication } from "./style"
import { LoginFront } from "./Login";
import { RegisterBack } from "./Register";

export interface RotateDegPops {
  isRotateCard: (any: number) => void
}

export const Authentication = () => {
  const [RotateCard, setRotateCard] = useState(0)

  return (
    <SAuthentication >
      <ContainerForm $rotateDegProps={RotateCard}>
        <LoginFront isRotateCard={setRotateCard}/>

        <RegisterBack isRotateCard={setRotateCard}/>
      </ContainerForm>
    </SAuthentication>
  )
}
