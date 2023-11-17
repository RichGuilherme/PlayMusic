import styled from "styled-components";

export const ContainerControlles = styled.div`
    width: 100%; 
    height: 118px;

    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px;

    background-color: ${props => props.theme.colors.bgPlayComponent};

    border-top: 1px solid ${props => props.theme.colors.colorPrimary};

    color: #ffff;
`