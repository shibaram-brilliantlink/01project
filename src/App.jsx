import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";
import Homepage from './pages/Homepage'
import Workpage from "./pages/Workpage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/Work" element={<Workpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
