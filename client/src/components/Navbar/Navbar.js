import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import "./style.css";

export default function Nav() {
  return (
    <Navbar className="header z-depth-2"
      alignLinks="right"
      brand={<a className="brand-logo" style={{ marginLeft: "20px" }} href="#" > PlayPal</a >}
      id="mobile-nav"
      menuIcon={< Icon > menu</Icon >}
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
      <NavItem href="">
        Getting started
      </NavItem>
      <NavItem href="components.html">
        Components
      </NavItem>
    </Navbar >
  )
}
