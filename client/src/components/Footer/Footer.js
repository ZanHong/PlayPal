import React from "react";
import { Footer } from "react-materialize";
import "./style.css";

export default function Foot() {
  return (
    <Footer
      className="footer z-depth-2"
      copyrights="Copyright © PlayPal 2020"
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
          <li><a className="grey-text text-lighten-3" href="/search">Search</a></li>
          <li><a className="grey-text text-lighten-3" href="/addactivity">Create</a></li>
        </ul>
      }
      moreLinks={
        <a
          className="grey-text text-lighten-4 right"
          href="http://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with React Materialize
        </a>
      }
    >
      <h5 className="white-text">
        <a className="grey-text text-lighten-3" href="/">
          PlayPal
        </a>
      </h5>
      <p className="grey-text text-lighten-4">
        Paving a brighter future for your children
      </p>
    </Footer>
  )
}