import React from 'react';
import './App.css';
import PiggyBank from './PiggyBank.js'

function App() {
  return (
    <div className="App">
     <PiggyBank title="Savings Pig" name="TJ" amount={150}/>
    </div>
  );
}

export default App;
