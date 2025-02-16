import { useState } from 'react';
import UsercontextProvider from './Context/UsercontextProvider';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UsercontextProvider> {/* ✅ Fix component name */}
      <div>app</div>
      <Login />
      <Profile /> {/* ✅ Fix component name */}
    </UsercontextProvider>
  );
}

export default App;
