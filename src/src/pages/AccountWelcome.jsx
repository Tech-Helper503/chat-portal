import { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ErrorElement } from "../components/ErrorElement";
import { Input } from "../components/Input";
import { LoadingElement } from "../components/LoadingElement";
import { LoadingError } from "../components/LoadingError";
import { FirebaseContext } from "../firebase";
import { updateProfile } from 'firebase/auth'
import { MessagingArea } from "./MessagingArea";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const WelcomePage = () => {
    /**
     * @type {FirebaseContextData}
     */
    const [ auth, firestore ] = useContext(FirebaseContext);
    const [user, loading, error] = useAuthState(auth);
    const [displayName, setDisplayName] = useState('');
    const [isSetDisplayName, setisSetDisplayName] = useState(false)
    const navigate = useNavigate()


    return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
        <LoadingError loading={loading} error={error} loadingElement={<LoadingElement></LoadingElement>} errorElement={<ErrorElement error={error}></ErrorElement>}>
            {isSetDisplayName ? navigate('/messaging') : (
            <>
            <h1 className="text-9xl dark:text-[var(--color-primary-dark)] text-[var(--color-primary-light)] p-10">Hello, set a username</h1>
            <form onSubmit={e => { e.preventDefault();updateProfile(auth.currentUser, { displayName: displayName}); setisSetDisplayName(true)}}>
                <Input placeholder="enter your username" className="w-20 h-4" onChange={e => setDisplayName(e.target.value)}></Input>

            </form>
            </>)}
        </LoadingError>
    </div>

    );
};
