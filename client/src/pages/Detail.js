import React, { useEffect } from 'react';
import BorderedWrapper from "../components/BorderedWrapper/BorderedWrapper";
import { Row, Col } from "react-materialize";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_ACTIVITY } from "../utils/actions";

export default function Detail(props) {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getActivity(props.match.params.id)
      .then(res => dispatch(
        {
          type: SET_CURRENT_ACTIVITY,
          activity: res.data
        }
      ))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <BorderedWrapper>
        <Row>
          <Col>
            <h1 style={{ color: "#0079C1" }}>{state.currentActivity.title}</h1>
            <p>by {state.currentActivity.author}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ borderBottom: "1px solid lightgray" }}>Description</h4>
            <p>
              {state.currentActivity.description}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ borderBottom: "1px solid lightgray" }}>What to prepare?</h4>
            <p>
              {state.currentActivity.preparation}
            </p>
          </Col>
        </Row>
      </BorderedWrapper>
    </div >
  )
}