import React from "react";
import { Row, Col, Collection, CollectionItem } from "react-materialize";

export function SearchList({ children }) {
  return (
    <Row>
      <Col m={6} s={12}>
        <Collection>{children}</Collection>
      </Col>
    </Row>
  )
};

export function SearchItem({ children }) {
  return (
    <CollectionItem>{children}</CollectionItem>
  )
}