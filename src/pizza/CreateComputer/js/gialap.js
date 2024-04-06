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
  // test = () => {
  //   let price = 3500;
  //   let money = [];
  //   let arr = [
  //     {
  //       name: "minh",
  //       age: "20",
  //       info: { email: "minh@gmail.com", number: "15" },
  //     },
  //     {
  //       name: "Hoa",
  //       age: "25",
  //       info: { email: "hoa@example.com", number: "20" },
  //     },
  //     {
  //       name: "Nam",
  //       age: "30",
  //       info: { email: "nam@example.com", number: "25" },
  //     },
  //     {
  //       name: "An",
  //       age: "22",
  //       info: { email: "an@example.com", number: "18" },
  //     },
  //     {
  //       name: "Linh",
  //       age: "28",
  //       info: { email: "linh@example.com", number: "23" },
  //     },
  //   ];
  //   /////cau 2
  //   for (let i = 0; i < arr.length; i++) {
  //     money[i] = (arr[i].info["number"] * price) / 30;
  //     console.log(">>>Check money:", money[i]);
  //   }
  //   let max = money[0];
  //   for (let i = 0; i < money.length; i++) {
  //     if (money[i] > max) {
  //       max = money[i];
  //     }
  //   }
  //   console.log(">>>Check max:", max);
  // };
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
                <p>Giả Lập 1</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
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
                <p>Giả Lập 2</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
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
                <p>Giả Lập 3</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
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
                <p>Giả Lập 4</p>
              </div>
              <h4 style={{ textTransform: "capitalize" }}>
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
