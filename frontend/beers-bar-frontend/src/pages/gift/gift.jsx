import './gift.css';
import Topbar from '../../components/Topbar'


export default function Gift() {
    const cookies = document.cookie.split(';')
    const user1 = cookies[2];
    const  user2 = decodeURIComponent(user1).split(':');
    const user3 = user2.toString()
    const user4 = user3.split('"')
    const user5 = user4.toString();
    const user6 = user5.split(',')
    const user = {
      userId: user6[4],
      email: user6[16],
      username: user6[10],
      admin: user6[39],
      creator: user6[43]
    }
  console.log(user.userId)
  return (
    <>
    <Topbar/>
    <div>
      <form className="sub-form">
        <label htmlFor="beerId"> Enter the beer Id</label><br/>
        <input id="beerId" placeholder="Enter beer ID here!"/><br/>
        <label htmlFor="gifting">Gift To </label><br/>
        <input type="text" id="gifting" placeholder="enter user to gift to"/><br/>
        <button type="submit">submit</button>
      </form>
    </div>
    </>
  )
}
