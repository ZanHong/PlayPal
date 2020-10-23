import React, { useState, useEffect } from "react";
import BorderedWrapper from "../components/BorderedWrapper/BorderedWrapper";
import { SearchList, ListItem, ListContainer } from "../components/List/List";
import { Row, Select, Icon } from "react-materialize";
import Loader from "../components/Loading/Loading";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default function SearchPage() {
  const [activities, setActivities] = useState([]);
  const [search, setSearch] = useState("All");

  // useEffect(() => {
  //   loadActivities()
  // }, []);

  // function loadActivities() {
  //   API.getActivities()
  //     .then(res => {
  //       setActivities(res.data);
  //     })
  //     .catch(err => console.log(err))
  // };

  useEffect(() => {
    console.log(search)
    if (search === "All") {
      API.getActivities()
        .then(res => {
          setActivities(res.data);
        })
        .catch(err => console.log(err))
    } else {
      API.getActivityByCategory(search)
        .then(res => {
          // console.log(res);
          setActivities(res.data)
        })
        .catch(err => console.log(err));
    }
  }, [search])

  function handleInputChange(event) {
    setSearch(event.target.value);
  };

  return (
    <div>
      <BorderedWrapper>
        <Row>
          <Select
            icon={<Icon>search</Icon>}
            label="Choose a categeory"
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
            value="All"
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