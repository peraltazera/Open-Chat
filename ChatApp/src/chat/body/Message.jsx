import { useContext } from 'react'
import Context from '../../contexts/Context';
import FirstMessage from './FirstMessage'
import OtherMessage from './OtherMessage'

function Message(props) {

    console.log("Massage Chat")
    
    const { myUser } = useContext(Context)
    
    const message = props.email == myUser.email ? "MyMessage" : "AnotherMessage"

    if(props.email != props.emailPre){
        console.log("FirstMessage")
        return <FirstMessage {...props} message={message}/>
    }
    else
    {
        console.log("FirstMessage")
        return <OtherMessage {...props} message={message}/>
    }
}

export default Message
