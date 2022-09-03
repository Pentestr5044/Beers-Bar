import {useState} from 'react';
import Topbar from '../../components/Topbar'

export default function EditProfile() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [ccnumber, setCcnumber] = useState("")
  const [fName, setFname] = useState("")
  const [lName, setLname] = useState("")
  console.log(JSON.stringify({username,email,ccnumber,fName,lName}))


  return (
    <div>
      <Topbar/>
        <div className="edit-cont">
          <div className="box">
            <label htmlFor="username-e">please enter your username </label><br/>
            <input onChange={(e)=>setUsername(e.target.value)}id="username-e" type="text" className="username-edit" /><br/>
            </div>
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
        </div>
    </div>
  )
}
