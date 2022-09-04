import React from 'react';
import ReactDOM from 'react-dom/client';
import {AuthContextProvider} from './authPath/AuthContext'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>
  <App/>
  </AuthContextProvider>
);
 //<Route path="/home" element={<Home />} />
      //
      //
      //
      //
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

