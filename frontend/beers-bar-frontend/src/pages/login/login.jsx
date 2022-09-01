import './login.css';
/**import {useState} from 'react';**/

export default function login() {
  return (
    <div className="login-cont">
        <div className="loginwrapper">
            <h3 className="login-label">Beers' Bar<br/>Please Login</h3>
            <br/>
            <label htmlFor="username" className="username-label">Username</label><br/>
            <input id="username" type="text" className="username" placeholder="Please enter a Username"/><br/>
            <label htmlFor="password" className="password-label">Password</label><br/>
            <input id="password" type="text" className="username" placeholder="Please enter a password"/><br/>
            <button className="login-btn">login</button>
            <button className="login-btn">Forgot password</button>
            <button className="login-btn">I NEED TO REGISTER</button>
        </div>
    </div>
  )
}
