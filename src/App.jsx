import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const App = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [active, setActive] = useState(currentUrl);
  const [hamActive, setHamActive] = useState(false);
  useEffect(() => {
    if (hamActive) {
      document.body.classList.add("unscrollable");
    } else {
      document.body.classList.remove("unscrollable");
    }

    return () => {
      document.body.classList.remove("unscrollable");
    };
  }, [hamActive]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar
            setActive={setActive}
            active={active}
            hamActive={hamActive}
            setHamActive={setHamActive}
          />
          <Footer
            active={active}
            hamActive={hamActive}
            setHamActive={setHamActive}
          />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
