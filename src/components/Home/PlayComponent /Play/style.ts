import styled from "styled-components";


export const ContainerPlay = styled.div`
   display:flex;
   flex-direction: column;
   justify-content: center;
   gap: 8px;
  
`

export const ControlButtons = styled.div`
   display:flex;
   justify-content: center;
   gap: 13px;

   button {
     background-color: transparent;
     border: none;

     color: #6B7280;
     
     svg {
        cursor: pointer;

        &:hover{
            color: white;
        }
     }
   }
`