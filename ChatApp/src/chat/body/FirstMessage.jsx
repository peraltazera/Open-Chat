import './FirstMessage.css'

function FirstMessage(props) {
    return (
        <div className={`First ${props.message}`}>
            <img src={props.photo} alt="Logo" />
            <div className="ContainerMessage">
                <div className="Info">
                    <p className="Name">{props.name}</p>
                    {/* <p className="Date">{`${props.date.toDate().getUTCHours()}:${props.date.toDate().getUTCMinutes()}`}</p> */}
                </div>
                <div className="ContainerMessageText">
                    <p className="Date">{`${props.date.toDate().getHours()}:${props.date.toDate().getMinutes()}`}</p>
                    <div className="Message">
                        <p className="Text">{props.msg}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstMessage
