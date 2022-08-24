import Topbar from '../../components/Topbar';
import './home.css'
import Leftbar from '../../components/LeftBar';
import Itemview from '../../components/Itemview'


export default function Home() {
  return (
        
  <div>
    <>
    <Topbar/> </>
  <div className="home-body">
      <div  className="left"><Leftbar/></div>
    <div  className="home-header">
      <h1>Weclome user</h1>
      <div className="item-cont">
        <Itemview/>
        <Itemview/>
        <Itemview/>
        <Itemview/>
        <Itemview/>
      </div>
    </div>
  
  </div>

  </div>
  )
}