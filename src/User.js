import React from 'react';

const User = (props) => {
    console.log(props);
    return (<div>{props.user["last_name"]}</div>);
}

export default User;