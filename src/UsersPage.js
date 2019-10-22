import React from 'react';
import NavBar from './Nav';
import UserDisplayInput from './UserDisplayInput';
import UserToggleSort from './UserToggleSort';
import UserTable from './UserTable';
import { alphabeticalSortByField, dateSort } from './Utils'

class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            loaded: false,
            numberOfUsers: null,
            numberOfPages: 0,
            currentPage: 0,
            numberOfUsersToDisplay: 10,
            sortByDate: false
        }
    }

    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5da1d439ef829c4e36d6c10e',
            {
                headers: { "secret-key": "$2b$10$0Ak1yhEQ.Rx2bhjs1ID6ne/abaT.2f2.lQnd4/EJ3ZGcr55RHDily", "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(json => this.initialiseUserPage(json, 10, false)
            )
            .catch(error => console.log("Error: ", error))
    }
    initialiseUserPage = (json, numUsersToDisplay, toggleSort) => {

        const pages = Math.ceil(json.length / numUsersToDisplay)
        const startPage = 0;
        const dateSortBool = toggleSort ? !this.state.sortByDate : this.state.sortByDate
        const sortedUsers = !dateSortBool ? json.sort(alphabeticalSortByField("last_name")) : json.sort(dateSort);





        this.setState({
            allUsers: sortedUsers, loaded: true, numberOfUsers: json.length, numberOfPages: pages, currentPage: startPage, numberOfUsersToDisplay: numUsersToDisplay, sortByDate: dateSortBool
        })

    }
    pageListOnClick = (pageNum) => {
        this.setState({ currentPage: pageNum })
    }



    render() {
        if (!this.state.loaded) { return <div>Loading...</div> }
        const pageOfUsers = this.state.allUsers.slice(this.state.currentPage * this.state.numberOfUsersToDisplay, this.state.currentPage * this.state.numberOfUsersToDisplay + (this.state.numberOfUsersToDisplay % 10 == 0 ? 10 : this.state.numberOfUsersToDisplay % 10))


        return (<div>
            <UserToggleSort onClick={() => this.initialiseUserPage(this.state.allUsers, this.state.numberOfUsersToDisplay, true)} sortType={this.state.sortByDate} />
            <UserDisplayInput value={this.state.numberOfUsersToDisplay} onChange={(event) => this.initialiseUserPage(this.state.allUsers, event.target.value, false)} />

            <UserTable page={pageOfUsers} />

            <div>current page is {this.state.currentPage + 1}</div>
            <div>Showing users {this.state.currentPage * this.state.numberOfUsersToDisplay + 1} to {(this.state.currentPage + 1) * this.state.numberOfUsersToDisplay > this.state.numberOfUsers ? this.state.numberOfUsers : (this.state.currentPage + 1) * this.state.numberOfUsersToDisplay} out of {this.state.numberOfUsers} users</div>
            <NavBar numPages={this.state.numberOfPages} currentPage={this.state.currentPage} onClick={this.pageListOnClick} />
        </div>);
    }
}

export default UsersPage;


