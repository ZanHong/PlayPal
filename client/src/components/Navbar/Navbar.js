import React from 'react';
import Auth from "../../utils/Auth";
import { Navbar, Icon } from 'react-materialize';
import "./style.css";
import API from "../../utils/API";

export default function Nav() {
  if (Auth.isUserAuthenticated()) {
    console.log("Logged in")
  }

  function handleLogout(event) {
    event.preventDefault();
    API.logout()
      .then(() => {
        console.log("Logged out");
        Auth.deauthenticateUser();
        window.location.replace("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <Navbar className="header z-depth-2"
      alignLinks="right"
      brand={<a className="brand-logo" style={{ marginLeft: "20px" }} href="/" > PlayPal</a >}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      {Auth.isUserAuthenticated()
        ?
        <>
          <li>Welcome {Auth.getToken()}!</li>
          <li><a href="/">Home</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/addactivity">Create</a></li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </>
        :
        <>
          <li><a href="/login">Login/Signup</a></li>
        </>

      }
    </Navbar >
  )
}
