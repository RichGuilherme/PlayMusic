import { Home } from "./components/Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Authentication } from "./components/Authentication";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

function App() {
  const PrivateRoute = ( {children}: Props ) => {
    const isAuthenticated = true

    return isAuthenticated ? (
      children
    ) : (
      <Navigate to="/authentication" replace />
    )
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
