import styled from "styled-components";

export const SectionPlaylist = styled.section`
    width: 100%;
    height: 100%;

    background-color: #1F1F1F;
    color: #ffff;

    overflow: auto;
   padding: 3.0rem;
   padding-inline: 5.3rem;

   h1 {
    font-size: 4.0rem;
    font-weight: 700;

    margin-bottom: 4.0rem;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, .1);

   }

`

export const PlayListsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.4rem;
 
    margin-left: 1.8rem;
    div {
        a {
            display: flex;
            flex-direction: column;
            gap: 9px;

        cursor: pointer;
        }

        img {
            width: 25.0rem;
            height: 24.8rem;
      
            border-radius: 4px;
        }
 
        span {
            color: #FAFAFA;
            font-size: 1.5rem;
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