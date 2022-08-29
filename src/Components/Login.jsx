import React, {useState} from 'react'

const Login = ({onSubmit, heading}) => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });


  const onChange = (e) => {
    const {name, value} = e.target;

    setData({
      ...data,
      [name] : value
    });

  };

  const submitForm = (e) => {
      onSubmit(e);
  }

  const validateInputs = () => {
    if(data.username.length !== 0)
    {
      if(data.password.length !== 0)
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

  return (
    <div className='login'>
       <h3> {heading} </h3>
       <label htmlFor='username'>Username</label>
       <input
       type='text'
       name='username'
       id='username'
       value={data.username}
       onChange={onChange}
       autoComplete="off"
       />

    <label htmlFor='password'>Password</label>
       <input
       type='password'
       name='password'
       id='password'
       value={data.password}
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
    </div>
  )
}

export default Login