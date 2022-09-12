import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import PasswordStrength from './components/PasswordStrength';
import { MDBBtn } from 'mdb-react-ui-kit';
function App() {

const [ password, setPassword] = useState('');

const numbers = '0123456789'
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const specialCharacters = "!'^+%&/()=?_#$§{[]}|;:>÷`<.*-@é"
var currentRandom = 0;
var passwordRandom = 0;
var passwordGeneratedString = '';
const generatePassword = () => {
  passwordGeneratedString = '';
      for (let i = 0; i < 11; i++) {
          currentRandom = Math.floor(Math.random() * 4);
          switch(currentRandom) {
              case 0:
                  passwordRandom = Math.floor(Math.random() * 10);
                  passwordGeneratedString += numbers.charAt(passwordRandom);
                  break;
              case 1:
                  passwordRandom = Math.floor(Math.random() * 26);
                  passwordGeneratedString += upperCaseLetters.charAt(passwordRandom);
                  break;
              case 2:
                  passwordRandom = Math.floor(Math.random() * 26);
                  passwordGeneratedString += lowerCaseLetters.charAt(passwordRandom);
                  break;
              case 3:
                  passwordRandom = Math.floor(Math.random() * 31);
                  passwordGeneratedString += specialCharacters.charAt(passwordRandom);
                  break;
              default:
                  break;
        }
      }
      document.getElementById("form1").value = passwordGeneratedString;
      setPassword(passwordGeneratedString);
}
  return (
    <div className="Container">
      <div className="col-md-4 mx-auto">
      <h1 className="text-center">Simple Password Strength Checker</h1>
      <h4 className="text-center">Developed by Enrico Serrano</h4>
      <p className="text-center">This application uses 'zxcvbn' realistic password strength estimation <a href="https://yarnpkg.com/package/zxcvbn" target="_blank">here</a></p>
      <p>In order for a password to be considered secure it must meet all of these requirements:</p>
      <ul>
        <li>At least <b>11 characters</b></li>
        <li>At least <b>1 uppercase letter</b></li>
        <li>At least <b>1 lowercase letter</b></li>
        <li>At least <b>1 number</b></li>
        <li>At least <b>1 special character</b></li>
      </ul>
      <div className="form-group mb-1">
      <MDBInput id='form1' type='text' onChange={e => setPassword(e.target.value)}/>
      </div>
      <PasswordStrength password={password}></PasswordStrength>
      <MDBBtn onClick={generatePassword}>Generate Password</MDBBtn>
    </div>
    </div>
  );
}

export default App;
