import React from 'react'
import './RadioButton.css';
const RadioButton = (props) => {
    return (<th><input type="radio" id={props.id}
        name={props.group} value={props.choice} checked={props.current == props.choice} onChange={props.onChange} />
        <label htmlFor={props.id}>{props.choice}</label></th>);
}

export default RadioButton;