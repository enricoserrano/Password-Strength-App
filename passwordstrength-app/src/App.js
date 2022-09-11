import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import PasswordStrength from './components/PasswordStrength';

function App() {

const [ password, setPassword] = useState('');

  return (
    <div className="Container">
      <div className="col-md-4 mx-auto">
      <h1 className="text-center">Simple Password Strength Checker</h1>
      <h4 className="text-center">Developed by Enrico Serrano</h4>
      <p className="text-center">This application uses 'zxcvbn' realistic password strength estimation <a href="https://yarnpkg.com/package/zxcvbn" target="_blank">here</a></p>
      <p>In order for a password to be considered secure it must meet all of these requirements:</p>
      <ul>
        <li>At least <b>9 characters</b></li>
        <li>At least <b>1 uppercase letter</b></li>
        <li>At least <b>1 lowercase letter</b></li>
        <li>At least <b>1 number</b></li>
        <li>At least <b>1 special character</b></li>
      </ul>
      <div className="form-group mb-1">
      <MDBInput label='Enter Desired Password' id='form1' type='password' onChange={e => setPassword(e.target.value)}/>
      </div>
      <PasswordStrength password={password}></PasswordStrength>
    </div>
    </div>
  );
}

export default App;
