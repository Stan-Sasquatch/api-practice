import React from 'react';

const UserDisplayInput = (props) => {
    return (<label htmlFor="usersToDisplay">Number of users to display:<input type='number' min='1' max='10' id="usersToDisplay" value={props.value} onChange={props.onChange} />


    </label>);
}

export default UserDisplayInput;