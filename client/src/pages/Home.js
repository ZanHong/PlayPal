import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Test from "../components/test/test";
import Footer from "../components/Footer/Footer";
import { Container } from "react-materialize";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Container>
        <Test />

      </Container>
      <Footer />
    </div>
  )
}