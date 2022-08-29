import React, {useState} from 'react'
import './App.css';
import Login from './Components/Login';

const App = () => {
  const [heading, setHeading] = useState('Enter Your Details');

  const onSubmit = (event) => {
    event.preventDefault();
    setHeading('You are Logged IN!')
  }
  return (
    <div className='main'>
        <Login onSubmit={onSubmit} heading={heading} />
    </div>
  )
}

export default App
