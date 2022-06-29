import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Marketplace from "./components/Marketplace";
import NFTPage from "./components/NFTpage";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile";
import ReactDOM from "react-dom/client";
import SellNFT from "./components/SellNFT";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/nftPage" element={<NFTPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sellNFT" element={<SellNFT />} />
      </Routes>
    </div>
  );
}

export default App;
