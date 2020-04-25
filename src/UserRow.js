import React from 'react';
import { toDateObject, fieldDisplayToProps } from './Utils'
const UserRow = (props) => {



    return (


        <tr>
            {props.fieldArray.map(field => <td>{fieldDisplayToProps[field] == "Date Joined" ? toDateObject(props.user["Date Joined"]).toDateString() : props.user[fieldDisplayToProps[field]]}</td>)}


        </tr>);
}

export default UserRow;