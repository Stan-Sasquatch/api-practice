import React from 'react';

const UserToggleSort = (props) => {

    return (<button onClick={props.onClick}>{props.sortType ? "Click to Sort Alphabetically" : "Click to Sort Chronologically"}</button>);
}

export default UserToggleSort;