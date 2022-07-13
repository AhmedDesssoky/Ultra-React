import React, { Component } from "react";
import Home from './../Home'
import About from './../About'
import Footer from './../Footer'
import Work from './../Work'
import Profile from './../Profile'
import Portoflio from './../Portoflio'
import SocialMedia from './../SocialMedia'



class Index extends Component {
  render() {
    return (
      <section className="App">
        <Home />
        <Work />
        <Portoflio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
   

      </section>
    );
  }
}

export default Index;
