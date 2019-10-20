import React from 'react';
import NavBar from './Nav';
import User from './User';
import UserDisplayInput from './UserDisplayInput';

class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            loaded: false,
            numberOfUsers: null,
            numberOfPages: 0,
            currentPage: 0,
            numberOfUsersToDisplay: 10
        }
    }

    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5da1d439ef829c4e36d6c10e',
            {
                headers: { "secret-key": "$2b$10$0Ak1yhEQ.Rx2bhjs1ID6ne/abaT.2f2.lQnd4/EJ3ZGcr55RHDily", "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(json => this.initialiseUserPage(json, 10)
            )
            .catch(error => console.log("Error: ", error))
    }
    initialiseUserPage = (json, numUsersToDisplay) => {

        const pages = Math.ceil(json.length / numUsersToDisplay)
        const startPage = 0

        const sortedUsers = json.sort(function (a, b) {
            if (a["last_name"] < b["last_name"]) { return -1; }
            if (a["last_name"] > b["last_name"]) { return 1; }
            return 0;
        })



        this.setState({ allUsers: sortedUsers, loaded: true, numberOfUsers: json.length, numberOfPages: pages, currentPage: startPage, numberOfUsersToDisplay: numUsersToDisplay })
    }
    pageListOnClick = (pageNum) => {
        this.setState({ currentPage: pageNum })
    }


    render() {
        if (!this.state.loaded) { return <div>Loading...</div> }



        const pageOfUsers = this.state.allUsers.slice(this.state.currentPage * this.state.numberOfUsersToDisplay, this.state.currentPage * this.state.numberOfUsersToDisplay + (this.state.numberOfUsersToDisplay % 10 == 0 ? 10 : this.state.numberOfUsersToDisplay % 10))


        return (<div>
            <UserDisplayInput value={this.state.numberOfUsersToDisplay} onChange={(event) => this.initialiseUserPage(this.state.allUsers, event.target.value)} />
            <NavBar numPages={this.state.numberOfPages} currentPage={this.state.currentPage} onClick={this.pageListOnClick} />
            {pageOfUsers.map(user => <User user={user} />)}


            <div>current page is {this.state.currentPage + 1}</div>
            <div>Showing users {this.state.currentPage * this.state.numberOfUsersToDisplay + 1} to {(this.state.currentPage + 1) * this.state.numberOfUsersToDisplay > this.state.numberOfUsers ? this.state.numberOfUsers : (this.state.currentPage + 1) * this.state.numberOfUsersToDisplay} out of {this.state.numberOfUsers} users</div>
        </div>);
    }
}

export default UsersPage;


