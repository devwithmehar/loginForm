import { createContext , useState  } from 'react';
import Database from './database.json';

export const UserContext = createContext({
  user: {
    email: null,
    password: null,
  },
  onSubmit: null,
  loginStatus: null,
  message: null,
})

export function UserContextProvider ({children}){
 const[user, setUser] = useState({
  email: "",
  password:"",
 });
 const [loginStatus, setLoginStatus] = useState(false);
 const [message, setMessage] = useState(null);

 const onSubmit = (e) => {
   e.preventDefault();

   const findUser = Database.users.find((userFound) => {
    return userFound.email.trim() === user.email.trim();
   })
   console.log(findUser);

   if(findUser == null){
    setMessage("Email or Password is incorrect!");
    if(loginStatus) setLoginStatus(false);
   }
   else {
    if(findUser.password.trim() === user.password.trim()){
       setLoginStatus(true);
       setMessage(`Congrats, You have login Successfully with email:  ${user.email}`);
       setUser({
        email:"",
        password:"",
       });
    }
    else{
      setMessage("Email or Password is incorrect!")
      if(loginStatus) setLoginStatus(false);
    }

   }
 }

   return (
     <UserContext.Provider value={{user, setUser, onSubmit, loginStatus, message}}>
       {children}
     </UserContext.Provider>
   )
}