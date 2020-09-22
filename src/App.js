import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header_line from "./Components/Header_line"
import About from "./Components/About.js"
import Reclam_About  from "./Components/Reklam_About"
import Service from "./Components/Service"
import Modes from "./Components/Modes.js"
import Blog from './Components/Blog';

function App() {
  return (
    <div>
        <Header_line />
        <About />
        <Modes />
        <Service />
        <Reclam_About />
        <Blog />
    </div>
  );
}

export default App;
