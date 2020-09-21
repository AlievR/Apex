import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header_line from "./Components/Header_line"
import About from "./Components/About.js"
import Reclam_About  from "./Components/Reklam_About"
import Service from "./Components/Service"
import Modes from "./Components/Modes.js"
function App() {
  return (
    <div>
        <Header_line />
        <About />
        <Reclam_About />
        <Service />
        <Modes />
    </div>
  );
}

export default App;
