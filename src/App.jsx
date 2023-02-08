import './index.css'
import { Chat } from './Chat'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { loginWithPopup, isAuthenticated } = useAuth0()
  return (
    <div className="w-screen h-screen bg-zinc-900 text-white">
      {isAuthenticated ? <Chat></Chat> : (
      <div className="flex justify-center items-center w-full h-full flex-col">
        <button onClick={() => loginWithPopup()} className="p-6 rounded-md bg-white w-48  hover:border-blue-500 hover:border-2 text-black">
          Login
        </button>
      </div>

      )}
    </div>
  )
}

export default App
