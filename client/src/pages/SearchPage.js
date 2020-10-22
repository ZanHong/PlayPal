import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import BorderedWrapper from "../components/BorderedWrapper/BorderedWrapper";
import { SearchList, ListItem, ListContainer } from "../components/List/List";
import { Row } from "react-materialize";
import Loader from "../components/Loading/Loading";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default function SearchPage() {
  const [activities, setActivities] = useState([]);
  // const [formObject, setFormObject] = useState({})
  // console.log(activities);

  useEffect(() => {
    loadActivities()
  }, []);

  function loadActivities() {
    API.getActivities()
      .then(res => {
        // console.log(res.data);
        setActivities(res.data);
      }

      )
      .catch(err => console.log(err))
  };

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value })
  // };

  return (
    <div>
      <BorderedWrapper>
        <Row>
          <Dropdown />
        </Row>
        <Row>
          {activities.length ? (
            <SearchList>
              <ListContainer>
                {activities.map(activity => (
                  <ListItem key={activity._id}>
                    <Link to={"/activities/" + activity._id}>
                      <h5>{activity.title} by {activity.author}</h5>
                      <p>Category: {activity.category}</p>
                    </Link>
                  </ListItem>
                ))}
              </ListContainer>
            </SearchList>
          ) : (
              <Loader />
            )}
        </Row>
      </BorderedWrapper>
    </div >
  )
}