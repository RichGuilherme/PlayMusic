import styled from "styled-components";

export const SPlayLists = styled.section`
   margin-top: 30px;
   margin-inline: 53px;

   h1 {
    font-size: 40px;
    font-weight: 700;

    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, .1);

   }

`

export const PlayListsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;

    div {
        display: flex;
        flex-direction: column;
        gap: 9px;

        cursor: pointer;

        img {
            width: 250px;
            height: 248px;
      
            border-radius: 4px;
        }
 
        span a {
            color: #FAFAFA;
            font-weight: 700;
        }

        span:hover {
            text-decoration: underline;
        }
   }
   
   div:hover img {
      opacity: .7
   }

`