import './meetingtable.css';
import Topbar from '../../components/Topbar';
import Leftbar from '../../components/LeftBar';

export default function meetingTable() {
  return (
    <>
    <Topbar/>
    <div >
        <div >
            <div className="msg-con">
                <div className="msg-left"><Leftbar/></div>
                <div className="msg-mid"><span>Middle</span></div>
                <div className="msg-right"><span>Right</span></div>
            </div>
            
        </div>
    </div>
    </>
  )
}
