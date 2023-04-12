import { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { auth, provider } from "../services/FireBaseConfigKey"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import Context from './contexts/Context'
import { LoginStl, BtnGoogleStl, TitleStl, TextBtnGoogleStl, BlueTitleStl } from './Login.styles'

function Login() {

    const { setChatUser, setMessages, setSettings, setInfo } = useContext(Context)

    const handleSignin = () => {
        setChatUser("")
        setMessages([])
        setSettings(false)
        setInfo(false)
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                //console.log(result.user)
            }).catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                const email = error.customData.email
                const credential = GoogleAuthProvider.credentialFromError(error)
            })
    }

    return (
        <LoginStl>
            <TitleStl><BlueTitleStl>Open</BlueTitleStl>.Chat</TitleStl>
            <BtnGoogleStl onClick={handleSignin}>
                <FcGoogle size={26}/>
                <TextBtnGoogleStl>Sign in with google</TextBtnGoogleStl>
            </BtnGoogleStl>
        </LoginStl>
    )
}

export default Login