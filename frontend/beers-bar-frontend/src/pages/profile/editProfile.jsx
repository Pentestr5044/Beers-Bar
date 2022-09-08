import {useState} from 'react';
import './eProfile.css';
import Topbar from '../../components/Topbar.jsx';
import axios from 'axios';

export default function EditProfile() {
  const cookies = document.cookie.split(';')
  const user1 = cookies[2];
  const  user2 = decodeURIComponent(user1).split(':');
  const user3 = user2.toString()
  const user4 = user3.split('"')
  const user5 = user4.toString();
  const user6 = user5.split(',')
  const user = {
    username: user6[10],
    admin: user6[39],
    creator: user6[43]
  }
  const [username2, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const uInfo ={
    username2: username2,
    username: user.username,
    email: email
  }
  const HandleClick = async (e) => {
    try{
      const res = await axios.put("http://localhost:8888/api/updateUser",uInfo)
      console.log(res.data)
    }catch(err){
      console.log(err)

    }
  }
  

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
            <a href="/editinfo"><button className="createcc">Edit your info here!</button></a>
            <button onClick={HandleClick} className="save">Save my info!</button>
        </div>
    </div>
  )
}
