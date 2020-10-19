import React from "react";
import { Container, Row, Col, Button } from "react-materialize";
import "./style.css";

export default function LoginForm() {
  return (
    <div>
      <div className="section"></div>
      <center>
        <a href="/"><h4>PlayPal</h4></a>

        <h5>Please login into your account</h5>

        <div className="section"></div>

        <Container>
          <Row className="z-depth-1 grey lighten-4 main-row" >

            <form className=" s12" method="post">
              <Row>
                <Col className=" s12">
                </Col>
              </Row>

              <Row>
                <Col className="input-field s12">
                  <input className="validate" type="text" name="email" id="email" />
                  <label htmlFor="email">Enter your email</label>
                </Col>
              </Row>

              <Row>
                <Col className="input-field s12">
                  <input className="validate" type="text" name="password" id="password" />
                  <label htmlFor="password">Enter your password</label>
                </Col>
              </Row>

              <br />
              <center>
                <Row>
                  <Button
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo"
                  // disabled={!(formObject.email && formObject.password)}
                  >
                    Login
                    </Button>
                </Row>
              </center>
            </form>
          </Row>
        </Container>
        <a href="/signup">Create Account</a>
      </center>

      <div className="section"></div>
      <div className="section"></div>
    </div>
  )
}