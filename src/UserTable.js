import React from 'react';
import UserRow from "./UserRow";
import './UserTable.css';

const UserTable = (props) => {

    return (<table>
        <tbody>
            <tr>
                <th>Last Name</th>
                <th>Country</th>
                <th>Date Joined</th>
            </tr>
            {props.page.map(user => <UserRow user={user} />)}
        </tbody></table>);
}

export default UserTable;