import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)


import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cases from './pages/Cases.jsx'
import Fashion from './pages/cases/Fashion.jsx'
import Living from './pages/cases/Living.jsx'
import Furniture from './pages/cases/Furniture.jsx'
import Health from './pages/cases/Health.jsx'
import Process from './pages/Process.jsx'
import Contract from './pages/Contract.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function Layout({ children }) {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <Nav />
      <main>{children}</main>
      <footer className="border-t mt-16">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} INTEGMEDIA</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">개인정보 처리방침</a>
            <a href="#" className="hover:underline">이용약관</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>,
    errorElement: <Layout><NotFound/></Layout>,
  },
  { path: "/about", element: <Layout><About/></Layout> },
  {
    path: "/cases",
    element: <Layout><Cases/></Layout>,
    children: [
      { path: "fashion", element: <Fashion/> },
      { path: "living", element: <Living/> },
      { path: "furniture", element: <Furniture/> },
      { path: "health", element: <Health/> },
    ],
  },
  { path: "/process", element: <Layout><Process/></Layout> },
  { path: "/contract", element: <Layout><Contract/></Layout> },
  { path: "/contact", element: <Layout><Contact/></Layout> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
