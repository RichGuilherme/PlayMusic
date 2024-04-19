import { BannerPlayList } from "./BannerPlayList"
import { SongList } from "./SongList"
import { MainViewContainer } from "./style"


export const MusicList = () => {   
 
    return (
        <MainViewContainer>
            <BannerPlayList />
            <SongList />
        </MainViewContainer>
    )
}
