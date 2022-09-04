import './leftbar.css'
import {useContext} from 'react';
import {AuthContext} from '../authPath/AuthContext';

export default function Leftbar() {
  const {user} = useContext(AuthContext);
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
