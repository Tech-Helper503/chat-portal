import { useAuth0 } from "@auth0/auth0-react"
import '../index.css'


export function Profile() {
    const { isAuthenticated, user, logout } = useAuth0()
    return isAuthenticated && (
        <div className="flex fixed top-0 right-0 p-5 gap-4 items-center">
            <img src={user.picture} alt="profile picture" className="rounded-3xl w-8 h-8"/>
            <p>{user.name}</p>
            <button onClick={() => logout({
                logoutParams: {
                    returnTo: window.location.origin
                }
            })} className="bg-white hover:border-blue-500 hover:border-2 text-black rounded-xl w-16">Logout</button>
        </div>
    )
}