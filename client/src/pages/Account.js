import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Wrapper from "../components/Wrapper/Wrapper";
import UserCard from "../components/UserCard/UserCard";
import { UserList, ListContainer, ListItem } from "../components/List/List";
import { Row } from "react-materialize";
import API from "../utils/API";


export default function Account() {

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
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Row>
          <UserCard />
          {activities.length ? (
            <UserList>
              <ListContainer>
                {activities.map(activity => (
                  <ListItem key={activity._id}>
                    <p>Title: {activity.title}</p>
                    <p>Author: {activity.author}</p>
                    <p>Category: {activity.category}</p>
                  </ListItem>
                ))}
              </ListContainer>

            </UserList>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Wrapper>
    </div>
  )
}