import React from "react";
import { Col, Collection, CollectionItem } from "react-materialize";
import "./style.css";

export function SearchList({ children }) {
  return (
    <Col m={8} s={12}>
      <Collection>{children}</Collection>
    </Col>
  )
};

export function UserList({ children }) {
  return (
    <Col m={8} s={12}>
      <Collection header="Your List">{children}</Collection>
    </Col>
  )
};

export function ListContainer({ children }) {
  return (
    <div className="list-container">
      {children}
    </div>
  )
}

export function ListItem({ children }) {
  return (
    <CollectionItem>{children}</CollectionItem>
  )
}