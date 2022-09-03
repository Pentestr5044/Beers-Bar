import './login.css';
import {useState, useContext} from 'react';
import UserContext from '../../authPath/userInfo'
import axios from 'axios';
export default function Login() {
  const User = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const lpayload = {
    username: username,
    password: password
  };
  return (
    <div className="login-cont">
        <div className="loginwrapper">
            <h2 className="login-label">Beers' Bar<br/>Please Login</h2>
            <br/>
            <label htmlFor="username" className="username-label">Username</label><br/>
            <input id="username" type="text" onChange={(e)=>setUsername(e.target.value)} className="username" placeholder="Please enter a Username"/><br/>
            <label htmlFor="password" className="password-label">Password</label><br/>
            <input id="password" type="text" onChange={(e)=>setPassword(e.target.value)} className="username" placeholder="Please enter a password"/><br/>
            <button className="login-btn">login</button>
            <button className="login-btn">Forgot password</button>
            <a href="/registration"><button className="login-btn">I NEED TO REGISTER!</button></a>
        </div>
    </div>
  )
  
}
