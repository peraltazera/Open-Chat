import { useContext } from 'react'
import Context from '../../../contexts/Context';
// import FirstMessage from '../FirstMessage'
// import OtherMessage from '../OtherMessage'
import MyFirstMessage from './my/MyFirstMessage'
import OtherFirstMessage from './other/OtherFirstMessage'
import MyMessage from './my/MyMessage'
import OtherMessage from './other/OtherMessage'
import Date from './Date'
import Language from '../../../Language'

function Message(props) {
    
    const { myUser, language } = useContext(Context)

    if(props.email != props.emailPre && props.date.toDate().getDate() == props.lastDate.toDate().getDate())
    {
        if(props.email == myUser.email)
        {
            return <MyFirstMessage {...props}/>
        }
        else
        {
            return <OtherFirstMessage {...props}/>
        }
    }
    else if(props.date.toDate().getDate() != props.lastDate.toDate().getDate()){
        if(props.email == myUser.email)
        {
            return <>
                    <Date text= {`${Language[language].chat.body.month[props.date.toDate().getMonth()]} ${props.date.toDate().getDate()}, ${props.date.toDate().getFullYear()}`}/>
                    <MyFirstMessage {...props}/>
                </>
        }
        else
        {
            return <>
                    <Date text= {`${Language[language].chat.body.month[props.date.toDate().getMonth()]} ${props.date.toDate().getDate()}, ${props.date.toDate().getFullYear()}`}/>
                    <OtherFirstMessage {...props}/>
                </>
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
