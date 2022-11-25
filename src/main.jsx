import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import SingleManufactur from './components/SingleManufacturer'
import SingleBatch from './components/SingleBatch'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/manufacturer/*' element={<SingleManufactur />} />
        <Route path='/batch/*' element={<SingleBatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
