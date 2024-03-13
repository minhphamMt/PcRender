import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import "./Active.scss";

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      arr: this.props.arr,
      arrGame: this.props.arrGame,
      arrChorme: this.props.arrChorme,
      arrRenderAi: this.props.arrRenderAi,
      arrGiaLap01: this.props.arrGiaLap01,
      number: this.props.number,
    };
  }
  componentDidMount() {}

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.setState({ name: this.props.name });
    }
    if (prevProps.arr !== this.props.arr) {
      this.setState({ arr: this.props.arr });
    }
  }
  handleName = (a) => {
    let name = [...this.state.name];
    for (let i = 0; i < 6; i++) {
      if (a === i + 1) {
        return name[i];
      }
    }
  };
  render() {
    let { name, arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } =
      this.state;
    // console.log(">>>check index:", this.state.index);
    console.log(">>>check number:", this.state.number);
    // console.log(">>>check name:", name);
    let number = [...this.state.number];

    return (
      <>
        <div className="container">
          <div className="row">
            <>
              {arr && arr[2] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[0][2])}</h3>
                    <div>
                      <div className="header">
                        <div className="img"></div>
                      </div>
                      <h4
                        style={{
                          textTransform: "capitalize",
                          marginTop: "20px",
                        }}
                      >
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
                  </div>
                </>
              )}
              {arr && arr[3] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[0][3])}</h3>
                    <div>
                      <div className="header">
                        <div className="img"></div>
                      </div>
                      <h4
                        style={{
                          textTransform: "capitalize",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        Dual Xeon 2696V4 (44 Nhân - 88 Luồng)
                      </h4>
                      <h5 style={{ color: "green" }}>Server Ready</h5>
                      <p>
                        18.000
                        <span>VNĐ/hour</span>
                      </p>
                      <p>
                        18.000 <span>VNĐ/Day</span>
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
                  </div>
                </>
              )}
              {arrGame && arrGame[1] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[1][1])}</h3>
                    <div>
                      <div className="header">
                        <div className="img"></div>
                      </div>
                      <h4
                        style={{
                          textTransform: "capitalize",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        PC GAMING 3060Ti
                      </h4>
                      <h5 style={{ color: "green" }}>Server Ready</h5>
                      <p>
                        10.000
                        <span>VNĐ/hour</span>
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
                  </div>
                </>
              )}
              {arrGame && arrGame[2] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[1][2])}</h3>
                    <div>
                      <div className="header">
                        <div className="img"></div>
                      </div>
                      <h4
                        style={{
                          textTransform: "capitalize",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        PC GAMING 1660S
                      </h4>
                      <h5 style={{ color: "green" }}>Server Ready</h5>
                      <p>
                        7.000
                        <span>VNĐ/hour</span>
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
                </>
              )}
              {arrRenderAi && arrRenderAi[1] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[2][1])}</h3>
                    <div>
                      <div className="header">
                        <div className="img"></div>
                      </div>
                      <h4
                        style={{
                          textTransform: "capitalize",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        Core I7 12700 + VGA 3080 10GB
                      </h4>
                      <h5 style={{ color: "green" }}>Server Ready</h5>
                      <p>
                        25.000
                        <span>VNĐ/hour</span>
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
                          <strong>Box Phone</strong>:
                        </li>
                        <li>
                          <strong>Support</strong>: Team support 24/7
                        </li>
                      </ul>
                      <div className="tag"></div>
                    </div>
                  </div>
                </>
              )}
              {arrGiaLap01 && arrGiaLap01[1] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[4][1])}</h3>
                    <div>
                      <div className="header">
                        <div className="img"></div>
                      </div>
                      <h4
                        style={{
                          textTransform: "capitalize",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        Dual Xeon E5 2686V4 (36 Nhân 72 Luồng )
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
                            VGA 1080 8GB
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
                  </div>
                </>
              )}
              {arrGiaLap01 && arrGiaLap01[3] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[4][3])}</h3>
                    <div>
                      <div className="header">
                        <div className="img"></div>
                      </div>
                      <h4
                        style={{
                          textTransform: "capitalize",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        Dual Xeon E5 2680V4 + 3060Ti Server Ready
                      </h4>
                      <h5 style={{ color: "green" }}>Server Ready</h5>
                      <p>
                        11.000
                        <span>VNĐ/hour</span>
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
                </>
              )}
            </>
            ;
          </div>
        </div>
      </>
    );
  }
}

export default Active;
