import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-materialize";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import "./style.css";

export default function LoginForm() {
  const [formObject, setFormObject] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState({
    color: "none",
    message: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleLoginError(err) {
    console.log(err);
    setError({ color: "red", message: "Invalid username/password." });
    setFormObject({
      username: "",
      password: ""
    });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      if (!formObject.username) {
        alert("Please enter a valid username");
        setFormObject({
          username: "",
          password: ""
        })
      } else if (formObject.password.length < 6) {
        alert("Password must have at least 6 characters");
        setFormObject({
          username: "",
          password: ""
        })
      } else {
        API.login({
          username: formObject.username,
          password: formObject.password
        })
          .then(res => {
            console.log(res.data);
            Auth.authenticateUser(res.data.username);
            window.location.replace("/");
          })
          .catch(err => {
            console.log(err);
            handleLoginError();
          });
      }
    } else {
      console.log("incorrect details")
    }
  }

  return (
    <div>
      <div className="section"></div>
      <center>
        <a href="/"><h4>Welcome Back!</h4></a>

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
              {error.message && (<p style={{ color: error.color }}>{error.message}</p>)}
              <br />
              <center>
                <Row>
                  <Button
                    type="submit"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo"
                    disabled={!(formObject.username && formObject.password)}
                    onClick={handleFormSubmit}
                  >
                    Login
                    </Button>
                </Row>
              </center>
            </form>
          </Row>
        </Container>
        <a href="/signup">Not yet a member? Sign up here!</a>
      </center>

      <div className="section"></div>
      <div className="section"></div>
    </div>
  )
}