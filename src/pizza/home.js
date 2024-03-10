import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "./home.scss";
import Header from "./header";
import Computer from "./computer";
import { ToastContainer } from "react-toastify";
import HomePage from "./homePage";
import Active from "./PcActive/Active";
import { toast } from "react-toastify";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: "0",
      boolean: false,
      name: "minh minh minh minh mnh",
    };
  }
  handleOnchange = (name) => {
    this.setState({
      name: name,
    });
  };
  render() {
    return (
      <>
        <ToastContainer
          className="toast-container"
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
        />
        <Router>
          <>
            <Header coin={this.state.coin} boolean={this.state.boolean} />

            <Switch>
              <Route path="/nav" exact>
                <HomePage />
              </Route>
              <Route path="/computer">
                <Computer handleOnchange={this.handleOnchange} />
              </Route>
              <Route path="/pcactive">
                <Active name={this.state.name} />
              </Route>
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default Home;
