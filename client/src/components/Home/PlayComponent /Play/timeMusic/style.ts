import styled from "styled-components";

export const ContainerTimeMusic = styled.div`
    width: 81.8rem;
`
export const Times = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    color: #6B7280;

    span {
        min-width: 3.4rem;
        font-size: 1.6rem;
        margin-inline: 10px;
    }
`

export const ProgressBar = styled.div`
   width: 100%;
   height: 5px;
   border-radius: 5.0rem;

   background-color: #ffffff4d;
   
   cursor: pointer;

   div {
      position: relative;
      height: 100%;
      width: 100%;
      
      border-radius: 10.0rem;
    
      background-color: #fff;
     
    }
    
    &:hover div {
        background-color: ${props => props.theme.colors.colorPrimary}
    }

    &:hover div::before{
       content: "";
       position: absolute;
       top: -5px;
       right: -8px;
       width: 1.5rem;
       height: 1.5rem;

       border-radius: 10.0rem;
       background-color: ${props => props.theme.colors.colorPrimary};
    }
    

`
