import React from 'react';
import NavBar from './Nav';
import User from './User';

class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            loaded: false,
            numberOfUsers: null,
            numberOfPages: 0,
            currentPage: 0
        }
    }

    componentDidMount() {
        fetch('https://api.jsonbin.io/b/5da1d439ef829c4e36d6c10e',
            {
                headers: { "secret-key": "$2b$10$0Ak1yhEQ.Rx2bhjs1ID6ne/abaT.2f2.lQnd4/EJ3ZGcr55RHDily", "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(json => {
                const pages = Math.ceil(json.length / 10)
                const startPage = 0
                // const thisPageUsers = json.slice(currentPage * 10,currentPage * 10 + 10 )
                this.setState({ allUsers: json, loaded: true, numberOfUsers: json.length, numberOfPages: pages, currentPage: startPage })
            }
            )
            .catch(error => console.log("Error: ", error))
    }

    pageListOnClick = (pageNum) => {
        this.setState({ currentPage: pageNum })
    }

    render() {
        if (!this.state.loaded) { return <div>Loading...</div> }

        const pageOfUsers = this.state.allUsers.slice(this.state.currentPage * 10, this.state.currentPage * 10 + 10)


        return (<div>
            <NavBar numPages={this.state.numberOfPages} currentPage={this.state.currentPage} onClick={this.pageListOnClick} />
            {pageOfUsers.map(user => <User user={user} />)}


            <div>current page is {this.state.currentPage}</div>
        </div>);
    }
}

export default UsersPage;


