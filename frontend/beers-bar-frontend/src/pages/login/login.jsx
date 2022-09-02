import './login.css';
import {useState} from 'react';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(JSON.stringify({username,password}));
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
            <button className="login-btn">I NEED TO REGISTER</button>
        </div>
    </div>
  )
  
}
