import { useContext, lazy } from "react";
// import Home from "../home/Home";
import Login from "../login/Login";
import AuthContext from "../../context/AuthContext";

//Loading Lazyly
const Home = lazy(function () {
  return import("../home/Home.jsx");
});

function Wrapper() {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Wrapper;
