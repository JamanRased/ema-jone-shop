import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import '../../Firebase/firebase.init';
import initializeFirebase from "../../Firebase/firebase.init";

initializeFirebase();
const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(); 


    //Optional
    const handleGoogleSignIn = () =>{    
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }
    const logOut = () =>{
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])
    return {
        user,
        loading,
        handleGoogleSignIn,
        logOut
    }
}

export default useFirebase;