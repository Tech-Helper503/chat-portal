import './index.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from './components/Profile'
import { ChatSpace } from './components/ChatSpace'


export function Chat() {
    const {} = useAuth0()
    return (
        <div className="flex">
            <Profile />
            <div className="flex self-center h-screen w-4/5 pr-8 ">
                <ChatSpace />

            </div>
        </div>
    )
}