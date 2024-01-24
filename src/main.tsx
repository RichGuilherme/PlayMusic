import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ColorThemer, GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={ColorThemer}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
