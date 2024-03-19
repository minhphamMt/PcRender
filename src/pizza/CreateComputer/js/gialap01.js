import React, { Component } from "react";
import "../scss/giaLap01.scss";
import { toast } from "react-toastify";
class GiaLap01 extends Component {
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
                <div className="img"></div>
              </div>
              <h4 style={{ textTransform: "capitalize", marginTop: "20px" }}>
                {" "}
                Dual Xeon E5 2686V4 (36 nhân 72 luồng ){" "}
              </h4>
              <h5 style={{ color: "green" }}>Server Ready</h5>
              <p>
                9.000 <span>VNĐ/hour</span>
              </p>
              <p>
                99.000 <span>VNĐ/Day</span>
              </p>
              <p>
                2.200.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 1080 8GB{" "}
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>2 x CPU XEON 2686V4</span>
                </li>

                <li>
                  <strong>RAM</strong>: 128 GB
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
              className={this.props.arr[2] === true ? "item active" : "item"}
              onClick={() => {
                this.handleActive("full", "2");
              }}
            >
              <div className="header">
                <div className="img"></div>
              </div>
              <h4 style={{ textTransform: "capitalize", marginTop: "20px" }}>
                Dual Xeon E5 2680V4 + 1080Ti
              </h4>
              <h5 style={{ color: "red" }}>Server Full</h5>
              <p>
                9.000 <span>VNĐ/hour</span>
              </p>
              <p>
                99.000 <span>VNĐ/Day</span>
              </p>
              <p>
                2.200.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 1080Ti 11GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>Dual Xeon E5 2680V4</span>
                </li>

                <li>
                  <strong>RAM</strong>: 128 GB
                </li>
                <li>
                  <strong>SSD</strong>: 500 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 10 LTSC
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
                this.handleActive("ready", "3");
              }}
            >
              <div className="header">
                <div className="img"></div>
              </div>
              <h4 style={{ textTransform: "capitalize", marginTop: "20px" }}>
                Dual Xeon E5 2680V4 + 3060Ti
              </h4>
              <h5 style={{ color: "green" }}>Server Ready</h5>
              <p>
                11.000 <span>VNĐ/hour</span>
              </p>
              <p>
                110.000 <span>VNĐ/Day</span>
              </p>
              <p>
                2.400.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 3060Ti 8GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>Dual Xeon 2680V4</span>
                </li>

                <li>
                  <strong>RAM</strong>: 128 GB
                </li>
                <li>
                  <strong>SSD</strong>: 500 GB
                </li>
                <li>
                  <strong>OS</strong>: Windows 10 LTSC
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

export default GiaLap01;
