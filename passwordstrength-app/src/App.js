import logo from './logo.svg';
import './App.css';
import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="Container">
      <div className="col-md-4 mx-auto">
      <h1 className="text-center">Simple Password Strength Checker</h1>
      <h6 className="text-center">Developed by Enrico Serrano</h6>
      <MDBInput label='Enter Desired Password' id='form1' type='text' />
    </div>
    </div>
  );
}

export default App;
