import React from 'react';
import { toDateObject } from './Utils'
const UserRow = (props) => {

    const fieldDisplayToProps = {
        "id": "id",
        "First Name": "first_name",
        "Last Name": "last_name",
        "Email": "email",
        "Country": "Country",
        "Date Joined": "Date Joined"
    }

    return (


        <tr>
            {props.fieldArray.map(field => <td>{fieldDisplayToProps[field] == "Date Joined" ? toDateObject(props.user["Date Joined"]).toDateString() : props.user[fieldDisplayToProps[field]]}</td>)}


        </tr>);
}

export default UserRow;