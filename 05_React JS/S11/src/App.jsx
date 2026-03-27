import "./App.css";
import Products from "./components/Products/Products.jsx";
import Header from "./components/header/Header.jsx";
import Profile from "./components/profile/Profile.jsx";

function App() {
  return (
    <div id="app">
      <Header />
      <Products />
      <Profile />
    </div>
  );
}

export default App;
