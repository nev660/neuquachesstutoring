import React from 'react';
import { Element } from 'react-scroll';
import './App.css';
import About from "./About";
import CarouselSegment from "./CarouselSegment";
import Contact from "./Contact";
import MyNav from './myNav';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <div className="App">
      <MyNav/>
      <CarouselSegment/>
      <Element>
      <About/>
      </Element>
      <Element>
      <Contact/>
      </Element>
      <Footer/>
      </div>
  );
}

export default App;
