import { useState } from 'react'
import './Message.css'

function Message(props) {
    
    const message = props.author == "Victor" ? "MyMessage" : "OtherMessage"

    return (
        <div className={'Container ' + message}>
            <div className="Message">
                <p>{props.author}: {props.msg}</p>
            </div>
        </div>
    )
}

export default Message
