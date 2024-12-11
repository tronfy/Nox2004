import BrowserRouter from 'react-router-dom/BrowserRouter'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import i18next from './i18nConfig'

import App from './App.tsx'
import { I18nextProvider } from 'react-i18next'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </BrowserRouter>,
  // </StrictMode>,
  
)
