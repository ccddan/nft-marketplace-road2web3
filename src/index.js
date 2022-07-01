import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Marketplace from "./components/Marketplace";
import MyNFTs from "./components/MyNFTs";
import NFTPage from "./components/NFTpage";
import Profile from "./components/Profile";
import React from "react";
import ReactDOM from "react-dom/client";
import SellNFT from "./components/SellNFT";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/nftPage" element={<NFTPage />} />
        <Route path="/dashboard" element={<MyNFTs />} />
        <Route path="/bought" element={<Profile />} />
        <Route path="/sellNFT" element={<SellNFT />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
