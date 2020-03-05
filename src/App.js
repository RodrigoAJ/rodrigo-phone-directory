import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './app.scss';
import PhoneList from './posts/PhoneList.js';
import PhoneDetail from './posts/PhoneDetail.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">Welcome to my Phone List</h1>
      </header>      
      <Switch>
          <Route exact path="/" component={PhoneList} />
          <Route exact path="/phonedetail/:id" component={PhoneDetail} />
      </Switch>
      <footer className="App-footer">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Phones</Link></li>
            <li><Link to="/">About us</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
