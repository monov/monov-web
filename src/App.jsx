import React, { useState } from "react";
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  const [active, setActive] = useState("")

  let content;

  switch (active) {
    case 'home':
      content = <Home />;
      break;
    case 'port':
      content = <Portfolio />;
      break;
    case 'blog':
      content = <Blog />;
      break;
    default:
      content = <Home />;
  }

  return (
    <>
      <Navbar setActive={setActive} active={active}/>
      {content}
    </>
  )
}

const Home = ( ) => {
  return(
    <>Home</>
  )
}

const Portfolio = () => {
  return(
    <>Portfolio</>
  )
}

const Blog = () => {
  return(
    <>Blog</>
  )
}

export default App
