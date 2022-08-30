import Topbar from '../../components/Topbar'
import './buybeer.css'
import {Beer} from '../../dummydata'
import { useParams } from 'react-router';


export default function Buybeer() {
    const data = useParams();
    console.log(data);
    if(data.beerID >0){
        console.log(data.beerID)
        let beerDemo = Beer[data.beerID -1]
        console.log(beerDemo)
        const image = require('../../assets/beer/'+beerDemo.beerImg)
        return (
            <div className="bkgrnd">
                <Topbar/>
            <span className="beeritem">
                <img src={image} alt="" className="item-image1" />
                <h2 className="item-header">Item</h2>
                <h3>{beerDemo.price}</h3>
                <p>{beerDemo.beerDesc}</p>
                <label htmlFor="ccAddress">Address here: </label>
                <input type="text" className="ccnumber" id="ccAddress" placeholder="Address here!"></input>
                <label htmlFor="ccNumber">Credit card number here: </label>
                <input type="text" className="ccnumber" id="ccNumber" placeholder="Credit card number here!"></input>
                <button className="buy-btn" >Use My stored Credit Card Number</button>
                <button className="buy-btn" >Buy this beer</button>
            </span>
            </div>
    
        )
    }
}
