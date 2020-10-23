import React from "react";
import { Row, Col } from "react-materialize";
import "./style.css";

export default function HomeContent() {
  return (
    <div>
      <Row>
        <Col>
          <h3 style={{ color: "#0079C1" }} className="bottom-border"><b>About Us</b></h3>
          <p className="about">
            <b>
              Are you a new parent seeking activities to spend time with your toddlers? Tired of repeating the same activities and wanting some inspirations? Or are you an experienced child caregiver and/or parent willing to sharing your wisdom to others?
            </b>
          </p>
          <p className="about">
            <b>
              You've come to the right place!
            </b>
          </p>
          <p className="about">
            PlayPal! offers a wide range of activities for toddlers and preschools (age 0-5) provided by the members of the community. These activities are not only fun but most importantly, aim to benefit physical, social, emotional, cognitive and language development for our little ones!
          </p>
          <p className="about">
            Join us now for endless fun!
          </p>
        </Col>
      </Row >
    </div >
  )
}