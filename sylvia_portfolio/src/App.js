import './App.css';
import 'antd/dist/reset.css';
import React from 'react';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Login/>
      <Main/> 
    </div>
  );
}

export default App;
