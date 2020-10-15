import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Test from "../components/test/test";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Test />
      {/* <Footer /> */}
    </div>
  )
}