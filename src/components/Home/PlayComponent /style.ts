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
`
export const MusicDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    color:  #6B7280;
    
    img {
        min-width: 74px;
        height: 74px;
        
        object-fit: cover;
        box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.05), 0px 13px 20px -4px rgba(0, 0, 0, 0.10);
    }
    
    div h1{
        color: #ffff;
        font-size: 18.667px;
        font-weight: 500  
    }

    div p{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 21.333px; /* 133.333% */
    }

    svg {
        cursor: pointer;
    }
`

export const Volume = styled.div`
    display: flex;
    align-items:center;
    gap: 7px;
    
    color: rgb(82, 82, 82);

    svg {
        color: #6B7280;
        cursor: pointer;

        &:hover {
            color: #ffff;
        }
    }
    
    input[type="range"] {
       height: 5px;
       width: 94px;
       -webkit-appearance: none;
       -moz-appearance: none;
       appearance: none;
    }

    input[type="range"]::-webkit-slider-thumb {
       appearance: none;
    }
    

`