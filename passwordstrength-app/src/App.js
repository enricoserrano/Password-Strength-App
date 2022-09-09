import logo from './logo.svg';
import './App.css';
import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
      <h1>Simple Password Strength Checker</h1>
      <h6>Developed by Enrico Serrano</h6>
      <MDBInput label='Enter Desired Password' id='form1' type='text' />
    </div>
  );
}

export default App;
