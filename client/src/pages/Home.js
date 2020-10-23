import React from "react";
import Carousel from "../components/Carousel/Carousel";
import HomeContent from "../components/HomeContent/HomeContent";
import Footer from "../components/Footer/Footer";
import BorderedWrapper from "../components/BorderedWrapper/BorderedWrapper";

export default function Home() {
  return (
    <div>
      <Carousel />
      <BorderedWrapper>
        <HomeContent />
      </BorderedWrapper>
      <Footer />
    </div>
  )
}