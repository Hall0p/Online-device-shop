import React, {useEffect, useState} from 'react';
import './style/style.css';
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";
import AppRouter from "./components/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      console.log('hellno');
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
