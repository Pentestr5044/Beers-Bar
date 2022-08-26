import './admin.css'
import Topbar from '../../components/Topbar'


export default function Admin() {
  return (
    <div>
        <><Topbar/></>
        <span className="admin-cont">
            <span className="admin-left">
                <h1>Admin Left</h1>
            </span>
            <span className="admin-middle">
                <h1>Admin picture and welcome message</h1>
            </span>
            <span className="admin-right">
                <h1>beer posting</h1>
            </span>

        </span>
    </div>
  )
}
