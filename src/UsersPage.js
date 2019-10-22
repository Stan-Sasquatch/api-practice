import React from 'react';
import NavBar from './Nav';
import User from './User';
import UserDisplayInput from './UserDisplayInput';
import UserToggleSort from './UserToggleSort';

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
        const sorting = toggleSort ? !this.state.sortByDate : this.sortByDate

        const sortedUsers =


            !sorting ? json.sort(function (a, b) {
                if (a["last_name"] < b["last_name"]) { return -1; }
                if (a["last_name"] > b["last_name"]) { return 1; }
                return 0;
            }) : json.sort(function (a, b) {
                let toDateObject = (stringDate) => {
                    let slashPosition = []
                    for (let i = 0; i < stringDate.length; i++) {
                        if (stringDate.charAt(i) == "/") {
                            slashPosition.push(i);
                        }
                    }

                    let month = stringDate.substring(0, slashPosition[0]) - 1;


                    let day = stringDate.substring(slashPosition[0] + 1, slashPosition[1]);

                    let year = stringDate.substring(slashPosition[1] + 1);

                    let dateObject = [year, month, day]

                    return dateObject
                }
                return new Date(...toDateObject(a["Date Joined"])) - new Date(...toDateObject(b["Date Joined"]))
            });
        this.setState({
            allUsers: sortedUsers, loaded: true, numberOfUsers: json.length, numberOfPages: pages, currentPage: startPage, numberOfUsersToDisplay: numUsersToDisplay, sortByDate: sorting
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
            <NavBar numPages={this.state.numberOfPages} currentPage={this.state.currentPage} onClick={this.pageListOnClick} />
            {pageOfUsers.map(user => <User user={user} />)}


            <div>current page is {this.state.currentPage + 1}</div>
            <div>Showing users {this.state.currentPage * this.state.numberOfUsersToDisplay + 1} to {(this.state.currentPage + 1) * this.state.numberOfUsersToDisplay > this.state.numberOfUsers ? this.state.numberOfUsers : (this.state.currentPage + 1) * this.state.numberOfUsersToDisplay} out of {this.state.numberOfUsers} users</div>
        </div>);
    }
}

export default UsersPage;


