import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/about'
import Admin from './pages/admin/admin'
import BuyMeABeer from './pages/buybeer/buyMeABeer'
import Buybeer from './pages/buybeer/Buybeer'
import Creator from './pages/creators/creator'
import Gift from './pages/gift/gift'
import Login from './pages/login/login'
import Messages from './pages/messages/meetingTable'
import Profile from './pages/profile/userProfile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/buyabeer" element={<BuyMeABeer />} />
      <Route path="/buybeer/:beerID" element={<Buybeer/>}/>
      <Route path="/creators" element={<Creator />} />
      <Route path="/gift" element={<Gift />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  </BrowserRouter>
);
 //<Route path="/home" element={<Home />} />
      //
      //
      //
      //<Route path="/registration" element={<Register />} />
      //<Route path="/profile-update" element={<UpdateProfile />} />
      //<Route path="/staff" element={<Staff />} />
      //<Route path="/private-chats" element={<Private />} />
      //<Route path="/premium" element={<Premium />} />
      //<Route path="/my/profile" element={<UserProfile />} />
      //<Route path="/mods" element={<Moderators />} />
      //
      //<Route path="/logout" element={<Logout />} />
      //
      //
      //
      //
      //

