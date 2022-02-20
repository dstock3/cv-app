import React from 'react';
import './App.css';
import Form from './components/Form';
import Cloud from './components/Cloud';
import Main from './components/Main';

function App() {
  
  return (
    <div className="App">
      <Cloud cloudSet="one"/>
      <Cloud cloudSet="two"/>
      <Cloud cloudSet="three"/>
      <Cloud cloudSet="four"/>

      <Main />

      {/*
        <Form />
      */}
    </div>
  );
}

export default App;
