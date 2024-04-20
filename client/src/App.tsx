import { Home } from "./components/Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Authentication } from "./components/Authentication";
import { ReactNode } from "react";
import Cookies from 'js-cookie'
import { MusicList } from "./components/Home/MusicList";
import { PlayLists } from "./components/Home/PlayLists";
import { UserConfig } from "./components/Home/userConfig";



type Props = {
    children: ReactNode
}

function App() {
    const PrivateRoute = ({ children }: Props) => {
        const token = Cookies.get('token')

        if (token) {
            return children
        } else {
            return <Navigate to="/authentication" />
        }
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Routes >
                    <Route path="/authentication" element={<Authentication />} />
                    <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} >
                        <Route index element={<PlayLists />} />
                        <Route path="playlists" element={<PlayLists />} />
                        <Route path="playlist/:IdPlaylist" element={<MusicList />} />
                        <Route path="user" element={<UserConfig />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
