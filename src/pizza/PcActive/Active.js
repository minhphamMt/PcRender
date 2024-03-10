import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "./Active.scss";

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.setState({
        name: this.props.name,
      });
      console.log(">>>Check props:", this.props.name);
    }
  }
  render() {
    return (
      <>
        <p className="box" style={{ margin: "200px" }}>
          {this.state.name}
        </p>
      </>
    );
  }
}

export default Active;
