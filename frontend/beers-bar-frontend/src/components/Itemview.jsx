import './itemview.css'
import itemimg from '../assets/tavern/chatroom.jpg'

export default function Itemview() {
  return (
    <div className="item-des">
        <span>
            <img src={itemimg} alt="none" className="item-image" />
            <h2 className="item-header">Item</h2>
            <h3>price</h3>
            <p>Desc</p>
        </span>
    </div>
  )
}
