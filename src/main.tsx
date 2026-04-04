import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { applyEmbeddedAppShellTheme } from '@shiryustudios/team-app-sdk'
import App from './App'
import './index.css'

const params = new URLSearchParams(window.location.search)
const requestedTheme = params.get('theme')
const storedTheme = localStorage.getItem('theme')
const normalizedTheme = requestedTheme === 'light' || requestedTheme === 'dark' || requestedTheme === 'auto'
  ? requestedTheme
  : storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'auto'
    ? storedTheme
    : 'dark'

applyEmbeddedAppShellTheme()

const resolvedTheme = normalizedTheme === 'auto'
  ? window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  : normalizedTheme

document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
document.documentElement.style.colorScheme = resolvedTheme
localStorage.setItem('theme', normalizedTheme)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
