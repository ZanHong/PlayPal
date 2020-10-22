import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Select } from "react-materialize";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING } from "../../utils/actions";
import API from "../../utils/API";

export default function CreateActivityForm() {
  const titleRef = useRef();
  const authorRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const preparationRef = useRef();
  const [state, dispatch] = useStoreContext();

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch({ type: LOADING });
    console.log(titleRef.current.value);
    console.log(authorRef.current.value);
    console.log(categoryRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(preparationRef.current.value);
    // API.createActivity({
    //   title: titleRef.current.value,
    //   author: authorRef.current.value,
    //   category: categoryRef.current.value,
    //   description: descriptionRef.current.value,
    //   preparation: preparationRef.current.value,
    // })
    //   .then(res => {
    //     console.log(res.data);
    //     dispatch({
    //       type: ADD_ACTIVITY,
    //       post: res.data
    //     })
    //   })
    //   .catch(err => console.log(err));

    // titleRef.current.value = "";
    // authorRef.current.value = "";
    // categoryRef.current.value = "";
    // descriptionRef.current.value = "";
  }

  return (
    <Container>
      <h4 style={{ color: "black" }}>Create an Activity for the Little Ones!</h4>

      <Row>
        <form className="s12" method="post">
          <Row>
            <Col className="input-field s12">
              <input
                className="validate"
                type="text"
                name="title"
                id="title"
                ref={titleRef}
              // value={formObject.username}
              />
              <label htmlFor="title">Title</label>
            </Col>
          </Row>
          <Row>
            <Col className="input-field s6">
              <input
                className="validate"
                type="text"
                name="username"
                id="username"
                ref={authorRef}
              // value={formObject.username}
              />
              <label htmlFor="username">Username</label>
            </Col>
            <Col className="input-field s6">
              <input
                className="validate"
                type="text"
                name="category"
                id="category"
                ref={categoryRef}
              // value={formObject.username}
              />
              <label htmlFor="category">Physical/Social/Emotional/Cognitive/Language</label>
            </Col>
          </Row>
          <Row>
            <Col className="input-field s12">
              <textarea
                id="category"
                className="materialize-textarea validate"
                type="text"
                name="description"
                ref={descriptionRef}
              />
              <label htmlFor="Textarea-12">Description</label>
            </Col>
          </Row>
          <Row>
            <Col className="input-field s12">
              <input
                className="materialize-textarea validate"
                type="text"
                name="preparation"
                id="preparation"
                ref={preparationRef}
                defaultValue="No planning is needed. Make it fun and spontaneous for your little ones!"
              // value={formObject.username}
              />
              <label htmlFor="preparation">Preparation (optional)</label>
            </Col>
          </Row>
          <center>
            <Row>
              <Button
                type="submit"
                name="btn_signup"
                className="col s12 btn btn-large waves-effect indigo"
                // disabled={!(formObject.username && formObject.email && formObject.password)}
                onClick={handleFormSubmit}
              >
                Submit
                  </Button>
            </Row>
          </center>
        </form>
      </Row>
    </Container>
  )
}