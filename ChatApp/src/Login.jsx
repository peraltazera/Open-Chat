import { useEffect, useState } from 'react'
import './Login.css'
import { auth, provider, db } from "../services/FireBaseConfigKey";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './chat/Chat'
import Aside from './aside/Aside'
import Info from './info/Info'
import { doc, setDoc } from "firebase/firestore";
import { FcGoogle } from 'react-icons/fc';
import Context from './contexts/Context';

function Login() {
    const [user, loading] = useAuthState(auth)
    const [hidden, setHidden] = useState(false)

    console.log(user)
    console.log(auth)

    const handleSignin = () => {
        console.log("teste2")
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                //console.log(result.user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    useEffect(() => {
        if(user){
            console.log("teste")
            setDoc(doc(db, "users", user.uid), {
                name: user.displayName,
                email: user.email,
            });
        }
    }, [user]);

    if(loading) {
        return (
            <div className="Login">
               <h1>Loading</h1>
            </div>
          )
    }

    if(!user) {
        return (
            <div className="Login">
               <h1>Open.Chat</h1>
               <button className='Google' onClick={handleSignin}>
                <FcGoogle className='Icon' size={26}/>
                Sign in with google
               </button>
            </div>
          )
    }

    return (
        <Context.Provider value={{ hidden, setHidden, user }}>
            <Aside />
            <Chat user={user}/>
            <Info />
        </Context.Provider>
    )
}

export default Login