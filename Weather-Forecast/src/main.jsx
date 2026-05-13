import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider,createRoutesFromElements,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Weather from './pages/Weather.jsx'
import Layout from './Layout.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
      </Route>
      
    
    </>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
