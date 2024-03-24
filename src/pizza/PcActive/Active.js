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
      select: "",
      coin: "",
      time: "",
    };
  }
  componentDidMount() {}

  componentDidUpdate(prevProps, preState) {
    if (prevProps.name !== this.props.name) {
      this.setState({ name: this.props.name });
    }
    // if (prevProps.arr !== this.props.arr) {
    //   this.setState({ arr: this.props.arr });
    // }
    // if (prevProps.arrGame !== this.props.arrGame) {
    //   this.setState({ arrGame: this.props.arrGame });
    // }
    // if (prevProps.arrRenderAi !== this.props.arrRenderAi) {
    //   this.setState({ arrRenderAi: this.props.arrRenderAi });
    // }
    // if (prevProps.arrGiaLap01 !== this.props.arrGiaLap01) {
    //   this.setState({ arrGiaLap01: this.props.arrGiaLap01 });
    // }
    if (prevProps.number !== this.props.number) {
      this.setState({ number: this.props.number });
    }
  }
  handleName = (a) => {
    let name = [...this.state.name];
    for (let i = 0; i < name.length; i++) {
      if (a === i + 1) {
        return name[i];
      }
    }
  };
  handleSelect = (event) => {
    let selectedValue = event.target.value;
    this.setState({
      select: selectedValue,
      time: "",
      coin: 0,
    });
  };
  handleOnChangeTime = (event) => {
    let select = +this.state.select;
    let time = event.target.value;
    let coin = 0;
    console.log(">>>check select:", select);
    if (select === +1) {
      coin = time * 9000;
    } else if (select === +2) {
      coin = time * 99000;
    } else {
      coin = time * 120000;
    }
    const formattedCoin = coin.toLocaleString("en-US");
    this.setState({
      time: time,
      coin: formattedCoin,
    });
  };
  render() {
    let { name, arr, arrGame, arrChorme, arrRenderAi, arrGiaLap01 } =
      this.state;
    let number = [...this.state.number];
    return (
      <>
        {" "}
        <div className="container">
          <div className="row row-1">
            <>
              <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Nhập Thông Tin Thuê</h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <div className="row">
                        <div className="col-4">
                          <label className="form-label">
                            Chọn Đơn Vị Thuê:
                          </label>
                        </div>
                        <div className="col-4">
                          <select
                            className="form-select"
                            onChange={(event) => {
                              this.handleSelect(event);
                            }}
                          >
                            <option disabled selected>
                              Chọn Đơn Vị
                            </option>
                            <option value={1}>Giờ</option>
                            <option value={2}>Ngày</option>
                            <option value={3}>Tháng</option>
                          </select>
                        </div>
                        <div className="col-4"></div>
                      </div>
                      <div className="row  mt-3">
                        {" "}
                        <div className="col-4">
                          <label className="form-label">
                            Chọn Đơn Vị Thuê:
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            value={this.state.time}
                            type="number"
                            class="form-control"
                            id="email"
                            placeholder="Nhập Thời Gian Thuê"
                            name="email"
                            min="1"
                            onChange={(event) => {
                              this.handleOnChangeTime(event);
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        {" "}
                        <p className="col-4 text-left">Số Tiền Phải Trả :</p>
                        <div className="col-2">{this.state.coin}VND</div>
                        <div className="col-3"></div>
                        <div className="col-3"></div>
                      </div>
                      <div className="row mt-3">
                        {" "}
                        <p
                          className="col-12 text-left"
                          style={{ textAlign: "left", color: "red" }}
                        >
                          Lưu ý: Không hoàn tiền khi đã thuê máy ,vui lòng chọn
                          đúng thời gian sử dụng!
                        </p>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Thuê
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {arr && arr[2] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[0][2])}</h3>
                    <div className="box-child">
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

                      <button
                        className="rent"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      ></button>

                      <span
                        className="delete"
                        onClick={() =>
                          this.props.handleDelete("2", "arr", number[0][2] - 1)
                        }
                      ></span>
                    </div>
                  </div>
                </>
              )}
              {arr && arr[3] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[0][3])}</h3>
                    <div className="box-child">
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
                      <button
                        className="rent"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      ></button>
                      <span
                        className="delete"
                        onClick={() =>
                          this.props.handleDelete("3", "arr", number[0][3] - 1)
                        }
                      ></span>
                    </div>
                  </div>
                </>
              )}
              {arrGame && arrGame[1] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[1][1])}</h3>
                    <div className="box-child">
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
                      <button
                        className="rent"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      ></button>
                      <span
                        className="delete"
                        onClick={() =>
                          this.props.handleDelete(
                            "1",
                            "arrGame",
                            number[1][1] - 1
                          )
                        }
                      ></span>
                    </div>
                  </div>
                </>
              )}
              {arrGame && arrGame[2] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[1][2])}</h3>
                    <div className="box-child">
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
                      <button
                        className="rent"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      ></button>
                      <span
                        className="delete"
                        onClick={() =>
                          this.props.handleDelete(
                            "2",
                            "arrGame",
                            number[1][2] - 1
                          )
                        }
                      ></span>
                    </div>
                  </div>
                </>
              )}
              {arrRenderAi && arrRenderAi[1] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[3][1])}</h3>
                    <div className="box-child">
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
                      <button
                        className="rent"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      ></button>
                      <span
                        className="delete"
                        onClick={() =>
                          this.props.handleDelete(
                            "1",
                            "arrRenderAi",
                            number[3][1] - 1
                          )
                        }
                      ></span>
                    </div>
                  </div>
                </>
              )}
              {arrGiaLap01 && arrGiaLap01[1] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[4][1])}</h3>
                    <div className="box-child">
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
                      <button
                        className="rent"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      ></button>
                      <span
                        className="delete"
                        onClick={() =>
                          this.props.handleDelete(
                            "1",
                            "arrGiaLap01",
                            number[4][1] - 1
                          )
                        }
                      ></span>
                    </div>
                  </div>
                </>
              )}
              {arrGiaLap01 && arrGiaLap01[3] === true && (
                <>
                  <div className="box">
                    <h3 className="name">{this.handleName(number[4][3])}</h3>
                    <div className="box-child">
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
                      <button
                        className="rent"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                      ></button>
                      <span
                        className="delete"
                        onClick={() =>
                          this.props.handleDelete(
                            "3",
                            "arrGiaLap01",
                            number[4][3] - 1
                          )
                        }
                      ></span>
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
        </div>
      </>
    );
  }
}

export default Active;
