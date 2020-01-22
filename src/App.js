import React from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
