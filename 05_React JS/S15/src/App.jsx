import "./App.css";
import Header from "./components/header/Header.jsx";
import Products from "./components/products/Products.jsx";
import Profile from "./components/profile/Profile.jsx";
import Home from "./components/home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import A from "./context/A.jsx";
import { useState } from "react";
import AuthContext from "./context/AuthContext.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <AuthContext value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Header /> : null}

        <Routes>
          <Route path={"/"} element={<Wrapper />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/contactus"} element={<A />} />
        </Routes>
      </AuthContext>
    </div>
  );
}

export default App;
