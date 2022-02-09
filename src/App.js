import React from 'react';
import './App.css';
import Form from './components/Form';
import Cloud from './components/Cloud';

function App() {
  
  return (
    <div className="App">
      <Cloud cloudSet="one"/>
      <Cloud cloudSet="two"/>
      <Cloud cloudSet="three"/>
      <Cloud cloudSet="four"/>

      <Form />
      
    </div>
  );
}

export default App;
