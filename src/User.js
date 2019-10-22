import React from 'react';

const User = (props) => {

    return (<tr><td>{props.user["last_name"]}</td><td> {props.user["Country"]}</td><td>{props.user["Date Joined"]}</td></tr>);
}

export default User;