import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import '../../Firebase/firebase.init';
import initializeFirebase from "../../Firebase/firebase.init";


initializeFirebase();
const useFirebase = ()=>{
    const [user, setUser] =useState({});
    const [error, setError] =useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(); 

    const handleGoogleSignIn = () =>{    
        signInWithPopup(auth, googleProvider)
        .then((result) => {
        });
    }
    const logOut = () =>{
        signOut(auth)
            .then(()=>{

            })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user)
            }
        });
    }, [])
    return {
        user, handleGoogleSignIn, logOut
    }
}

export default useFirebase;