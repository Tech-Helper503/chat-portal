import { useContext } from 'react'
import { AuthBox } from './pages/AuthBox'
import { useAuthState } from 'react-firebase-hooks/auth'
import './App.css'
import { MessagingArea } from './pages/MessagingArea'
import { FirebaseContext } from './firebase'
import { LoadingError } from './components/LoadingError'
import { ErrorElement } from './components/ErrorElement'
import { LoadingElement } from './components/LoadingElement'

function App() {
  /**
   * @type {FirebaseContextData}
   */
  const [auth, firestore] = useContext(FirebaseContext)
  const [user, loading, error] = useAuthState(auth)


  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen dark:bg-[var(--color-surface-dark)] bg-[var(--color-surface-light)]">
     <LoadingError error={error} loading={loading} errorElement={<ErrorElement></ErrorElement>} loadingElement={<LoadingElement></LoadingElement>}>
      {user ? <MessagingArea user={user}></MessagingArea> : <AuthBox></AuthBox>}
     </LoadingError>
    </div>
  )
}

export default App
