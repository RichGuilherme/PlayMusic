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
    width: 23%;
    
    img {
        min-width: 74px;
        height: 74px;
        
        object-fit: cover;
        box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.05), 0px 13px 20px -4px rgba(0, 0, 0, 0.10);
    }

    div {
        /* min-width: 250px; */
    }
    div h1{
        color: #ffff;
        font-size: 14px;
        font-weight: 500  
    }

    div p{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 21.333px; 
    }

    svg {
        cursor: pointer;
    }
`
export const VoidDetails = styled.div`
   width: 300px;
`

export const Volume = styled.div`
    display: flex;
    align-items:center;
    gap: 7px;

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
       
       background:   rgb(82, 82, 82);
       border-radius: 50px;
       margin-bottom: 4px;

       overflow: hidden;
       -webkit-appearance: none;
       -moz-appearance: none;
       appearance: none;
    }

    input[type="range"]::-webkit-slider-thumb {
       appearance: none;
       width: 0;
       height: 0;
       -webkit-box-shadow: -200px 0 0 200px #fff;
       box-shadow: -200px 0 0 200px #fff;
    }

    &:hover input[type="range"] {
       height: 10px
    }
    

`