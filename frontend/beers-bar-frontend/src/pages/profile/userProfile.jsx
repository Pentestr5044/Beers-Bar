import './profile.css'
import Topbar from '../../components/Topbar'
import Itemview from '../../components/Itemview'
import {Beer} from '../../dummydata'
import axios from 'axios';
import {useState} from 'react';

export default function UserProfile() {
    const [response, setResponse] = useState({});
    const image = require('../../assets/tavern/chatroom.jpg')
    const cookies = document.cookie.split(';')
    const user1 = cookies[2];
    const  user2 = decodeURIComponent(user1).split(':');
    const user3 = user2.toString()
    const user4 = user3.split('"')
    const user5 = user4.toString();
    const user6 = user5.split(',')
    const user = {
    email: user6[16],
    username: user6[10],
    admin: user6[39],
    creator: user6[43]
  }
  const payload = {
    username: user.username
  };

  console.log(response)
  return (
    <>
        <Topbar/>
        <div>
            <div className="profile-wrapper">
                <div className="profile-left">
                    <a href="/edit-profile"><button className="edit-profile">Edit my profile</button></a>
                    <p className="profile-text">if you can figure out how to edit your profile picture in the source code and screenshot it. you get extra credit. GOOD LUCK!!</p>
                </div>
                <div className="profile-right">
                    <img src={image} alt="" className="ppic" id="profilep"/>
                    <h1 className="uN">{user.username}</h1>
                    <h3 className="email">{user.email}</h3>
                    <h3 className="userAddress">hello</h3>
                    <h3 className="userdesc">hello
                    </h3>
                    <hr/>
                    <span className="img-feed">
                    {Beer.map((b) => (
           <Itemview key={b.beerId} item={b}/>))}
                </span>
                </div>
            </div>
        </div>
    </>
  )
}
