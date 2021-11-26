import { getAuth, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Pages/Login/FireBase/FireBaseInIt";

firebaseInitialize();

const useFirebase = () => {
    //firebase confing 
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //use state
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

   
    //user login
    const userLoinClick = () =>{
        setIsLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const loginUser = result.user;
            setUser(loginUser);
        })
        .catch(error => {

        })
        .finally(() => setIsLoading(false))
    }

    // user log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {

        })
        .finally(() => setIsLoading(false))
    }

    useEffect(()=>{
        // setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => {
                        localStorage.setItem('idToken',idToken);
                })
               setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
          });
    },[])

    return{
        user,
        userLoinClick,
        logOut,
        isLoading
    }
}

export default useFirebase;