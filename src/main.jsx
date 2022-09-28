import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[  // esto quiere decir que dentro de layout tendran diversos elementos vinculado a una ruta
      {
        index: true,   // indica que en la pagina principal aparte del layout se leera este componente
        element: <h2>OPCION 2</h2>
      },
      {
        path:'/cliente/nuevo', 
        element: <NuevoCliente />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/> 
  </React.StrictMode>
)
