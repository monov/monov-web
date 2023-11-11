import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const [active, setActive] = useState("");

  return (
    <>
    <Navbar setActive={setActive} active={active} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/blog"
          element={<Blog />}
        ></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </>
  );
};

export default App;
