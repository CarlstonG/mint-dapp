import React from 'react';

import { AboutUs, Chef, Footer, Findus, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';

import './App.css';
import Minter from './Minter';


const App = () => (
  <div>
  
    <Navbar />
    <Minter/>
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <Findus/>
    <Footer />
  </div>
);

export default App;
