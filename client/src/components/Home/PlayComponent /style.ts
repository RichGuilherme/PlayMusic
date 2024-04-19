import styled from "styled-components";

export const ContainerControlles = styled.div`
    width: 100%; 
    height: 11.8rem;

    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.1rem;

    background-color: ${props => props.theme.colors.bgPlayComponent};

    border-top: 1px solid ${props => props.theme.colors.colorPrimary};
`
export const MusicDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color:  #6B7280;
    width: 23%;
    
    img {
        min-width: 7.4rem;
        height: 7.4rem;
        
        object-fit: cover;
        box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.05), 0px 1.3rem 2.0rem -4px rgba(0, 0, 0, 0.10);
    }

    div {
        /* min-width: 250px; */
    }
    div h1{
        color: #ffff;
        font-size: 1.4rem;
        font-weight: 500  
    }

    div p{
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.1333rem; 
    }

    svg {
        cursor: pointer;
    }
`
export const VoidDetails = styled.div`
   width: 40.3rem;
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
       width: 9.4rem;
       
       background:   rgb(82, 82, 82);
       border-radius: 5.0rem;
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
       -webkit-box-shadow: -20.0rem 0 0 20.0rem #fff;
       box-shadow: -20.0rem 0 0 20.0rem #fff;
    }

    &:hover input[type="range"] {
       height: 10px
    }
    

`