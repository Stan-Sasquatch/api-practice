import React from 'react';
import UserRow from "./UserRow";
import './UserTable.css';

const UserTable = (props) => {

    return (<table>
        <tbody>
            <tr>

                {props.fieldArray.map(field => <th>{field}</th>)}

            </tr>
            {props.page.map(user => <UserRow fieldArray={props.fieldArray} user={user} />)}
        </tbody></table>);
}

export default UserTable;