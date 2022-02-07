import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Our Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Digital Art is being born into the new age, a new era of NFT renaissance is being built.</p>
        </div>
        <p className="p__opensans">Building a platform sharing the value to holders, giving profit share to community members is the most important pillar to a successful NFT project...</p>
      </div>

      <div className="app__chef-sign">
        <p>Lily</p>
        <p className="p__opensans">HxW Founder / Lead Dev</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
