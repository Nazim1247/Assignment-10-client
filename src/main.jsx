import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Root from './components/Root.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AddEquipment from './components/AddEquipment.jsx'
import MyEquipment from './components/MyEquipment.jsx'
import ErrorPage from './errorPage/ErrorPage.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import PrivateRoute from './privateRoute/PrivateRoute.jsx'
import AllSports from './components/AllSports.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://my-assignment-10.vercel.app/fixed-products')
      },
      {
        path: '/sports',
        element: <AllSports></AllSports>,
        loader: ()=> fetch('https://my-assignment-10.vercel.app/all-products')
      },
      {
        path: '/addEquipment',
        element: <PrivateRoute>
          <AddEquipment></AddEquipment>
        </PrivateRoute>
      },
      // {
      //   path: '/myEquipment/:email',
      //   element: <PrivateRoute>
      //     <MyEquipment></MyEquipment>
      //   </PrivateRoute>,
      //   loader: ({params})=> fetch(`https://my-assignment-10.vercel.app/products/${params.email}`)
      // },
      {
        path: '/myEquipment',
        element: <PrivateRoute>
          <MyEquipment></MyEquipment>
        </PrivateRoute>,
        loader: ()=> fetch('https://my-assignment-10.vercel.app/products')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <UpdateProduct></UpdateProduct>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://my-assignment-10.vercel.app/products/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://my-assignment-10.vercel.app/products/${params.id}`)
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
