import React from 'react';
import User from "./User";
import './UserTable.css';

const UserTable = (props) => {
    return (<table>
        <tbody>
            <tr>
                <th>Last Name</th>
                <th>Country</th>
                <th>Date Joined</th>
            </tr>
            {props.page.map(user => <User user={user} />)}
        </tbody></table>);
}

export default UserTable;