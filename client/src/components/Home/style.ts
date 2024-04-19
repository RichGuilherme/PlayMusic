import styled from "styled-components";

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