import React from "react";
import { Container, Row, Col, Button } from "react-materialize";
// import Wrapper from "../Wrapper/Wrapper";
import "./style.css"

export default function LoginWrapper() {
  return (
    <div>
      <div className="section"></div>
      <center>
        <a href="/"><h4>PlayPal</h4></a>

        <h5>Please, login into your account</h5>

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
                  <input className="validate" type="text" name="username" id="username" />
                  <label>Enter your username</label>
                </Col>
              </Row>

              <Row>
                <Col className="input-field s12">
                  <input className="validate" type="text" name="email" id="email" />
                  <label>Enter your email</label>
                </Col>
              </Row>

              <Row>
                <Col className="input-field s12">
                  <input className="validate" type="text" name="password" id="password" />
                  <label>Enter your password</label>
                </Col>
              </Row>

              <br />
              <center>
                <Row>
                  <Button type="submit" name="btn_login" className="col s12 btn btn-large waves-effect indigo">Login</Button>
                </Row>
              </center>
            </form>
          </Row>
        </Container>
        <a href="#!">Create account</a>
      </center>

      <div className="section"></div>
      <div className="section"></div>
    </div>


  )
}