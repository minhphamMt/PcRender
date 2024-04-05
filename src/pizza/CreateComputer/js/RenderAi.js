import React, { Component } from "react";
import "../scss/RenderAi.scss";
import { toast } from "react-toastify";
class RenderAi extends Component {
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
              className={
                this.props.arr[1] === true
                  ? "item box-gl01 active"
                  : "item box-gl01"
              }
              onClick={() => {
                this.handleActive("ready", "1");
              }}
            >
              <div className="header">
                <p>RenderAi 1</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
                {" "}
                Core i7 12700 + VGA 3080 10GB
              </h4>
              <h5 style={{ color: "green" }}>Server Ready</h5>
              <p>
                25.000 <span>VNĐ/hour</span>
              </p>
              <p>
                250.000 <span>VNĐ/Day</span>
              </p>
              <p>
                3.800.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 3080 10GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>i7 12700</span>
                </li>
                <li>
                  <strong>RAM</strong>: 32GB DDR5
                </li>
                <li>
                  <strong>SSD</strong>: 500 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 11 Pro
                </li>
                <li>
                  <strong>Box Phone</strong>: Yes
                </li>
                <li>
                  <strong>Support</strong>: Team support 24/7
                </li>
              </ul>
              <div className="tag"></div>
            </div>
            <div
              className={
                this.props.arr[2] === true
                  ? "item box-gl01 active"
                  : "item box-gl01"
              }
              onClick={() => {
                this.handleActive("full", "2");
              }}
            >
              <div className="header">
                <p>RenderAi 2</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
                {" "}
                Core i5 13600K + VGA 3080Ti 12GB
              </h4>
              <h5 style={{ color: "red" }}>Server Full</h5>
              <p>
                28.000 <span>VNĐ/hour</span>
              </p>
              <p>
                280.000 <span>VNĐ/Day</span>
              </p>
              <p>
                4.500.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 3080Ti 12GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>i5 13600K</span>
                </li>
                <li>
                  <strong>RAM</strong>: 32GB DDR5
                </li>
                <li>
                  <strong>SSD</strong>: 500 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 11 Pro
                </li>
                <li>
                  <strong>Box Phone</strong>: Yes
                </li>
                <li>
                  <strong>Support</strong>: Team support 24/7
                </li>
              </ul>
              <div className="tag"></div>
            </div>
            <div
              className={
                this.props.arr[3] === true
                  ? "item box-gl01 active"
                  : "item box-gl01"
              }
              onClick={() => {
                this.handleActive("full", "3");
              }}
            >
              <div className="header">
                <p>RenderAi 3</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
                {" "}
                Core i7 12700 + VGA 4080 16GB
              </h4>
              <h5 style={{ color: "red" }}>Server Full</h5>
              <p>
                40.000 <span>VNĐ/hour</span>
              </p>
              <p>
                500.000 <span>VNĐ/Day</span>
              </p>
              <p>
                6.500.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    RTX 4080 16GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>i7 12700</span>
                </li>
                <li>
                  <strong>RAM</strong>: 32GB DDR5
                </li>
                <li>
                  <strong>SSD</strong>: 500 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 11 Pro
                </li>
                <li>
                  <strong>Box Phone</strong>: Yes
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

export default RenderAi;
