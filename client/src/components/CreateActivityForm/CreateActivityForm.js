import React, { useState } from "react";
import { Container, Row, Col, Button, Select, Icon } from "react-materialize";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

export default function CreateActivityForm() {
  const [formObject, setFormObject] = useState({
    title: "",
    category: "",
    description: "",
    preparation: "No planning is needed. Make it fun and spontaneous for your little ones!"
  });

  const [success, setSuccess] = useState({
    color: "none",
    message: ""
  });

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormObject({ ...formObject, [id]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.category && formObject.description) {
      API.createActivity({
        title: formObject.title,
        category: formObject.category,
        description: formObject.description,
        preparation: formObject.preparation,
        author: Auth.getToken()
      })
        .then(res => {
          console.log(res.data);
          setFormObject({
            title: "",
            category: "",
            description: "",
            preparation: "No planning is needed. Make it fun and spontaneous for your little ones!"
          })
          setSuccess({ color: "green", message: "Thank you for your contribution! 😊" });
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <Container>
      <h4 style={{ color: "#0079C1" }}>Create an Activity for the Little Ones!</h4>

      <Row>
        <form className="s12" method="post">
          <Row>
            <Col className="input-field s6">
              <i className="material-icons prefix">edit</i>
              <input
                className="validate"
                type="text"
                id="title"
                value={formObject.title}
                onChange={handleInputChange}
              />
              <label htmlFor="title">Title</label>
            </Col>
            <Col className="s6">
              <Select
                icon={<Icon>child_care</Icon>}
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
                value={formObject.category}
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
              </Select>
            </Col>
          </Row>
          <Row>
            <Col className="input-field s12">
              <i className="material-icons prefix">description</i>
              <textarea
                id="description"
                className="materialize-textarea validate"
                type="text"
                value={formObject.description}
                onChange={handleInputChange}
              />
              <label htmlFor="Textarea-12">Description</label>
            </Col>
          </Row>
          <Row>
            <Col className="input-field s12">
              <i className="material-icons prefix">note_add</i>
              <input
                className="materialize-textarea validate"
                type="text"
                id="preparation"
                value={formObject.preparation}
                onChange={handleInputChange}
              />
              <label htmlFor="preparation">Preparation (optional)</label>
            </Col>
          </Row>
          <center>
            {success.message && (<h5 style={{ color: success.color }}>{success.message}</h5>)}
            <Row>
              <Button
                type="submit"
                name="btn_submit"
                className="col s12 btn btn-large waves-effect indigo"
                disabled={!(formObject.title && formObject.category && formObject.description)}
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