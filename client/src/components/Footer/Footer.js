import React from "react";
import { Footer } from "react-materialize";
import "./style.css";

export default function Foot() {
  return (
    <Footer
      className="footer z-depth-3"
      copyrights="Copyright © 2020"
      links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
      moreLinks={<a
        className="grey-text text-lighten-4 right"
        href="http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome"
        target="_blank"
        rel="noopener noreferrer"
      >Made with React Materialize</a>}
    >
      <h5 className="white-text">
        Footer Content
      </h5>
      <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
      </p>
    </Footer>
  )
}