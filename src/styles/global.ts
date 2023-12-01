import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Inter", sans-serif;
    }
    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li{
        list-style: 0;
    }
    img{
        max-width: 100%;
        height: auto;
    }
`

export const ColorThemer = {
    colors: {
        bgSideBar: "#252526",
        bgPlayComponent: "#1F1F1F",
        colorSideBar: "#6B7280",
        colorPrimary: "#ADFF00"
    }
}

export const ViewApp = styled.div`
   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-columns: auto 1fr;
   grid-template-rows: 1fr auto;
   grid-column-gap: 0px;
   grid-row-gap: 0px;

   aside { grid-area: 1 / 1 / 3 / 2; }
   main { grid-area: 1 / 2 / 2 / 3; }
   > div:nth-child(3) { grid-area: 2 / 1 / 3 / 3; }

   overflow: hidden;
`