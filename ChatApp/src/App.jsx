import { useEffect, useState } from 'react'
import { auth, db } from "../services/FireBaseConfigKey";
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login'
import Chat from './chat/Chat'
import Aside from './aside/Aside'
import Info from './info/Info'
import { doc, setDoc } from "firebase/firestore";
import Context from './contexts/Context';
import Language from './Language';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { LoadStl, TitleStl } from './App.style';

function App() {

    console.log("App")

    const [user, loading] = useAuthState(auth)
    const [info, setInfo] = useState(false)
    const [searchUser, setSearchUser] = useState("")
    const [myUser, setMyUser] = useState({})
    const [chatUser, setChatUser] = useState("")
    const [chats, setChats] = useState("")
    const [chatId, setChatId] = useState("")
    const [messages, setMessages] = useState([])
    const [inputSearchUser, setInputSearchUser] = useState("")
    const [settings, setSettings] = useState(false)
    const [language, setLanguage] = useState("english")
    const [title, setTitle] = useState(Language[language].aside.header.titleChat)
    const [limitMessages, setlimitMessages] = useState(100)
    const [changeLimitMessages, setChangeLimitMessages] = useState(false)
    const [maxMessages, setMaxMessages] = useState(0)
    const [theme, setTheme] = useState(dark)
    const [checked, setChecked] = useState(theme == "dark")

    useEffect(() => {
        if(user){
            setMyUser({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
            setDoc(doc(db, "users", user.uid), {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        }
    }, [user]);

    if(loading) {
        return (
            <LoadStl>
               <TitleStl>Loading</TitleStl>
            </LoadStl>
        )
    }

    if(!user) {
        return (
            <Context.Provider value={{ setChatUser, setMessages, setSettings, setInfo }}>
                <Login />
            </Context.Provider>
          )
    }
    else
    {
        return (
            <Context.Provider value={{ info, setInfo, myUser, searchUser, setSearchUser, chatUser, setChatUser, chats, 
            setChats, chatId, setChatId, messages, setMessages, inputSearchUser, setInputSearchUser, settings, setSettings,
            title, setTitle, limitMessages, setlimitMessages, changeLimitMessages, setChangeLimitMessages, maxMessages, setMaxMessages,
            language, setLanguage, checked, setChecked, theme, setTheme }}>
                <ThemeProvider theme={theme}>
                    <Aside />
                    <Chat user={user}/>
                    <Info />
                </ThemeProvider>
            </Context.Provider>
        )
    }
}

export default App