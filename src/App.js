import React, { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Today from './pages/Today'
import Edit from './pages/Edit'
import { fetchDates } from './store/Dates'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

    const [ dates, setDates ] = useState([])

    useEffect(() => {
        fetchDates().then(res => {
            setDates(res)
        })
    }, [])

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
                        <Dashboard dates={dates} />
                    </Route>
                    <Route path="/edit">
                        <Edit dates={dates} />
                    </Route>
                    <Route path="/">
                        <Today dates={dates} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
