import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";

import "./App.css";
import Homepage from "./pages/Homepage";
import Workpage from "./pages/Workpage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Footer from "./components/Footer";

function App() {
  return (
    <StyledApp>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Work" element={<Workpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.div`
  /* Added only to put fotter always on bottom */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
