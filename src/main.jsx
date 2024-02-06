import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import User from './pages/User.jsx'
// import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<h1>waduh salah ketik nih kamu</h1>
  },{
    path:'/hero',
    element:<Hero/>
  },{
    path:'/user',
    element:<User/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
