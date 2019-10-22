import React from 'react';

const User = (props) => {

    return (<div>{props.user["last_name"] + ", " + props.user["Country"]}; date joined: {props.user["Date Joined"]}</div>);
}

export default User;