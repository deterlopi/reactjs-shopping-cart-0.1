import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import App from './App';
import Login from "./containers/Login";
import BuyCart from "./containers/BuyToCart";
import { useNavigate } from "react-router-dom";

function Router() {
  const  navigate = useNavigate();
  const loggedUser = localStorage.getItem('loggedUser');
  useEffect(() => {
    
      if(!loggedUser){
      navigate('/login',{ replace: true });
    }
  }, [navigate,loggedUser]);

  return (
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<App />} />
        <Route path="/sale" element={<BuyCart/>} />
      </Routes>
  );
}

export default Router;