import React from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Admin from "./pages/admin/admin";
import BuyMeABeer from "./pages/buybeer/buyMeABeer";
import Buybeer from "./pages/buybeer/Buybeer";
import Creator from "./pages/creators/creator";
import Gift from "./pages/gift/gift";
import Login from "./pages/login/login";
import Messages from "./pages/messages/meetingTable";
import Profile from "./pages/profile/userProfile";
import EditProfile from "./pages/profile/editProfile";
import Createc from "./pages/profile/createCc";
import Register from "./pages/register/register";
import Logout from './pages/login/logout';
import {AuthContext} from './authPath/AuthContext';



export default function App() {
    const {user} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/buyabeer" element={<BuyMeABeer />} />
        <Route path="/buybeer/:beerID" element={<Buybeer />} />
        <Route path="/creators" element={<Creator />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/createc" element={<Createc />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

