import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Select } from "react-materialize";
import Auth from "../../utils/Auth";
// import { useStoreContext } from "../../utils/GlobalState";
// import { LOADING, ADD_ACTIVITY } from "../../utils/actions";
import API from "../../utils/API";

export default function CreateActivityForm() {
  const [formObject, setFormObject] = useState({
    title: "",
    category: "",
    description: "",
    preparation: "No planning is needed. Make it fun and spontaneous for your little ones!"
  });

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormObject({ ...formObject, [id]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(formObject.title);
    console.log(formObject.category);
    console.log(formObject.description);
    console.log(formObject.preparation);
    console.log(Auth.getToken());
  }
  // const titleRef = useRef();
  // const authorRef = useRef();
  // const categoryRef = useRef();
  // const descriptionRef = useRef();
  // const preparationRef = useRef();
  // const [state, dispatch] = useStoreContext();

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   dispatch({ type: LOADING });
  //   console.log(titleRef.current.value);
  //   console.log(authorRef.current.value);
  //   console.log(categoryRef.current.value);
  //   console.log(descriptionRef.current.value);
  //   console.log(preparationRef.current.value);
  //   API.createActivity({
  //     title: titleRef.current.value,
  //     author: authorRef.current.value,
  //     category: categoryRef.current.value,
  //     description: descriptionRef.current.value,
  //     preparation: preparationRef.current.value,
  //   })
  //     .then(res => {
  //       // console.log(res.data);
  //       alert("created activity")
  //       dispatch({
  //         type: ADD_ACTIVITY,
  //         post: res.data
  //       })
  //     })
  //     .catch(err => console.log(err));

  //   titleRef.current.value = "";
  //   authorRef.current.value = "";
  //   categoryRef.current.value = "";
  //   descriptionRef.current.value = "";
  //   preparationRef.current.value = "No planning is needed. Make it fun and spontaneous for your little ones!";
  // }

  return (
    <Container>
      <h4 style={{ color: "black" }}>Create an Activity for the Little Ones!</h4>

      <Row>
        <form className="s12" method="post">
          <Row>
            <Col className="input-field s6">
              <input
                className="validate"
                type="text"
                id="title"
                // ref={titleRef}
                value={formObject.username}
                onChange={handleInputChange}
              />
              <label htmlFor="title">Title</label>
            </Col>
            <Col className="s6">
              <Select
                id="category"
                multiple={false}
                onChange={function noRefCheck() { }}
                options={{
                  classes: '',
                  dropdownOptions: {
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                  }
                }}
                className="validate"
                value=""
                onChange={handleInputChange}
              >
                <option
                  disabled
                  value=""
                >
                  Choose a category
                </option>
                <option value="Physical">
                  Physical
                </option>
                <option value="Social">
                  Social
                </option>
                <option value="Emotional">
                  Emotional
                </option>
                <option value="Cognitive">
                  Cognitive
                </option>
                <option value="Language">
                  Language
                </option>
                <option value="All">
                  All
                </option>
              </Select>
            </Col>
          </Row>
          {/* <Row>
            <Col className="input-field s6">
              <input
                className="validate"
                type="text"
                name="username"
                id="username"
                // ref={authorRef}
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
                // ref={categoryRef}
              // value={formObject.username}
              />
              <label htmlFor="category">Physical/Social/Emotional/Cognitive/Language</label>
            </Col>
          </Row> */}
          <Row>
            <Col className="input-field s12">
              <textarea
                id="description"
                className="materialize-textarea validate"
                type="text"
                value={formObject.description}
                onChange={handleInputChange}
              // ref={descriptionRef}
              />
              <label htmlFor="Textarea-12">Description</label>
            </Col>
          </Row>
          <Row>
            <Col className="input-field s12">
              <input
                className="materialize-textarea validate"
                type="text"
                id="preparation"
                // ref={preparationRef}
                value={formObject.preparation}
                onChange={handleInputChange}
              />
              <label htmlFor="preparation">Preparation (optional)</label>
            </Col>
          </Row>
          <center>
            <Row>
              <Button
                type="submit"
                name="btn_submit"
                className="col s12 btn btn-large waves-effect indigo"
                // disabled={state.loading}
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