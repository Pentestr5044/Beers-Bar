import './leftbar.css'


export default function Leftbar() {
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
  return (
    <div className="leftBar">
        <ul className="leftCont">
            <li className="listMenu"><a className="leftbar-links" href="/profile">profile</a></li>
            {user.admin===16?<li className="listMenu"><a className="leftbar-links" href="/admin">admin</a></li>:null}
            <li className="listMenu"><a className="leftbar-links" href="/messages">your messages</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/about">about us</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/buyabeer">buy a beer</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/gift">gift a beer</a></li>
        </ul>
    </div>
  )
}
