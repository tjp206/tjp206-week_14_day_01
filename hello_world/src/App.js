import React from 'react';
import './App.css';

function App() {
  let age = 25;
  let name = "Billy";

  return (
    <div className="App">
      <p>Hello World</p>
       <p>My name is {name} and I'm {age} years old</p>
    </div>
  );
}

export default App;
