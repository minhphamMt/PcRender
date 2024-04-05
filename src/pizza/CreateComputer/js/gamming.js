import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../scss/gamming.scss";
import { toast } from "react-toastify";
class Gamming extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleActive = (message, item) => {
    let arrcoppy = [...this.props.arr];
    let mes = this.props.mes;
    if (mes[item] === "full" || mes[item] === "ready") {
      mes[item] = "";
    } else {
      mes[item] = message;
    }
    if (!arrcoppy[item]) {
      arrcoppy[item] = true;
      this.props.handleActivePa(message, arrcoppy);
    } else {
      arrcoppy[item] = !arrcoppy[item];

      this.props.handleActivePa(message, arrcoppy);
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="child">
            <div
              className={this.props.arr[1] === true ? "item active" : "item"}
              onClick={() => {
                this.handleActive("ready", "1");
              }}
            >
              <div className="header">
                <p>Gamming 1</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}> PC GAMING 3060Ti</h4>
              <h5 style={{ color: "green" }}>Server Ready</h5>
              <p>
                10.000 <span>VNĐ/hour</span>
              </p>
              <p>
                110.000 <span>VNĐ/Day</span>
              </p>
              <p>
                2.200.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 1080 8G
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>i5 12400</span>
                </li>

                <li>
                  <strong>RAM</strong>: 16 GB
                </li>
                <li>
                  <strong>SSD</strong>: 1000 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 10 Pro
                </li>
                <li>
                  <strong>Box Phone</strong>:
                </li>
                <li>
                  <strong>Support</strong>: Team support 24/7
                </li>
              </ul>
              <div className="tag"></div>
            </div>
            <div
              className={this.props.arr[2] === true ? "item active" : "item"}
              onClick={() => {
                this.handleActive("ready", "2");
              }}
            >
              <div className="header">
                <p>Gamming 2</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}> PC GAMING 1660S</h4>
              <h5 style={{ color: "green" }}>Server Ready</h5>
              <p>
                7.000 <span>VNĐ/hour</span>
              </p>
              <p>
                77.000 <span>VNĐ/Day</span>
              </p>
              <p>
                1.700.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 1660S
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>intel i5-10500</span>
                </li>

                <li>
                  <strong>RAM</strong>: 16 GB
                </li>
                <li>
                  <strong>SSD</strong>: 500 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 10 Pro
                </li>
                <li>
                  <strong>Box Phone</strong>:
                </li>
                <li>
                  <strong>Support</strong>: Team support 24/7
                </li>
              </ul>
              <div className="tag"></div>
            </div>
            <div
              className={this.props.arr[3] === true ? "item active" : "item"}
              onClick={() => {
                this.handleActive("full", "3");
              }}
            >
              <div className="header">
                <p>Gamming 3</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
                {" "}
                PC GAMING 2060 Super
              </h4>
              <h5 style={{ color: "red" }}>Server Full</h5>
              <p>
                9.000 <span>VNĐ/hour</span>
              </p>
              <p>
                99.000 <span>VNĐ/Day</span>
              </p>
              <p>
                2.000.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 2060 SUPER 8GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>Dual Xeon 2680V4</span>
                </li>

                <li>
                  <strong>RAM</strong>: 64 GB
                </li>
                <li>
                  <strong>SSD</strong>: 500 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 10 Pro
                </li>
                <li>
                  <strong>Box Phone</strong>:
                </li>
                <li>
                  <strong>Support</strong>: Team support 24/7
                </li>
              </ul>
              <div className="tag"></div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="page">1</div>
          </div>
        </div>
      </>
    );
  }
}

export default Gamming;
