import {useState} from 'react';
import './eProfile.css';
import Topbar from '../../components/Topbar.jsx'

export default function EditProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  console.log(JSON.stringify({email,username}));

  return (
    <div>
      <Topbar/>
        <div className="edit-cont">
          <div className="box">
            <label htmlFor="username-e">please enter your username to change to </label><br/>
            <input onChange={(e)=>setUsername(e.target.value)}id="username-e" type="text" className="username-edit" /><br/>
            </div>
            <div className="box">
            <label htmlFor="email-e">please enter your email to change to </label><br/>
            <input onChange={(e)=>setEmail(e.target.value)}id="email-e" type="text" className="email-edit" /><br/>
            </div>
            <a href="/createc"><button className="createcc">Create credit card for future use!</button></a>
            <button className="save">Save my info!</button>
        </div>
    </div>
  )
}
