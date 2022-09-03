import './register.css'
import {useState} from 'react';
import axios from 'axios';

export default function Register() {

/**make button logic with axios to send successful request and registration. */


    /**made logic for register payload to be put into an object the api will understand. */
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const postData = {
            username:username,
            password:password,
            email:email,
            fName:fname,
            lName:lname
    }
    function OnClick(){
        axios.post('http://localhost:8888/api/register', postData, {
            headers:{
                "Content-type": "application/json"
            }
        }).then((response)=>{
            console.log(JSON.stringify(response.data))
        })
    }
  return (
    <div>
        <div className="reg-cont">
            <div className="reg-comp">
                <h1>Beers Bar VULNERABLE API</h1>
                <span className="reg-span">
                    <label htmlFor="reg-username">Please choose a username</label><br/>
                    <input onChange={(e)=>setUsername(e.target.value)} id="reg-username" type="text" placeholder="Username...."/>
                </span><br/>
                <span className="reg-span">
                    <label htmlFor="reg-email">Please enter your email</label><br/>
                    <input onChange={(e)=>setEmail(e.target.value)} id="reg-email" type="email" placeholder="Email..."/>
                </span><br/>
                <span className="reg-span">
                    <label htmlFor="reg-password">Please choose a password</label><br/>
                    <input onChange={(e)=>setPass(e.target.value)} id="reg-password" type="password" placeholder="First Password..."/>
                </span><br/>
                <span className="reg-span">
                    <label htmlFor="reg-con-password">Please choose a password</label><br/>
                    <input id="reg-con-password" type="password" placeholder="Confirm password..."/>
                </span><br/>
                <span className="reg-span">
                    <label htmlFor="reg-fname">Enter your first name</label><br/>
                    <input onChange={(e)=>setFname(e.target.value)} id="reg-fname" type="text" placeholder="First Name..."/>
                </span><br/>
                <span className="reg-span">
                    <label htmlFor="reg-lname">Enter your last name</label><br/>
                    <input onChange={(e)=>setLname(e.target.value)} id="reg-lname" type="text" placeholder="Last Name..."/>
                </span>
                <button onClick={OnClick} className="register">Register Here!</button>
                
            </div>
        </div>
    </div>
  )
}
