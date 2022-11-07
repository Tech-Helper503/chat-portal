import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import './index.css'
import { FirebaseContext, initApp } from './firebase'
import { NotFound } from './pages/404'
import { WelcomePage } from './pages/AccountWelcome'
import { MessagingArea } from './pages/MessagingArea'



export const [auth, firestore] = await initApp()

let router = createBrowserRouter([{
  element: <App></App>,
  path: '/',
  errorElement: <NotFound></NotFound>
}, {
  element: <WelcomePage></WelcomePage>,
  path: '/welcome',
  errorElement: <NotFound></NotFound>
}, {
  element: <MessagingArea></MessagingArea>,
  path: '/messaging',
  errorElement: <NotFound></NotFound>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="full-page-loader dark:bg-[var(--color-surface-dark)] bg-[var(--color-surface-light)]">
      <FirebaseContext.Provider value={[auth, firestore]}>
        <RouterProvider router={router}></RouterProvider>
      </FirebaseContext.Provider>
    </div>

  </React.StrictMode>
)


