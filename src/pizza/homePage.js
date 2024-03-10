import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "./homePage.scss";
import Header from "./header";
import Computer from "./computer";
import { ToastContainer } from "react-toastify";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container home">
          <h4 className="title">
            hãy cùng tạo Pc mà bạn thích và trải nghiệm nó nào
          </h4>
          <div className="box"></div>
        </div>
      </>
    );
  }
}

export default HomePage;
