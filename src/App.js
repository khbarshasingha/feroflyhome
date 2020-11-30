import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import Bookroom from "./Bookroom";
import Gallery from "./Gallery";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Homepage />
      <About />
      <Bookroom />
      <Gallery />
    </div>
  );
}

export default App;
