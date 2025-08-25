import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Register from './pages/Register.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
