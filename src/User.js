import React from 'react';

const User = (props) => {
    console.log(props);
    return (<div>{props.user["id"] + ": " + props.user["last_name"] + ", " + props.user["Country"]}</div>);
}

export default User;