import styled from "styled-components";

export const MainViewContainer = styled.section`
    width: 100%;
    height: 100%;

    background-color: #1F1F1F;
    color: #ffff;

    overflow: auto;
`

export const BannerPlayList = styled.div`
    position: relative;

    height: 30vh;
    max-height: 400px;
    min-height: 340px;
    
    background-color: #252526;
    
    /* background do banner linear gradient */
    > div:nth-child(1){
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%);
        z-index: -100;
    }
    
    /* container banner */
    > div:nth-child(2) {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: end;
        gap: 16px;

        padding-left: 33px;
        padding-bottom: 40px;
    }
`

export const ThumbnailPlayList = styled.div`
    height: 232px;
    min-width: 232px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #282828;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.50);

    button {
        border: none;
        background-color: transparent;

        svg {
            color: #b3b3b3;
            height: 80px;
            width: 80px;
        }
    }
`
export const TitlePlayList = styled.div`
   display: flex;
   flex-direction: column;
   gap: 14px;
   
   margin-right: 20px;

   h1 { 
     font-size: 84px;
     font-weight: 900;
   }
   
   span:nth-of-type(1) > p {
    max-height: 74px;

    font-size: 14px;  
    font-weight: 400;
    color: rgba(250, 250, 250, 0.75);
    overflow: hidden;
    word-break: break-word; 
     
   }
`