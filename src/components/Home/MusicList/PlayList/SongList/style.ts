import styled from "styled-components";


export const SSongList = styled.section`
    margin-inline: 38px;

`

export const ContainerPlayList = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    margin-bottom: 28px;

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

      padding: 0 40px 9px 30px;

      span {
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 1.25;
      }
   }

   > div div {
      display: flex;
      gap: 19px;
   }
`

export const Musics = styled.div`
    display: flex;
    flex-direction: column;
`


export const CardMusic = styled.div<{ $primary?: string; }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;
    padding: 5px 30px;
    
    cursor: pointer;
    
    // Title
    div:first-child {
        width: 190px;
        display: flex;
        align-items: center;
        gap: 22px;

        img {
            max-width: 40px;
            max-height: 40px;
            background-position: center;
            background-size: cover;
        }
    
        > div {
            min-width: 380px;

            display: flex;
            align-items: center;
            gap: 10px;

            a {
                &[id='${props => props.$primary}']{
                  color: ${props => props.theme.colors.colorPrimary};
                }
              color: #ffff;
            }
        }
    }

    > span, 
    div > span{
        color: #6B7280;
}

    // Artista
    > span:nth-of-type(1) {
        width: 180px;
    }

    // duração
    div:last-child {
        display: flex;
        align-items: center;
        gap: 19px;

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

    
`

export const ListEdit = styled.div`
   display: flex;
   justify-content: space-between;
   height: 101px;

    > div {
        display: flex;
        align-items: center;
        gap: 28px;
 
        color: ${props => props.theme.colors.colorPrimary};
 
        svg {
            cursor: pointer;
        }

        div:not(:nth-child(1)) {
           color:  ${props => props.theme.colors.colorSideBar};
        }
    }
`