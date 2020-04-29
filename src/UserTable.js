import React from 'react';
import UserRow from "./UserRow";
import './UserTable.css';
import RadioButton from './RadioButton';

const UserTable = (props) => {

    return (<table>
        <tbody>
            <tr>

                {props.fieldArray.map(field => <RadioButton group={"SortCriteria"} choice={field} current={props.current} onChange={props.onChange} />)}


            </tr>
            {props.page.map(user => <UserRow fieldArray={props.fieldArray} user={user} />)}
        </tbody></table>);
}

export default UserTable;