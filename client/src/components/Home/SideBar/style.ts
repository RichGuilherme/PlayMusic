import styled from "styled-components";

export const SideBar = styled.aside`
  width: 30.8rem;
  height: calc(100vh - 118px);
  
  border-right: 1px solid ${props => props.theme.colors.colorPrimary};
  background-color: ${props => props.theme.colors.bgSideBar};

  color: ${props => props.theme.colors.colorSideBar};
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  padding-top: 2.8rem;

  img {
    width: 13.2rem;
    height: 13.0rem;

    border-radius: 10.0rem;

    object-fit: cover;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 4px;  

    color: #ffff;
    font-size: 2.0rem;
    font-weight: 600;

    cursor: pointer;
  }

`

export const ContainerMenus = styled.nav`
   position: relative;
   height: 66%;
   
   margin-top: 6.7rem;
   padding-inline: 1.2rem;
     
    svg {
       fill: ${props => props.theme.colors.colorPrimary};
 
       height: 2.4rem;
       width: 2.4rem;
    }
`

export const SelectItems = styled.div`
   display: flex;
   flex-direction: column;  
   row-gap: 8px;
   
   &:first-child {
      padding-bottom: 2.0rem;
   }
    
   &:last-child {
      position: absolute;
      width: 93%;
      bottom: 0;
   }

   &:first-child::after,
   &:last-child::before {
      content: "";
      position: relative;

      margin-inline: auto;

      height: 1px;
      width: 92%;

      background-color: #373737;
   }

   & > div {
      width: 93%;  
 
      display: flex;
      flex-direction: row;
      align-items:center;
      column-gap: 1.9rem;
 
      padding: 1.06rem 2.13rem; 
 
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;
    }

   & > div:hover {
      background-color: #39393B;
      border-radius: 10px;
 
      color: ${props => props.theme.colors.colorPrimary}
   }
 
`

export const SwitchButton = styled.label`
     font-size: 1.7rem;
     position: relative;
     display: inline-block;
     width: 3.7em;
     height: 1.8em;
    
    
    > input {
     display: none;
     opacity: 0;
     width: 0;
     height: 0;
    }
    
    .slider {
     position: absolute;
     cursor: pointer;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: #313033;
     transition: .2s;
     border-radius: 3.0rem;
    }
    
    .slider:before {
     position: absolute;
     content: "";
     height: 1.4em;
     width: 1.4em;
     border-radius: 2.0rem;
     left: 0.2em;
     bottom: 0.2em;
     background-color: #aeaaae;
     transition: .4s;
    }
    
    input:checked + .slider::before {
     background-color: ${props => props.theme.colors.colorPrimary}
    }
    
    input:focus + .slider {
     box-shadow: 0 0 1px #3a4b39;
    }
    
    input:checked + .slider:before {
     transform: translateX(1.9em);
    }
`