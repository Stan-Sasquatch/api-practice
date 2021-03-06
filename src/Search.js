import React from 'react';
import SearchBar from './SearchBar';
import RadioButtonGroup from './RadioButtonGroup';
import UserTable from './UserTable';
import { toDateObject, fieldDisplayToProps } from './Utils'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            searchCriteria: "Last Name",
            userInput: "",
            search: false,
            submittedInput: ""
        }
    }
    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5da1d439ef829c4e36d6c10e',
            {
                headers: { "secret-key": "$2b$10$0Ak1yhEQ.Rx2bhjs1ID6ne/abaT.2f2.lQnd4/EJ3ZGcr55RHDily", "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(json => this.setState({ allUsers: json }))
            .catch(error => console.log("Error: ", error))
    }

    handleCriteriaChange = (event) => {
        this.setState({
            searchCriteria: event.target.value

        })
    }

    handleInputSubmit = (event) => {
        event.preventDefault()

        this.setState({
            submittedInput: this.state.userInput

        })
    }

    handleInputChange = event => {
        this.setState({ userInput: event.target.value })
    }

    findUsers = (criteria, input, array) => {
        const userProp = fieldDisplayToProps[criteria]
        const pageArray = array.filter(user => user[userProp] == input)

        return pageArray
    }

    render() {
        return (<div>
            <RadioButtonGroup current={this.state.searchCriteria} onChange={this.handleCriteriaChange} structure={["SearchCriteriaChoice", ["Last Name", "Country", "First Name"]]} />
            <div>Currently searching by user's <b>{this.state.searchCriteria}</b></div>
            <SearchBar onSubmit={this.handleInputSubmit} onChange={this.handleInputChange} />
            {this.state.submittedInput !== "" && <div>Currently searching for {this.state.searchCriteria}: {this.state.submittedInput} </div>}
            {this.state.submittedInput !== "" && <UserTable page={this.findUsers(this.state.searchCriteria, this.state.submittedInput, this.state.allUsers)} fieldArray={["First Name", "Last Name", "Country"]} />}
        </div>);
    }
}

export default Search;