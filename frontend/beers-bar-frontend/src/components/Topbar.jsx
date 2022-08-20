import React from 'react'
import './topbar.css'
import testImage from '../assets/icons/currency-dollar.svg'
export default function Topbar() {
  return (
    <div>
        <span className="top-container">
            <div className="left-bar">
                <button className="topbar-btn-menu-left" title="Buy a Beer"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
            </div>
            <div className="right-bar">              
                <button className="topbar-btn-menu" title="Login"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Logout"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Gift A Beer"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Messages"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Profile"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="About Our Beer"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Creator"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
                <button className="topbar-btn-menu" title="Admin"><img className="img-test" id="wallet" src={testImage} alt="null" altText="buy a beer"/></button>
              </div>
        </span>
    </div>
  )
}
