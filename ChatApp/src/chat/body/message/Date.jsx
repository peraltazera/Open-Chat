import {DateStl, LineStl, TextStl} from './Date.style';

function Date(props) {

    console.log("Date Chat")

    return (
        <DateStl>
            <LineStl/>
            <TextStl>{props.text}</TextStl>
            <LineStl/>
        </DateStl>
    )
}

export default Date
