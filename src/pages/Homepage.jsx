import React from "react";
import Topsection from "../components/Topsection";
import Midsection from "../components/Midsection";
import Bottomsection from "../components/Bottomsection";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <div>Welcome to Homepage</div>
      <Topsection />
      <Midsection />
      <Bottomsection />
      <Footer />
    </>
  );
}

export default Homepage;
