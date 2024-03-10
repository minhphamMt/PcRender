import React, { Component } from "react";
import "../scss/chorme.scss";

class Chorme extends Component {
  handleActive = (message, item) => {
    let arrcoppy = [...this.props.arr];
    let mes = this.props.mes;

    if (mes[item] === "full" || mes[item] === "ready") {
      mes[item] = "";
    } else {
      mes[item] = message;
    }
    console.log(">>>Check message:", mes);
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
                this.handleActive("full", "1");
              }}
            >
              <div className="header">
                <div className="img"></div>
              </div>
              <h4 style={{ textTransform: "capitalize", marginTop: "20px" }}>
                {" "}
                PC Chorme
              </h4>
              <h5 style={{ color: "red" }}>Server full</h5>
              <p>
                8.000 <span>VNĐ/hour</span>
              </p>
              <p>
                88.000 <span>VNĐ/Day</span>
              </p>
              <p>
                2.000.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    Xuất Hình
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>2 x CPU Xeon 2680V4</span>
                </li>
                <li>
                  <strong>RAM</strong>: 64 Gb DDR4
                </li>
                <li>
                  <strong>SSD</strong>: 500GB
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

export default Chorme;
