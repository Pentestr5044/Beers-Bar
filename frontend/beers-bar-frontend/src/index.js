import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
     
    </Routes>
  </BrowserRouter>
);
 //<Route path="/home" element={<Home />} />
      //<Route path="/about" element={<About />} />
      //<Route path="/creators" element={<Creator />} />
      //<Route path="/login" element={<Login />} />
      //<Route path="/registration" element={<Register />} />
      //<Route path="/profile-update" element={<UpdateProfile />} />
      //<Route path="/staff" element={<Staff />} />
      //<Route path="/private-chats" element={<Private />} />
      //<Route path="/premium" element={<Premium />} />
      //<Route path="/my/profile" element={<UserProfile />} />
      //<Route path="/mods" element={<Moderators />} />
      //<Route path="/admin/meeting" element={<MeetingTable />} />\
      //<Route path="/logout" element={<Logout />} />
      //<Route path="/chatrooms" element={<Chatrooms />} />
      //<Route path="/buy-a-gift" element={<BuyABeer />} />
      //<Route path="/my/bio" element={<Bio />} />
      //<Route path="/admin" element={<Admin />} />
      //<Route path="/about" element={<About />} />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
