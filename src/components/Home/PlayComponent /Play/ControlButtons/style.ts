import styled from "styled-components"

export const ControlButtons = styled.div`
display:flex;
justify-content: center;
gap: 1.3rem;

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