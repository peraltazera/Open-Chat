import './OtherMessage.css'

function OtherMessage(props) {
    return (
        <div className={`Other ${props.message}`}>
            {/* <img src={props.photo} alt="Logo" /> */}
            <div className="ContainerMessage">
                <p className="Date">{`${props.date.toDate().getUTCHours()}:${props.date.toDate().getUTCMinutes()}`}</p>
                <div className="Message">
                    <p className="Text">{props.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default OtherMessage