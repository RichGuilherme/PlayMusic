import styled from "styled-components";


export const SectionListSong = styled.section`
    margin-inline: 3.8rem;

`

export const ContainerPlayList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    margin-bottom: 2.8rem;

    width: 100%;
`

export const HeaderList = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   border-bottom: 1px solid rgba(255, 255, 255, .1);
   color: #6B7280;

   margin-bottom: 10px;

   > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      padding: 0 4.0rem 9px 3.0rem;

      span {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 1.25;
      }
   }

   > div div {
      display: flex;
      gap: 1.9rem;
   }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    
    position: relative;

`


export const CardMusic = styled.div<{ $ColorIndex?: string; $ColorIndex2?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;
    padding: 5px 3.0rem;
    
    font-size: 1.6rem;
    // Title
    div:first-child {
        width: 19.0rem;
        display: flex;
        align-items: center;
        gap: 2.2rem;

        img {
            max-width: 4.0rem;
            max-height: 4.0rem;
            background-position: center;
            background-size: cover;
        }
    
        > div {
            min-width: 38.0rem;

            display: flex;
            align-items: center;
            gap: 10px;

            a {
                &[id='${props => props.$ColorIndex}']{
                  color: ${props => props.theme.colors.colorPrimary};
                }
              cursor: default;
              color: #ffff;
            }
        }
    }

    // Color numeração, artista e duração
    > span, 
    div > span{
        color: #6B7280;
    }

    div > span[id='${props => props.$ColorIndex2}'] {
        color: ${props => props.theme.colors.colorPrimary};
    }

    // Artista
    > span:nth-of-type(1) {
        width: 18.0rem;
    }

    // duração
    div:last-child {
        display: flex;
        align-items: center;
        gap: 9px;

        span {
            color: #6B7280;
        }

       svg {
         color: ${props => props.theme.colors.colorPrimary};
       }
    }

    &:nth-child(odd){
        background-color: rgba(255, 255, 255, 0.016);
    } 

    &:hover {
        background-color: #39393B;
    }
   
    div > button{
       border: none;
       background-color: transparent;
       visibility: hidden;
       cursor: pointer;
    }
    
    &:hover :where(div > button){
        visibility: visible
    }
`

export const ListEdit = styled.div`
   display: flex;
   justify-content: space-between;
   height: 10.1rem;

    > div {
        display: flex;
        align-items: center;
        gap: 2.8rem;
 
        color: ${props => props.theme.colors.colorPrimary};
 
        svg {
            cursor: pointer;
        }

        div:not(:nth-child(1)) {
           color:  ${props => props.theme.colors.colorSideBar};
        }
    }
`