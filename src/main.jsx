import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Root from './components/Root.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Sports from './components/Sports.jsx'
import AddEquipment from './components/AddEquipment.jsx'
import MyEquipment from './components/MyEquipment.jsx'
import ErrorPage from './errorPage/ErrorPage.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import PrivateRoute from './privateRoute/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/sports',
        element: <Sports></Sports>
      },
      {
        path: '/addEquipment',
        element: <PrivateRoute>
          <AddEquipment></AddEquipment>
        </PrivateRoute>
      },
      {
        path: '/myEquipment',
        element: <PrivateRoute>
          <MyEquipment></MyEquipment>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
