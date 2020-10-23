import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';
import "./style.css"

export default function Carousel() {
  return (
    <Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 400,
        indicators: true,
        interval: 5000
      }}
    >
      <Slide image={<img alt="" src="./assets/images/smiley-hands.jpg" />}>
        <Caption className="text-shadow" placement="center">
          <h3>
            <b>PlayPal!</b>
          </h3>
          <h5 className="light grey-text text-lighten-5">
            <b>Paving a brighter future for your children</b>
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="./assets/images/activity.jpg" />}>
        <Caption className="text-shadow" placement="left">
          <h3>
            <b>Discover!</b>
          </h3>
          <h5 className="light grey-text text-lighten-5">
            <b>Endless creative, educational and fun activities</b>
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="./assets/images/friends.jpg" />}>
        <Caption className="text-shadow" placement="right">
          <h3>
            <b>Share your ideas!</b>
          </h3>
          <h5 className="light grey-text text-lighten-5">
            <b>Put a smile on their faces</b>
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="./assets/images/toddlers-making-friends.jpg" />}>
        <Caption className="text-shadow" placement="center">
          <h3>
            <b>Join the community!</b>
          </h3>
          <h5 className="light grey-text text-lighten-5">
            <a className="light grey-text text-lighten-5" href="/signup"><b>Click here to get started</b></a>
          </h5>
        </Caption>
      </Slide>
    </Slider>
  )
}