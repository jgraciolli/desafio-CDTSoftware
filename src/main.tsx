import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'

const dom = document.getElementById('root') as HTMLElement

createRoot(dom).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
