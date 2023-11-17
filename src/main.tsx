import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ColorThemer, GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={ColorThemer}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
