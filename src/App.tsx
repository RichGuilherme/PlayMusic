import { MusicList } from "./components/MusicList"
import { PlayComponent } from "./components/PlayComponent "
import { SideBar } from "./components/SideBar"
import { ViewApp } from "./styles/global"


function App() {

  return (
    <div className="app">
      <ViewApp>
        <SideBar />
        <MusicList />
        <PlayComponent />
      </ViewApp>
    </div>
  )
}

export default App
