import styled from "styled-components";

export const SPlayLists = styled.section`
    width: 100%;
    height: 100%;

    background-color: #1F1F1F;
    color: #ffff;

    overflow: auto;
   padding: 30px;
   padding-inline: 53px;

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
    flex-direction: row;
    gap: 24px;
 
    margin-left: 18px;
    div {
        a {
            display: flex;
            flex-direction: column;
            gap: 9px;

        cursor: pointer;
        }

        img {
            width: 250px;
            height: 248px;
      
            border-radius: 4px;
        }
 
        span {
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