import React from 'react';
import './App.css';
import Background from './Background';
import Animation from './Animation';
import Content from './Content';




function App() {
  
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Animation />
      <Background/>
      <Content />
      
      
      
    </div>
    
  );
}

export default App;
