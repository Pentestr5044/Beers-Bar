import './about.css'
import Topbar from '../../components/Topbar';
import {useContext} from 'react';
import { AuthContext } from '../../authPath/AuthContext';

export default function About() {
  const {user} = useContext(AuthContext);
  return (
    <div className="about">
        <><Topbar/></>
        <h1>About our Beer{user.fName}</h1><br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam quidem, quas aliquid officia consectetur perspiciatis dolor, fugit at provident fugiat impedit officiis quaerat repellendus sint nobis eligendi magni. Dicta! Try updating your credit card informations.</p>
    </div>
  )
}
