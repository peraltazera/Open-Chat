import './OtherMessage.css'

function OtherMessage(props) {
    return (
        <div className={`Other ${props.message}`}>
            {/* <img src={props.photo} alt="Logo" /> */}
            <div className="ContainerMessage">
                <p className="Date">{`${props.date.toDate().getHours()}:${props.date.toDate().getMinutes()}`}</p>
                <div className="Message">
                    <p className="Text">{props.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default OtherMessage 