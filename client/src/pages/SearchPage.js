import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchForm from "../components/SearchForm/SearchForm";
import { SearchList, ListItem } from "../components/List/List";
import API from "../utils/API";
import { Container, Row } from "react-materialize";

export default function SearchPage() {
  const [activities, setActivities] = useState([]);
  // const [formObject, setFormObject] = useState({})
  console.log(activities);

  useEffect(() => {
    loadActivities()
  }, []);

  function loadActivities() {
    API.getActivities()
      .then(res => {
        console.log(res.data);
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
      <Navbar />
      <Container>
        <Row>
          <SearchForm />
          {activities.length ? (
            <SearchList>
              {activities.map(activity => (
                <ListItem key={activity._id}>
                  <p>Title: {activity.title}</p>
                  <p>Author: {activity.author}</p>
                  <p>Category: {activity.category}</p>
                </ListItem>
              ))}
            </SearchList>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Container>
    </div>
  )
}