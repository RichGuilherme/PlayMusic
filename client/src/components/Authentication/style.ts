import styled from "styled-components";
import backgroundMusic from "../../assets/background_music.jpg"



export const SAuthentication = styled.div`
    height: 100vh;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
 
    background-image: url(${backgroundMusic});
    background-size: cover;
    background-position: center;
`

export const ContainerForm = styled.div<{$rotateDegProps: number}>`
   height: auto;
   width: 45.0rem;
   position: relative;

   background-color: #fff;

   transform: rotateY(${(props) => props.$rotateDegProps}deg);

   transform-style: preserve-3d;
   transition: all 0.5s ease;
   
   button, a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        
        width: 100%;
        min-height: 4.1rem;
        
        margin-bottom: 1.1rem;
    
        border-radius: 1.2rem;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0.42px;
        color: #000;
        cursor: pointer;
   }


   > div > p {
       color: #595959;
       text-align: center;
       font-size: 1.3rem;
       font-weight: 500;
       letter-spacing: 0.3px;

        > span {
           color: #ADFF00;
           font-weight: 500;
           letter-spacing: 0.3px;

           margin-left: 6px;
           cursor: pointer;
       }
   }
`
export const HeaderContainer = styled.div`
    h1 {
      font-size: 3.4rem;
      font-weight: 500;
      letter-spacing: 1.02px;
      text-transform: uppercase;
      margin-bottom: 1.0rem;
     }

     p {
      color: #636364;
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 0.42px;
      margin-bottom: 3.0rem;
     }

`

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 7px;

    width: 100%;

    input:focus {
        outline: none;
    }

`
export const FormsInputs = styled.div`
    display:flex;
    flex-direction: column;
    gap: 7px;
    
    margin-bottom: 1.0rem;

    label {
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 1.0rem;

        color: #181818;
        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0.42px;

    }

    input {
       border-radius: 12px;
       border: 1px solid rgba(0, 0, 0, 0.25);
       background: rgba(196, 196, 196, 0.00);
       box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

       padding: 1.1rem 1.5rem;
    }
`

export const CheckboxContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 5px;

   margin-bottom: 1.0rem;

   font-size: 1.4rem;
   
   input[type="checkbox"]{
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.25);
        background: rgba(196, 196, 196, 0.00);

        margin-right: 3px;
    }
`
export const ButtonForm = styled.button`
    background: #ADFF00;
    box-shadow: 0px 4px 10px 0px rgba(233, 68, 75, 0.25);

    &:hover {
        background: #ace92b;
    }
`

export const MessageError = styled.span`
    color: #ed4a4a; 
    font-size: 1.2rem;
`
