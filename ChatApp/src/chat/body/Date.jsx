import './Date.css'

function Date(props) {

    console.log("Date Chat")

    return (
        <div className="Date">
            <span className="Line" />
            <p>{props.text}</p>
            <span className="Line" />
        </div>
    )
}

export default Date
