import './meetingtable.css';
import Topbar from '../../components/Topbar';
import Leftbar from '../../components/LeftBar';
import {Users} from '../../dummydata';


export default function meetingTable() {
  const image = require('../../assets/characters/'+Users[0].profileP)
  return (
    <>
    <Topbar/>
    <div >
        <div >
            <div className="msg-con">
                <div className="msg-left"><Leftbar/></div>
                <div className="msg-mid">
                  <img src={image} alt="" className="image"/>
                  <h3>{Users[0].username}</h3>
                </div>
                <hr/>
                <div className="msg-right"> <span>messages here</span></div>
            </div>
            
        </div>
    </div>
    </>
  )
}
