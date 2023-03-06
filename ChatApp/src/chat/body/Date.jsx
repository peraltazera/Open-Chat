import { useState } from 'react'
import './Date.css'

function Date(props) {
    return (
        <div className="Date">
            <span className="Line" />
            <p>{props.text}</p>
            <span className="Line" />
        </div>
    )
}

export default Date
