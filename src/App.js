import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      JSONUser: {},
      loaded: false
    };

  }

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5da1d439ef829c4e36d6c10e',
      {
        headers: { "secret-key": "$2b$10$0Ak1yhEQ.Rx2bhjs1ID6ne/abaT.2f2.lQnd4/EJ3ZGcr55RHDily", "Content-Type": "application/json" }
      })
      .then(response => response.json())
      .then(json => this.setState({ JSONUser: json, loaded: true }))
      .catch(error => console.log("Error: ", error))
  }




  render() {
    if (!this.state.loaded) { return <div>Loading...</div> }

    const firstName = this.state.JSONUser[1]["first_name"]
    const lastName = this.state.JSONUser[1]["last_name"]

    return (


      <div>testing:{firstName
      }
        <h1>
          {lastName}
        </h1></div>

    );
  }
};
export default App;