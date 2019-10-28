import React from 'react'
const RadioButton = (props) => {
    return (<div><input type="radio" id={props.id}
        name={props.group} value={props.choice} checked={props.criteria === props.choice} onChange={props.onChange} />
        <label htmlFor={props.id}>{props.choice}</label></div>);
}

export default RadioButton;