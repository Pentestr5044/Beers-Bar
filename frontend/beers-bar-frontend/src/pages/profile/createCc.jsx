import {useState} from 'react';
import Topbar from '../../components/Topbar';
import axios from 'axios';

export default function EditProfilecc() {
  const cookies = document.cookie.split(';')
  const user1 = cookies[2];
  const user2 = decodeURIComponent(user1).split('"');
  console.log(user2[7])
  const [email, setEmail] = useState("")
  const [ccNumber, setCcnumber] = useState("")
  const [fName, setFname] = useState("")
  const [lName, setLname] = useState("")
  
  const HandleClick = async (e) => {
    e.preventDefault();
    const payload = {
      username: user2[7],
      email: email,
      ccNumber: ccNumber,
      fName: fName,
      lName: lName
    }
    const res = await axios.post('http://localhost:8888/api/ccInfo', payload)
    console.log(res.data)
  }
  return (
    <div>
      <Topbar/>
        <div className="edit-cont">
          <form onSubmit={HandleClick}>
            <div className="box">
            <label htmlFor="email-e">please enter your email </label><br/>
            <input onChange={(e)=>setEmail(e.target.value)} id="email-e" type="text" className="email-edit" /><br/>
            </div>
            <div className="box">
            <label htmlFor="cc-e">please enter your credit card number </label><br/>
            <input onChange={(e)=>setCcnumber(e.target.value)} id="cc-e" type="text" className="cc-edit" /><br/>
            </div>
            <div className="box">
            <label htmlFor="fName">please enter your first name </label><br/>
            <input onChange={(e)=>setFname(e.target.value)} id="fName" type="text" className="fName" /><br/>
            </div>
            <div className="box">
            <label htmlFor="lName">please enter your last name </label><br/>
            <input onChange={(e)=>setLname(e.target.value)} id="lName" type="text" className="lName" /><br/>
            </div>
            <button className="save-cc">Save my cc-info</button>
            </form>
        </div>
    </div>
  )
}
