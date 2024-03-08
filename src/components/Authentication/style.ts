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
   width: 450px;
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
        min-height: 41px;
        
        margin-bottom: 11px;
    
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.25);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.42px;
        color: #000;
        cursor: pointer;
   }


   > div > p {
       color: #595959;
       text-align: center;
       font-size: 13px;
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
      font-size: 34px;
      font-weight: 500;
      letter-spacing: 1.02px;
      text-transform: uppercase;
      margin-bottom: 10px;
     }

     p {
      color: #636364;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.42px;
      margin-bottom: 30px;
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
    
    margin-bottom: 10px;

    label {
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 10px;

        color: #181818;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.42px;

    }

    input {
       border-radius: 12px;
       border: 1px solid rgba(0, 0, 0, 0.25);
       background: rgba(196, 196, 196, 0.00);
       box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

       padding: 11px 15px;
    }
`

export const CheckboxContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 5px;

   margin-bottom: 10px;

   input[type="checkbox"]{
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.25);
        background: rgba(196, 196, 196, 0.00);

        margin-right: 6.2px;
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
    font-size: 12px;
`
