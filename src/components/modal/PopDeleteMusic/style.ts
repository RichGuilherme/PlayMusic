import styled from "styled-components";

export const MunuPop = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 35px 30px 20px 30px;
    color: #000;
    
    button {
        min-width: 96px;
        border: none;
        display: flex;
        align-items: center;
        
        padding: 6px 15px;
        
        cursor: pointer;
    }
    
    div {
        display: flex;
        justify-content: end;
        gap: 12px;

        margin-top: 22px;
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