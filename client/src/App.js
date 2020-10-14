import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Test from "./components/test/test";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Test />
    </div>
  );
}

export default App;
