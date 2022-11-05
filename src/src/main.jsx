import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import './index.css'

let router = createBrowserRouter([{
  element: <App></App>,
  path: '/'
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="full-page-loader">
      <RouterProvider router={router}></RouterProvider>
    </div>

  </React.StrictMode>
)
