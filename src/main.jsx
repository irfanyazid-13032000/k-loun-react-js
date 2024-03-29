import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import User from './pages/User.jsx'
import Customer from './pages/Customer.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Form from './components/Form.jsx'
import TableAdmin from './components/TableAdmin.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import TableOrder from './components/TableOrder.jsx'
// import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<h1>waduh salah ketik nih kamu</h1>
  },
  {
    path:'/hero',
    element:<Hero/>
  },
  {
    path:'/user',
    element:<User/>
  },
  {
    path:'/customer',
    element:<Customer/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/form',
    element:<Form/>
  },
  {
    path:'/admin',
    element:<TableAdmin/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/order',
    element:<TableOrder/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
