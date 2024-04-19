
import { Outlet } from 'react-router-dom'
import { PlayComponent } from './PlayComponent '
import { SideBar } from './SideBar'
import { ViewApp } from './style'


export const Home = () => {

    return (
        <ViewApp>
            <SideBar />
            <Outlet />
            <PlayComponent />
        </ViewApp>
    )
}
