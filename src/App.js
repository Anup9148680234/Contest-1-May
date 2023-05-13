import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Declare state variables
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Validation function
  const validateInput = () => {
    if (num1.trim() === '' || num2.trim() === '') {
        if(num1.trim() === ''){
            setError('Error: Num1 Cannot be Empty');
            setSuccess('');
            setResult('');
        }
        else if(num2.trim() === ''){
            setError('Error: Num2 Cannot be Empty');
            setSuccess('');
            setResult('');
        }
      
      return false;
    }
    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setError('Error: Please enter valid numbers.');
      setSuccess('');
      setResult('');
      return false;
    }
    return true;
  };

  // Arithmetic operations
  const add = () => {
    if (validateInput()) {
      setResult(parseFloat(num1) + parseFloat(num2));
      setError('');
      setSuccess('Success : Your result is shown above!');
    }
  };

  const subtract = () => {
    if (validateInput()) {
      setResult(parseFloat(num1) - parseFloat(num2));
      setError('');
      setSuccess('Success : Your result is shown above!');
    }
  };

  const multiply = () => {
    if (validateInput()) {
      setResult(parseFloat(num1) * parseFloat(num2));
      setError('');
      setSuccess('Success : Your result is shown above!');
    }
  };

  const divide = () => {
    if (validateInput()) {
      if (parseFloat(num2) === 0) {
        setError('Error: Cannot divide by zero.');
        setResult('');
        setSuccess('');
      } else {
        setResult(parseFloat(num1) / parseFloat(num2));
        setError('');
        setSuccess('Success : Your result is shown above!');
      }
    }
  };

  return (
    <div className='main'>
     <h1>React Calculator</h1>
      <div>
        <input placeholder='Num 1' type="text" id="num1" value={num1} onChange={e => setNum1(e.target.value)} />
      </div>
      <div>
        <input placeholder='Num 2' type="text" id="num2" value={num2} onChange={e => setNum2(e.target.value)} />
      </div>
      <div>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      <div id='messages'>
        {result && <p style={{ color: 'green' }}>Result: {result}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </div>
  );
};


export default App;
