import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Father } from './components/Father.jsx'
import './07-reducer/intro-reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Father />
  </StrictMode>,
)
