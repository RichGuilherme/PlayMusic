import styled from "styled-components";

export const ContainerTimeMusic = styled.div`
    width: 818px;
`
export const Times = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    color: #6B7280;

    span {
        min-width: 34px;
        font-size: 16px;
        margin-inline: 10px;
    }
`

export const ProgressBar = styled.div`
   width: 100%;
   height: 5px;
   border-radius: 50px;

   background-color: #ffffff4d;
   
   cursor: pointer;

   div {
      position: relative;
      height: 100%;
      width: 100%;
      
      border-radius: 100px;
    
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
       width: 15px;
       height: 15px;

       border-radius: 100px;
       background-color: ${props => props.theme.colors.colorPrimary};
    }
    

`
