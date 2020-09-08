import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Students from './Students';
import Navbar from "./navbar";
import Banner from "./banner";
import Footer from "./footer";
import Content from "./content";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
