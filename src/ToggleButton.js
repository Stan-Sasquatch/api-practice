import React from 'react';

const ToggleButton = (props) => {

    return (<button onClick={props.onClick}>{props.text}</button>);
}

export default ToggleButton;