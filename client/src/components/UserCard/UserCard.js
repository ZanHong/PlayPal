import React from "react";
import { Col, Card } from "react-materialize";
import "./style.css";

export default function UserCard(props) {
  return (
    <Col
      m={4}
      s={12}
    >
      <Card
        actions={[
          <a key="1" href="#">Add an activity here!</a>,
        ]}
        className="user-card"
        textClassName="white-text"
        title="Welcome Back"
      >
        (USERNAME_HERE)!
    </Card>
    </Col>
  )
}