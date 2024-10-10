/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Coin from "./pages/Coin/Coin.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
