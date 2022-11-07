import { Button } from "../components/Button";
import { signOut } from 'firebase/auth'
import { useContext } from "react";
import { FirebaseContext } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection} from 'firebase/firestore'
import { WelcomePage } from "./AccountWelcome";
import { LoadingError } from "../components/LoadingError";
import { LoadingElement } from "../components/LoadingElement";
import { ErrorElement } from "../components/ErrorElement";

/**
 * 
 * @param {import('firebase/auth'.UserCredential)} user 
 * @returns 
 */
export const MessagingArea = ({user}) =>{ 
    /**
     * @type {FirebaseContextData}
     */
    const [auth, firestore] = useContext(FirebaseContext)

    return (
        <div className="flex flex-col justify-center items-center">
            {auth?.currentUser?.displayName !== null ? (<Button onClick={async () => await signOut(auth)}>Sign Out</Button>):<WelcomePage></WelcomePage>}
        </div>
    )

}