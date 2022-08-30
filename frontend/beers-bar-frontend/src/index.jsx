import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/about'
import Admin from './pages/admin/admin'
import BuyMeABeer from './pages/buybeer/buyMeABeer'
import Buybeer from './pages/buybeer/Buybeer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/buyabeer" element={<BuyMeABeer />} />
      <Route path="/buybeer/:beerID" element={<Buybeer/>}/>

    </Routes>
  </BrowserRouter>
);
 //<Route path="/home" element={<Home />} />
      //
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
      //
      //<Route path="/my/bio" element={<Bio />} />
      //
      //<Route path="/about" element={<About />} />

