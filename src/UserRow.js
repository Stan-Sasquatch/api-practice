import React from 'react';
import { toDateObject } from './Utils'
const UserRow = (props) => {

    return (<tr><td>{props.user["last_name"]}</td><td> {props.user["Country"]}</td><td>{toDateObject(props.user["Date Joined"]).toDateString()}</td></tr>);
}

export default UserRow;