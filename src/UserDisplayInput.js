import React from 'react';

const UserDisplayInput = (props) => {
    return (<label for="usersToDisplay">Number of users to display:<input id="usersToDisplay" value={props.value} onChange={props.onChange} type="number" min="1" max="10" /></label>);
}

export default UserDisplayInput;