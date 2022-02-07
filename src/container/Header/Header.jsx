import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the Moon 🚀🚀🚀" />
      <h1 className="app__header-h1">The Key To An Amazing Solana Project!</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Bouncy Wives are a one-of-a-kind 6333 Blockchain Utility Art! A super multi-utility NFT project with excellent project planning, a simple roadmap, a attractive concept, DAO access, 30% profit share, and much more.</p>
      <a type="button" className="custom__button" href='https://twitter.com/BouncyWives' target="_blank">Explore...</a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
