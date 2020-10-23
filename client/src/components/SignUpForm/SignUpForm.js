import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-materialize";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import "./style.css";

export default function SignUpForm() {
  const [formObject, setFormObject] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.email && formObject.password) {
      if (!formObject.email.match(/.+@.+\..+/)) {
        alert("Please enter a valid email address");
        setFormObject({
          username: "",
          email: "",
          password: ""
        })
      } else if (formObject.password.length < 6) {
        alert("Password must have at least 6 characters");
        setFormObject({
          username: "",
          email: "",
          password: ""
        })
      } else {
        API.signUp({
          username: formObject.username,
          email: formObject.email,
          password: formObject.password
        })
          .then(res => {
            console.log(res.data);
            setFormObject({
              username: "",
              email: "",
              password: ""
            })
            Auth.authenticateUser(res.data.username);
            window.location.replace("/");
          })
          .catch(err => console.log(err));
      }
    }
  }

  return (
    <div>
      <div className="section"></div>
      <center>
        <a href="/"><h4>Welcome to PlayPal!</h4></a>

        <h5>Please fill in your details below</h5>

        <div className="section"></div>

        <Container>
          <Row className="z-depth-1 grey lighten-4 main-row" >

            <form className="s12" method="post">
              <Row>
                <Col className="s12">
                </Col>
              </Row>

              <Row>
                <Col className="input-field s12">
                  <i className="material-icons prefix">tag_faces</i>
                  <input
                    className="validate"
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleInputChange}
                    value={formObject.username}
                  />
                  <label htmlFor="username">Enter your username</label>
                </Col>
              </Row>

              <Row>
                <Col className="input-field s12">
                  <i className="material-icons prefix">email</i>
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
                  <i className="material-icons prefix">lock</i>
                  <input
                    className="validate"
                    type="password"
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
                    name="btn_signup"
                    className="col s12 btn btn-large waves-effect indigo"
                    disabled={!(formObject.username && formObject.email && formObject.password)}
                    onClick={handleFormSubmit}
                  >
                    Create Account
                  </Button>
                </Row>
              </center>
            </form>
          </Row>
        </Container>
        <a href="/login">Have an acccount? Log in here!</a>
      </center>

      <div className="section"></div>
      <div className="section"></div>
    </div>
  )
}