import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';

export default function Carousel() {
  return (
    <Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 400,
        indicators: true,
        interval: 6000
      }}
    >
      <Slide image={<img alt="" src="./assets/images/smiley-hands.jpg" />}>
        <Caption placement="center">
          <h3>
            This is our big Tagline!
      </h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
      </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="./assets/images/activity-copy.jpg" />}>
        <Caption placement="left">
          <h3>
            Left Aligned Caption
      </h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
      </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="./assets/images/friends1.jpg" />}>
        <Caption placement="right">
          <h3>
            Right Aligned Caption
      </h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
      </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src="./assets/images/toddlers-making-friends.jpg" />}>
        <Caption placement="center">
          <h3>
            This is our big Tagline!
      </h3>
          <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
      </h5>
        </Caption>
      </Slide>
    </Slider>
  )
}