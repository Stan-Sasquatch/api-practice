import React from 'react';
import SearchBar from './SearchBar';
import SearchCriteriaRadioButtons from './SearchCriteriaRadioButtons';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            searchCriteria: "last_name"
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




    render() {
        return (<div>
            <SearchCriteriaRadioButtons criteria={this.state.searchCriteria} onChange={this.handleCriteriaChange} />
            {this.state.searchCriteria === "last_name" ? "Currently searching by user's last name" : "Currently searching by user's country"}
            <SearchBar />
        </div>);
    }
}

export default Search;