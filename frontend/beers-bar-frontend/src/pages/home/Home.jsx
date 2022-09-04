import Topbar from '../../components/Topbar';
import './home.css'
import Leftbar from '../../components/LeftBar';
import Itemview from '../../components/Itemview'
import {Beer} from '../../dummydata'
import {AuthContext} from '../../authPath/AuthContext';
import {useContext} from 'react';

export default function Home() {
  const {user} = useContext(AuthContext);
  return (
  <div>
    <>
    <Topbar/> </>
  <div className="home-body">
      <div  className="left"><Leftbar/></div>
    <div  className="home-header">
      <h1>Welcome! {user.fName} </h1>
      <div className="item-cont">
        {Beer.map((b) => (
           <Itemview key={b.beerId} item={b}/>
        ))}
      </div>
    </div>
  
  </div>

  </div>
  )
}