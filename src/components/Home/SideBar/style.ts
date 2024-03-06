import styled from "styled-components";

export const SSideBar = styled.aside`
  width: 308px;
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
  gap: 14px;

  padding-top: 28px;

  img {
    width: 132px;
    height: 130px;

    border-radius: 100px;

    object-fit: cover;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 4px;  

    color: #ffff;
    font-size: 20px;
    font-weight: 600;

    cursor: pointer;
  }

`

export const ContainerMenus = styled.nav`
   position: relative;
   height: 66%;
   margin-top: 67px;
   padding-inline: 12px;

   div {
      display: flex;
      flex-direction: column;  
      row-gap: 8px;
   }
   
   > div:first-child {
      padding-bottom: 20px;

    }
    
    > div:last-child {
       position: absolute;
       width: 93%;
       bottom: 0;
    }

    > div:first-child::after,
    > div:last-child::before {
      content: "";
      position: relative;

      margin-inline: auto;

      height: 1px;
      width: 92%;

      background-color: #373737;
    }

    div > div {
       width: 93%;  
 
       display: flex;
       flex-direction: row;
       align-items:center;
       column-gap: 19px;
 
       padding: 10.667px 21.333px; 
 
       font-size: 18px;
       font-style: normal;
       font-weight: 500;
       cursor: pointer;
    }
    div > div:hover {
       background-color: #39393B;
       border-radius: 10px;
 
       color: ${props => props.theme.colors.colorPrimary}
    }
 
    svg {
       fill: ${props => props.theme.colors.colorPrimary};
 
       height: 24px;
       width: 24px;
    }
`

export const SwitchButton = styled.label`
     font-size: 17px;
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
     border-radius: 30px;
    }
    
    .slider:before {
     position: absolute;
     content: "";
     height: 1.4em;
     width: 1.4em;
     border-radius: 20px;
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