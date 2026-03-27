import "./App.css";
import Products from "./components/Products/Products.jsx";
import Header from "./components/header/Header.jsx";
import Profile from "./components/profile/Profile.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <div id="app">
      <Header />
      <Home />
      <br />
      <br />
      <br />
      <Products />
      <Profile />
    </div>
  );
}

export default App;
