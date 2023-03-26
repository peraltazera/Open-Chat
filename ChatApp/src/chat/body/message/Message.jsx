import { useContext } from 'react'
import Context from '../../../contexts/Context';
// import FirstMessage from '../FirstMessage'
// import OtherMessage from '../OtherMessage'
import MyFirstMessage from './my/MyFirstMessage'
import OtherFirstMessage from './other/OtherFirstMessage'
import MyMessage from './my/MyMessage'
import OtherMessage from './other/OtherMessage'

function Message(props) {

    console.log("Massage Chat")
    
    const { myUser } = useContext(Context)
    
    // const message = props.email == myUser.email ? "MyMessage" : "AnotherMessage"

    if(props.email != props.emailPre){
        if(props.email == myUser.email)
        {
            return <MyFirstMessage {...props}/>
        }
        else
        {
            return <OtherFirstMessage {...props}/>
        }
    }
    else
    {
        if(props.email == myUser.email)
        {
            return <MyMessage {...props}/>
        }
        else
        {
            return <OtherMessage {...props}/>
        }
    }
}

export default Message
