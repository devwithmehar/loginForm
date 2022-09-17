import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

const Login = () => {

 const { user, setUser, onSubmit, loginStatus, message } = useContext(UserContext);

  const onChange = (e) => {
    const {name, value} = e.target;

    setUser({
      ...user,
      [name] : value
    });

  };

  const submitForm = (e) => {

      onSubmit(e);
  }

  const validateInputs = () => {
    if(user.email.length !== 0)
    {
      if(user.password.length !== 0)
      {
        return false;
      }
      else {
        return true;
      }
    }
    else{
      return true;
    }
  }

  if(loginStatus)
  {
    return (
        <div className='login success'>
        <h3 style={{color: 'green'}}>
        {
          message && message
        }
      </h3>
        </div>
    )
  }
  else {
    return (

      <div className='login'>
         <h3> Enter Your Details </h3>
         <label htmlFor='email'>Email</label>
         <input
         type='email'
         name='email'
         id='email'
         pattern=".+@globex\.com"
         value={user.email}
         onChange={onChange}
         autoComplete="off"
         />

      <label htmlFor='password'>Password</label>
         <input
         type='password'
         name='password'
         id='password'
         value={user.password}
         onChange={onChange}
         autoComplete="off"
         />

         <button
         type='submit'
         className='loginBtn'
         onClick={submitForm}
         disabled={validateInputs()}
         >
          Login
         </button>
         <h5 >
        {
          message && message
        }
      </h5>
      </div>
    )
  }


}

export default Login