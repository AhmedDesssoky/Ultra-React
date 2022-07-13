import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Index from "./component/index";
import Contact from "./component/contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
            <Route exact path="/contact" element={<Contact />} />
     
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
