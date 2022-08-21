import Topbar from '../../components/Topbar';
import './home.css'



export default function Home() {
  return (
        
  <div>
    <div> <Topbar/> </div> 
    <div className="home-body">
      <h1>Weclome user</h1>
      <span className="users-me">
        <label htmlFor="messageC">User messages</label>
        <ul id="messageC" className="msg-container">
          
        </ul>
      </span>
      </div>
  </div>
  )
}