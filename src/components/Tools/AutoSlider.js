import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

// import shape1 from '../../images/Cournne1.JPG';
// import shape2 from '../../images/croissant1.JPG';
// import shape3 from '../../images/dome1.JPG';
 
const AutoSlider = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
      {/* <div><img src={shape1} alt="shape1" /></div> */}
      <div>image1</div>
      <div>image2</div>
      <div>image3</div>
      <div>image4</div>
  </AutoplaySlider>
);

export default AutoSlider;