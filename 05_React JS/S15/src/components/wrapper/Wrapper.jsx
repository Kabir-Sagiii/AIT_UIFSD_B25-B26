import { useContext } from "react";
import Home from "../home/Home";
import Login from "../login/Login";
import AuthContext from "../../context/AuthContext";
function Wrapper() {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Wrapper;
