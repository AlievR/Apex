import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header.js"
import Intro from "./Components/Intro.js"
import About from "./Components/About.js"
import Reclam_About  from "./Components/Reklam_About.js"
import Service from "./Components/Service.js"
import Reclam_Service from "./Components/Reklam_Service.js"
import Blog from './Components/Blog.js';


function App() {
  return (
    <div>
        <Header />
        <Intro />
        <About />
        <Reclam_About />
        <Service />
        <Reclam_Service />
        <Blog />
    </div>
  );
}

export default App;
