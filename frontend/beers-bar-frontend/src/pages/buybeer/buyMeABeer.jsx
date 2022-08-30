import Topbar from '../../components/Topbar'
import Itemview from '../../components/Itemview'
import {Beer} from '../../dummydata'


export default function buyMeABeer() {
  return (
    <div>
    <Topbar/>
        <div className="buy-cont">
            <div className="item-cont">
                {Beer.map((b) => (
                <Itemview key={b.beerId} item={b}/>
                ))}
            </div>
        </div>
        
    </div>
  )
}
