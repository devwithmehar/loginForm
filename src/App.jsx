import React from 'react'
import './App.css';
import Login from './Components/Login';
import { UserContextProvider } from './UserContext';


const App = () => {


  return (
    <UserContextProvider>
      <div className='main'>
          <Login />
      </div>
    </UserContextProvider>
  )
}

export default App
