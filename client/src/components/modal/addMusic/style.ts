import styled from "styled-components";

export const ContainerUpload = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;

  padding: 4.0rem 3.2rem 2.5rem 3.2rem;
`

export const FormFile = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 5.0rem 3.0rem;
  border: 4px dashed #ADFF00;
   
  cursor: pointer;

  h2 {
    color: #79b300;
    font-size: 2.3rem;
  }
   
  p {
    color: #000;
    font-size: 1.4rem;
  }

`

export const LoadingArea = styled.section`
  width: 100%;
  margin-top: 2.0rem;
  background-color: #def5ae;
  padding: 1.3rem 1.7rem 1.3rem 1.1rem;
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
       font-size: 1.6rem;
       margin-right: 5px;
       color: black;
     }
  }
`
export const LoadingBar = styled.div`
   width: 100%;
   height: 7px;
   background-color: #fff;
   border-radius: 5.0rem;

   > div {
     width: 10%;
     height: 100%;
     background-color: #ADFF00;
   }
`

export const UploadedArea = styled.section`
  width: 100%;
  margin-top: 2.0rem;
  background-color: #def5ae;
  padding: 1.3rem 1.3rem 1.3rem 1.1rem;
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
       font-size: 1.6rem;
       margin-right: 5px;
       color: #000;
   }
   span:nth-child(2) {
       font-size: 1.2rem;
       font-weight: 300;
       margin-right: 5px;
       color: #6b6b6b;
   }
`