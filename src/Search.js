import React from 'react';
import SearchBar from './SearchBar';
import SearchCriteriaRadioButtons from './SearchCriteriaRadioButtons';

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





    render() {
        return (<div>
            <SearchCriteriaRadioButtons criteria={this.state.searchCriteria} onChange={this.handleCriteriaChange} />
            {this.state.searchCriteria === "Last Name" ? "Currently searching by user's last name" : "Currently searching by user's country"}
            <SearchBar onSubmit={this.handleInputSubmit} onChange={this.handleInputChange} />

            {this.state.submittedInput !== "" && <div>Currently searching for {this.state.searchCriteria}: {this.state.submittedInput} </div>}

            <div> User input: {this.state.userInput}</div>
            <div> Submitted Input:{this.state.submittedInput}</div>

        </div>);
    }
}

export default Search;