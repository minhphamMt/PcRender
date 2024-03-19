import React, { Component } from "react";
import "../scss/gialap.scss";
import { toast } from "react-toastify";
class GiaLap extends Component {
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
                this.handleActive("full", "1");
              }}
            >
              <div className="header">
                <div className="img"></div>
              </div>
              <h4 style={{ textTransform: "capitalize", marginTop: "20px" }}>
                {" "}
                dual xeon E5 2680v4 + vga 1080
              </h4>
              <h5 value="sever full" style={{ color: "red" }}>
                Sever full
              </h5>
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
                    VGA 1080 8G
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>Dual Xeon E5 2680V4</span>
                </li>

                <li>
                  <strong>RAM</strong>: 128GB
                </li>
                <li>
                  <strong>SSD</strong>: 500GB
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
              className={this.props.arr[2] === true ? "item active" : "item"}
              onClick={() => {
                this.handleActive("ready", "2");
              }}
            >
              <div className="header">
                <div className="img"></div>
              </div>
              <h4 style={{ textTransform: "capitalize", marginTop: "20px" }}>
                {" "}
                Dual Xeon E5 2680V4 + VGA 3060 12GB
              </h4>
              <h5 style={{ color: "green" }}>Server Ready</h5>
              <p>
                9.000
                <span>VNĐ/hour</span>
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
                    VGA 3060 12GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>Dual Xeon E5 2680V4</span>
                </li>

                <li>
                  <strong>RAM</strong>: 128GB
                </li>
                <li>
                  <strong>SSD</strong>: 500GB
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
                {" "}
                Dual Xeon 2696V4 (44 Nhân - 88 Luồng)
              </h4>
              <h5 style={{ color: "green" }}>Server Ready</h5>
              <p>
                18.000 <span>VNĐ/hour</span>
              </p>
              <p>
                180.000 <span>VNĐ/Day</span>
              </p>
              <p>
                3.200.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 3060 12GB
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>Dual Xeon 2696V4</span>
                </li>

                <li>
                  <strong>RAM</strong>: 128GB
                </li>
                <li>
                  <strong>SSD</strong>: 1000GB
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
              className={this.props.arr[4] === true ? "item active" : "item"}
              onClick={() => {
                this.handleActive("full", "4");
              }}
            >
              <div className="header">
                <div className="img"></div>
              </div>
              <h4 style={{ textTransform: "capitalize", marginTop: "20px" }}>
                {" "}
                Dual Xeon 2680V4 + VGA 1070
              </h4>
              <h5 style={{ color: "red" }}>Sever full</h5>
              <p>
                7.000 <span>VNĐ/hour</span>
              </p>
              <p>
                82.000 <span>VNĐ/Day</span>
              </p>
              <p>
                1.800.000 <span>VNĐ/Month</span>
              </p>
              <ul>
                <li>
                  <strong>GPU:</strong>
                  <span style={{ fontWeight: "700", color: "green" }}>
                    VGA 1070 8Gb
                  </span>
                </li>
                <li>
                  <strong>CPU:</strong>
                  <span>Dual Xeon 2680V4 </span>
                </li>

                <li>
                  <strong>RAM</strong>: 64 GB
                </li>
                <li>
                  <strong>SSD</strong>: 500GB
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

export default GiaLap;
