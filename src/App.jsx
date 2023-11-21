import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [active, setActive] = useState(currentUrl);
  return (
    <div className="app">
      <Navbar setActive={setActive} active={active} />
      <Footer active={active}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      
    </div>
  );
};

export default App;
