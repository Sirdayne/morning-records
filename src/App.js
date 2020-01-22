import React from 'react'
import './App.css'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Today from './pages/Today'
import Edit from './pages/Edit'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="main">
        <Header></Header>
        <Router>
            <div className="links">
                <Link to="/">Today</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/edit">Edit</Link>
            </div>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/edit">
                    <Edit />
                </Route>
                <Route path="/">
                    <Today />
                </Route>
            </Switch>
        </Router>
    </div>

  );
}

export default App;
