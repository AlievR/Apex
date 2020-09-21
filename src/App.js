import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header_line from "./Components/Header_line"
import About from "./Components/About.js"
import Reclam_About  from "./Components/Reklam_About"
import Service from "./Components/Service"
import Reclama_Service from "./Components/Reklama_Service.js"
function App() {
  return (
    <div>
        <Header_line />
        <About />
        <Reclam_About />
        <Service />
        <Reclama_Service />
    </div>
  );
}

export default App;
