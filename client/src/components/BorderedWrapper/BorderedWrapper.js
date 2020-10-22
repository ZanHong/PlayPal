import React from 'react';
import "./style.css"

export default function BorderedWrapper(props) {
  return (
    <div className="container bordered z-depth-1">
      {props.children}
    </div>
  )
}