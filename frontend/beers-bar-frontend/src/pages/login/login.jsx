import './login.css';
import {useRef, useContext} from 'react';
import {loginCall} from '../../ApiLogin';
import { AuthContext } from '../../authPath/AuthContext';


export default function Login() {
  const username = useRef()
  const password = useRef()
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const clickHandler = (e)=>{
    loginCall({username:username.current.value,password:password.current.value}, dispatch)
  };

  return (
    <div className="login-cont">
        <div className="loginwrapper">
            <h2 className="login-label">Beers' Bar<br/>Please Login</h2>
            <br/>
            <label htmlFor="username" className="username-label">Username</label><br/>
            <input ref={username} id="username" type="text" className="username" placeholder="Please enter a Username"/><br/>
            <label htmlFor="password" className="password-label">Password</label><br/>
            <input ref={password} id="password" type="password" className="username" placeholder="Please enter a password"/><br/>
            <button onClick={clickHandler} className="login-btn">{isFetching ? "LOADING...":"Login"}</button>
            <button className="login-btn">Forgot password</button>
            <a href="/registration"><button className="login-btn">I NEED TO REGISTER!</button></a>
        </div>
    </div>
  )
  
}
