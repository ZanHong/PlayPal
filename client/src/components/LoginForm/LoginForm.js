import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-materialize";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import "./style.css";

export default function LoginForm() {
  const [formObject, setFormObject] = useState({
    email: "",
    password: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      if (!formObject.email.match(/.+@.+\..+/)) {
        alert("Please enter a valid email address");
        setFormObject({
          email: "",
          password: ""
        })
      } else if (formObject.password.length < 6) {
        alert("Password must have at least 6 characters");
        setFormObject({
          email: "",
          password: ""
        })
      } else {
        API.login({
          email: formObject.email,
          password: formObject.password
        })
          .then(res => {
            console.log(res.data);
            setFormObject({
              email: "",
              password: ""
            })
            Auth.authenticateUser(res.data.email);
            window.location.replace("/account");
          })
          .catch(err => console.log(err));
      }
    } else {
      console.log("incorrect details")
    }
  }

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
                  <input
                    className="validate"
                    type="text"
                    name="email"
                    id="email"
                    onChange={handleInputChange}
                    value={formObject.email}
                  />
                  <label htmlFor="email">Enter your email</label>
                </Col>
              </Row>

              <Row>
                <Col className="input-field s12">
                  <input
                    className="validate"
                    type="text"
                    name="password"
                    id="password"
                    onChange={handleInputChange}
                    value={formObject.password}
                  />
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
                    disabled={!(formObject.email && formObject.password)}
                    onClick={handleFormSubmit}
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