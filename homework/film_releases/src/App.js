import React from 'react';
import './App.css';
import FilmBox from './containers/FilmBox';
import ViewBox from './containers/ViewBox';

function App() {
  return (
    <div className="App">
      <FilmBox />
      <ViewBox />
    </div>
  );
}

export default App;
