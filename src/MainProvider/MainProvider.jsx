import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();



export const AuthCustomContext = createContext(null)

const MainProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // Register 
    const registerUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // sign in with google
    const signInGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    // log out 
    const logOut = () => {
        setLoading(true)
        return signOut (auth)
        .then((result) => {
            console.log(result.user, 'result log out')
          }).catch((error) => {
            console.error(error,'error from log out')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You Log Out successfully !",
                showConfirmButton: false,
                timer: 1500
              });
          });
    }
    // sign in 
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile 
    const updateProfileFromUser = (name, photoURL) => {
        console.log(name, photoURL, 'provider')
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL,
        });
    }
    // web keeper 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        } )
        return () => unsubscribe()
    },[])

    // All value 
    const userInfo = {user, loading, registerUser, signInGoogle, signInGithub,logInUser, logOut, updateProfileFromUser }
    return (
        <AuthCustomContext.Provider value={userInfo}>
            {children}
        </AuthCustomContext.Provider >
    );
};
MainProvider.propTypes = {
    children: PropTypes.node
}
export default MainProvider;