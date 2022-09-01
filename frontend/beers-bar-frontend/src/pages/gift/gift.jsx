import './gift.css';
import Topbar from '../../components/Topbar'


export default function gift() {
  return (
    <>
    <Topbar/>
    <div>
        <label htmlFor="gifting">Gift To </label><br/>
        <input type="text" id="gifting" placeHolder="enter user to gift to"></input>
        <button>submit</button>
    </div>
    </>
  )
}
