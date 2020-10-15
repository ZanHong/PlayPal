import React, { Component } from "react";
import "./App.css";
import Router from "./routes/Route";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
