import './profile.css'
import Topbar from '../../components/Topbar'
import Itemview from '../../components/Itemview'
import {Beer} from '../../dummydata'

export default function userProfile() {
    const image = require('../../assets/tavern/chatroom.jpg')
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
                    <h1 className="uN">User name</h1>
                    <h3 className="email">User email</h3>
                    <h3 className="userAddress">Users address</h3>
                    <h3 className="userdesc">
                        This is where the user bio will go!!
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
