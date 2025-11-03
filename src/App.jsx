import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

const Data = lazy(() => import("./components/Data"))
const AddUser = lazy(() => import("./components/AddUser"))
const UpdateUser = lazy(() => import('./components/UpdateUser'))
const Navbar = lazy(() => import('./components/Navbar'))

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Data />
    },
    {
      path: "add",
      element: <AddUser />
    },
    {
      path: "update/:id",
      element: <UpdateUser />
    },


  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
