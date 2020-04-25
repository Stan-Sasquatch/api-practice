import React from 'react';
import NavBar from './Nav';
import UserDisplayInput from './UserDisplayInput';
import ToggleButton from './ToggleButton';
import UserTable from './UserTable';
import { alphabeticalSortByField, dateSort, fieldDisplayToProps } from './Utils'
import RadioButtonGroup from './RadioButtonGroup';

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
            userZero: false,
            sortCriteria: "Last Name"
        }
    }

    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5da1d439ef829c4e36d6c10e',
            {
                headers: { "secret-key": "$2b$10$0Ak1yhEQ.Rx2bhjs1ID6ne/abaT.2f2.lQnd4/EJ3ZGcr55RHDily", "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(json => this.initialiseUserPage(json, 10, this.state.sortCriteria)
            )
            .catch(error => console.log("Error: ", error))
    }



    initialiseUserPage = (json, numUsersToDisplay, criteria) => {
        console.log(json);
        const pages = Math.ceil(json.length / numUsersToDisplay)
        const startPage = 0;
        const sortedUsers = criteria == 'Date Joined' ? json.sort(dateSort) : json.sort(alphabeticalSortByField(fieldDisplayToProps[criteria]));

        this.setState({
            allUsers: sortedUsers,
            loaded: true,
            numberOfUsers: json.length,
            numberOfPages: pages,
            currentPage: startPage,
            numberOfUsersToDisplay: numUsersToDisplay,
            sortCriteria: criteria,
            userZero: false
        })

    }
    pageListOnClick = (pageNum) => {
        this.setState({ currentPage: pageNum })
    }

    handleChange = (event) => event.target.value > 0 && event.target.value < 11 ? this.initialiseUserPage(this.state.allUsers, event.target.value, false) : event.target.value > 10 ? alert("please enter a number between 1 and 10") : this.setState({ userZero: true });



    render() {
        if (!this.state.loaded) { return <div>Loading...</div> }
        const pageOfUsers = this.state.allUsers.slice(this.state.currentPage * this.state.numberOfUsersToDisplay, this.state.currentPage * this.state.numberOfUsersToDisplay + (this.state.numberOfUsersToDisplay % 10 == 0 ? 10 : this.state.numberOfUsersToDisplay % 10))


        return (<div>
            <ToggleButton onClick={() => this.initialiseUserPage(this.state.allUsers, this.state.numberOfUsersToDisplay, this.state.sortCriteria == "Date Joined" ? "Last Name" : "Date Joined")} text={this.state.sortCriteria == "Date Joined" ? "Click to Sort Alphabetically" : "Click to Sort Chronologically"} />
            {/* <RadioButtonGroup current ="" /> */}
            <UserDisplayInput value={!this.state.userZero ? this.state.numberOfUsersToDisplay : ''} onChange={this.handleChange} />

            <UserTable page={pageOfUsers} fieldArray={["Last Name", "Country", "Date Joined"]} />

            <div>current page is {this.state.currentPage + 1}</div>
            <div>Showing users {this.state.currentPage * this.state.numberOfUsersToDisplay + 1} to {(this.state.currentPage + 1) * this.state.numberOfUsersToDisplay > this.state.numberOfUsers ? this.state.numberOfUsers : (this.state.currentPage + 1) * this.state.numberOfUsersToDisplay} out of {this.state.numberOfUsers} users</div>
            <NavBar numPages={this.state.numberOfPages} currentPage={this.state.currentPage} onClick={this.pageListOnClick} />
        </div>);
    }
}

export default UsersPage;


