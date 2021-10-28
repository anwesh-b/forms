import React, { useEffect, useState } from 'react';
import './App.css';

import Router from './Router';

import NavBar from './constants/navbar'
import { type } from 'os';

export const UserContext = React.createContext<IUser>({ isHighLevelUser: false });

export interface IUser {
  isHighLevelUser: boolean;
}

function App() {

  const [user, setUser] = useState<IUser>({ isHighLevelUser: false });

  useEffect(() => {
    const localValue = localStorage.getItem('isHighLevelUser');
    if (localValue === 'true') {
      setUser({ isHighLevelUser: true });
      return;
    }
    setUser({ isHighLevelUser: false });
  }, [])

  const toggleUserType = () => {
    if (!user.isHighLevelUser) {
      setUser({ isHighLevelUser: true });
      localStorage.setItem('isHighLevelUser', 'true');
      return;
    }
    setUser({ isHighLevelUser: false });
    localStorage.setItem('isHighLevelUser', 'false');
  }

  return (
    <UserContext.Provider value={user}>
      <NavBar toggleUserType={toggleUserType} />
      <div className="app">
        <Router />
      </div>
    </UserContext.Provider>
  );
}

export default App;
