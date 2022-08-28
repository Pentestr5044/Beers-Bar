import './admin.css'
import AdminImg from '../../assets/tavern/tavern-door.jpg'
import Topbar from '../../components/Topbar'


export default function Admin() {
  return (
    <div>
        <><Topbar/></>
        <span className="admin-cont">
            <span className="admin-left">
                <h1>Admin User Panel</h1>
                <ul>
                    <li className="list-item"><button className="edit-user">Edit User</button></li>
                    <li className="list-item"><button className="edit-user">Create User</button></li>
                    <li className="list-item"><button className="edit-user">Delete User</button></li>
                    <li className="list-item"><button className="edit-user">View User</button></li>
                </ul>
            </span>
            <span className="admin-middle">
                <h1>Welcome Admin!</h1>
                <p>This is the section where you can review your messages or even respond to messages. Also you can add beer to our inventory from any producer you want.</p>
                <img src={AdminImg} alt="" className="admin-img" />
            </span>
            <span className="admin-left">
                <h1>BEER EDITS</h1>
                <ul>
                    <li className="list-item"><button className="edit-user">Edit Beer</button></li>
                    <li className="list-item"><button className="edit-user">Create Beer</button></li>
                    <li className="list-item"><button className="edit-user">Delete Beer</button></li>
                    <li className="list-item"><button className="edit-user">View Beer</button></li>
                </ul>
            </span>

        </span>
    </div>
  )
}
