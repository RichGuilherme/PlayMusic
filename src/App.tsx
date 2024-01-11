import { Home } from "./components/Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Authentication } from "./components/Authentication";
import { ReactNode } from "react";
import Cookies from 'js-cookie'
import { IdContextProvider } from "./context/idContext";


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
      <IdContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} />
            
          </Routes>
        </BrowserRouter>
      </IdContextProvider>
    </div>
  )
}

export default App
