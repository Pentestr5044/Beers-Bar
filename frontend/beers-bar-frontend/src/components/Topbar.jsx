import React from 'react'
import './topbar.css'
import testImage from '../assets/icons/wallet2.svg'
export default function Topbar() {
  return (
    <div>
        <span className="top-container">
            <div className="left-bar">
               <label labelFor="wallet">wallet
               <img className="img-test" id="wallet" src={testImage} alt="null"/>
               </label>
               
            </div>
            <div className="right-bar">right</div>
        </span>
    </div>
  )
}
