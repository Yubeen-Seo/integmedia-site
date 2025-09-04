// C:\Users\ahxh1\OneDrive\Desktop\integmedia-site\src\main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // ⬅ 추가
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">       {/* ⬅ Router로 감싸기 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
