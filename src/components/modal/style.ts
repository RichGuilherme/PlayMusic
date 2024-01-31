import styled from "styled-components";

export const ModalDiv = styled.section<{ $block?: string }>`
    display: ${p => p.$block && p.$block};
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
    padding: 2rem;
    transform: translate(-50%, -50%);
    background: white;

    button {
        border:none;
        background-color: transparent;

        cursor: pointer;

        &:hover{
            color: ${props => props.theme.colors.colorPrimary};
        }
    }
`