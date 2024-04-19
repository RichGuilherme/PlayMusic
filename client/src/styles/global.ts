import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Inter", sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body{
        overflow: hidden;
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
        colorPrimary: "#ADFF00",
        colorPrimaryHover: "#ace92b"
    }
}

