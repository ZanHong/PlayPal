import React from "react";
import { Col, Preloader } from "react-materialize";

export default function Loader() {
  return (
    <Col s={12} className="center-align">
      <Preloader
        active
        color="blue"
        flashing
        size="big"
      />
    </Col>
  )
}