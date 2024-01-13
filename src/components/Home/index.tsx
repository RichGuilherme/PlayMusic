
import { MusicContextProvider } from '../../context/musicContext'
import { MusicList } from './MusicList'
import { PlayComponent } from './PlayComponent '
import { SideBar } from './SideBar'
import { ViewApp } from './style'

export const Home = () => {
    return (
        <MusicContextProvider>
            <ViewApp>
                <SideBar />
                <MusicList />
                <PlayComponent />
            </ViewApp>
        </MusicContextProvider>
    )
}
