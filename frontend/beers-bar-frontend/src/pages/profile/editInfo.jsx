import './eProfile.css'
import Topbar from '../../components/Topbar';
import Leftbar from '../../components/LeftBar';
import axios from 'axios';
import {useState} from 'react';


export default function EditInfo() {
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
    const username = user.username
    const [imgPath, setImg] = useState("");
    const [aboutMe, setAbout] = useState("");
    const [interests, setInterests] = useState("");
    const payload = {
        username: username,
        imgPath: imgPath,
        aboutMe: aboutMe,
        interests: interests
    }
    const HandleClick = async (e) => {
        
    try{
        const res = await axios.post('http://localhost:8888/api/profile', payload)
        console.log(res.data)
    }catch(err){
        console.log(err)

    }
}
  return (
    <>
    <Topbar/>
    
    <div className="pro-cont">
        <Leftbar/>
        <div className="opt-cont">
            <div className="inpt">
        <label htmlFor="img-input"> Please enter your image directory here...</label><br/>
        <input onChange={(e)=>setImg(e.target.value)} type="text" id="img-input" className="img-input" /><br/>
        </div>
        <div className="inpt">
        <label htmlFor="img-about"> Please enter your about me here...</label><br/>
        <input onChange={(e)=>setAbout(e.target.value)} type="text" id="img-about" className="abt" /><br/>
        </div>
        <div className="inpt">
        <label htmlFor="img-interests"> Please enter your interests here..</label><br/>
        <input onChange={(e)=>setInterests(e.target.value)} type="text" id="img-interests" className="int" />
        </div>
        <button onClick={HandleClick} className="createcc">Save your info here!</button>
        </div>
    </div>
    </>
  )
}
