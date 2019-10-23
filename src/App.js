import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UsersPage from './UsersPage';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search Users</Link>
              </li>
              <li>
                <Link to="/users">All Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    );
    function Home() {
      return <h2>Home</h2>;
    }





  }
};
export default App;