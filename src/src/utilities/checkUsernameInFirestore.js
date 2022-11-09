import { useContext } from "react"
import { FirebaseContext } from "../firebase"

export const checkUserInFirestore  = () => {
    /**
     * @type {FirebaseContextData}
     */
    const [auth,firestore] = useContext(FirebaseContext)

    
    
}