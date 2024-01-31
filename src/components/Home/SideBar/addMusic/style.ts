import styled from "styled-components";

export const ContainerUpload = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const FormFile = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 50px 30px;
  margin-top: 23px;
  border: 4px dashed #ADFF00;
   
  cursor: pointer;

  h2 {
    color: #79b300;
  }
   
  p {
    color: #000
  }

`

export const LoadingArea = styled.section`
  width: 100%;
  margin-top: 20px;
  background-color: #def5ae;
  padding: 13px 17px 13px 11px;
  border-radius: 10px;

  li {
     list-style: none;

     display:flex;
     align-items: center;
     justify-content: start;

     i {
       margin-right: 8px;
     }
     
     > div  {
         width: 100%;
         display: flex;
         align-items: center;
     }

     span {
       font-size: 16px;
       margin-right: 5px;
       color: black;
     }
  }
`
export const LoadingBar = styled.div`
   width: 100%;
   height: 7px;
   background-color: #fff;
   border-radius: 50px;

   > div {
     width: 10%;
     height: 100%;
     background-color: #ADFF00;
   }
`

export const UploadedArea = styled.section`
  width: 100%;
  margin-top: 20px;
  background-color: #def5ae;
  padding: 13px 13px 13px 11px;
  border-radius: 10px;

   li {
     width: 100%;
     
     list-style: none;

     display:flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
    
    > div {
      display: flex;
    }
    
    > div > div {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
    }
   }

   span:nth-child(1) {
       font-size: 16px;
       margin-right: 5px;
       color: #000;
   }
   span:nth-child(2) {
       font-size: 12px;
       font-weight: 300;
       margin-right: 5px;
       color: #6b6b6b;
   }
`