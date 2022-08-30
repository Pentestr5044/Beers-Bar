import './leftbar.css'

export default function Leftbar() {
  return (
    <div className="leftBar">
        <ul className="leftCont">
            <li className="listMenu"><a className="leftbar-links" href="/profile">profile</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/admin">admin</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/messages">your messages</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/about">about us</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/buyabeer">buy a beer</a></li>
            <li className="listMenu"><a className="leftbar-links" href="/gift">gift a beer</a></li>
        </ul>
    </div>
  )
}
