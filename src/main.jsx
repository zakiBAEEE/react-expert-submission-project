import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import { store } from './states/index.js'
import { BrowserRouter } from 'react-router'
import './index.css';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  </Provider>

)
