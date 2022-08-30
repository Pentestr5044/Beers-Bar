import './itemview.css'
import {Link} from 'react-router-dom';

export default function Itemview({item}) {
  const image = require('../assets/beer/'+item.beerImg)
  return (
    <div className="item-des">
        <span className="item">
            <img src={image} alt="" className="item-image" />
            <h2 className="item-header">Item</h2>
            <h3>{item.price}</h3>
            <p>{item.beerDesc}</p>
            <button className="buy-btn" ><Link to={{
      pathname:"/buybeer/"+item.beerId
    }}>Buy this beer</Link></button>
        </span>
    </div>
  )
}
