import styled from "styled-components";

export const ModalDiv = styled.section<{ $block?: string }>`
    display: block;
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    min-width: 25%;
    height:auto;

    transform: translate(-50%, -50%);

    border-radius: 10px;
    background: white;

    header {
       border-radius: 10px 10px 0 0;
       padding: 10px 10px 6px 10px;
       background-color:  ${props => props.theme.colors.colorPrimary};
    }

    header > button {
        border:none;
        background-color: transparent;

        cursor: pointer;
         
        svg {
            color: #575757;
        }

        &:hover{
            color: ${props => props.theme.colors.colorPrimary};
        }
    }
`

export const MunuPop = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 3.0rem 3.0rem 2.0rem 3.0rem;
    color: #000;
    
    button {
        min-width: 9.6rem;
        border: none;
        display: flex;
        align-items: center;
        
        padding: 6px 1.5rem;
        
        cursor: pointer;
    }
    
    p {
        font-size: 1.6rem;
    }

    div {
        display: flex;
        justify-content: end;
        gap: 1.2rem;

        margin-top: 2.2rem;
    }

    button:first-child {
       background-color: ${props => props.theme.colors.colorPrimary};

       &:hover{
        background-color: #ace92b;
       }
    }

    button:nth-child(2):hover{
        
    }
`